<?php

namespace App\Http\Controllers;

use App\Models\Wisata;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use KubAT\PhpSimple\HtmlDomParser;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        $lang = $request->get('lang', session('locale', 'id'));
        session(['locale' => $lang]);
        app()->setLocale($lang);

        $destinations = Wisata::all()->pluck('twitter_keyword');

        return Inertia::render('Reviews', [
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang),
            'destinations' => $destinations
        ]);
    }

    public function searchComments(Request $request)
    {
        $query = $request->input('query');

        if (Cache::has("tweets:{$query}")) {
            return response()->json([
                'tweets' => Cache::get("tweets:{$query}"),
                'summary' => Cache::get("summary:{$query}")
            ]);
        }

        $response = Http::withHeaders([
            'x-api-key' => env('SEKAREP_API_KEY'),
        ])->post(env('SEKAREP_API_URL'), [
            'query' => $query
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Gagal mengambil data.'], 500);
        }

        $data = $response->json();

        $tweets = collect($data['data'] ?? [])->map(function ($tweet) {
            return [
                'username' => $tweet['username'] ?? 'unknown',
                'profile_image' => $tweet['profile_image'] ?? '',
                'text' => $tweet['content'],
                'created_at' => Carbon::parse($tweet['created_at'])->locale('id')->diffForHumans(),
            ];
        });

        if ($tweets->isEmpty()) {
            return response()->json(['tweets' => [], 'summary' => 'Tidak ada tweet ditemukan.']);
        }

        $allText = collect($tweets)->pluck('text')->implode("\n\n");
        $prompt = "Berikut adalah komentar netizen tentang '" . $query . "':\n\n" . $allText . "\n\nBuat kesimpulan dalam format HTML ringan (gunakan <ul>, <p>, atau <strong>) jangan pakai simbol markdown. Jangan mengarang, rangkum dari komentar di atas. Gunakan bahasa Indonesia.";

        $geminiResponse = Http::withHeaders([
            'Content-Type' => 'application/json',
            'X-goog-api-key' => env('GEMINI_API_KEY'),
        ])->post('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', [
            'contents' => [
                [
                    'parts' => [
                        ['text' => $prompt]
                    ]
                ]
            ],
            'generationConfig' => [
                'temperature' => 0.7,
                'maxOutputTokens' => 1024,
            ]
        ]);

        $summary = $geminiResponse['candidates'][0]['content']['parts'][0]['text'] ?? 'Maaf, tidak bisa memberikan kesimpulan.';

        Cache::put("tweets:{$query}", $tweets, now()->addMinutes(10));
        Cache::put("summary:{$query}", $summary, now()->addMinutes(10));

        return response()->json([
            'tweets' => $tweets,
            'summary' => $summary
        ]);
    }

    private function getTranslations($lang)
    {
        $translations = [];
        $file = resource_path("lang/{$lang}/messages.php");
        
        if (file_exists($file)) {
            $translations = include $file;
        }
        
        return $translations;
    }
}
