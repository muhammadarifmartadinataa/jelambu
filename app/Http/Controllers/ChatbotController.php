<?php

namespace App\Http\Controllers;

use App\Helpers\SeoHelper;
use Illuminate\Http\Request;
use App\Models\Wisata;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ChatbotController extends Controller
{
    public function index(Request $request)
    {
        $lang = $request->get('lang', session('locale', 'id'));
        session(['locale' => $lang]);
        app()->setLocale($lang);

        // SEO Meta Tags untuk homepage
        $meta = SeoHelper::generateMetaTags([
            'title' => 'Chatbot AI - ' . config('app.name'),
            'description' => 'Asisten wisata AI yang siap membantu Anda menemukan destinasi wisata biru terbaik di Lampung. Tanyakan apa saja tentang wisata dan tips perjalanan!',
            'keywords' => 'wisata lampung, destinasi wisata, tempat wisata, liburan lampung, pariwisata, travel lampung, pantai lampung, ai, chatbot ai, ajel ai',
            'url' => route('chatbot'),
            'type' => 'website'
        ]);

        // Structured Data untuk website
        $structuredData = SeoHelper::generateStructuredData('website', [
            'name' => config('app.name'),
            'url' => route('chatbot'),
            'search_url' => route('wisata')
        ]);

        // Breadcrumb
        $breadcrumbStructuredData = SeoHelper::generateBreadcrumbStructuredData([
            ['name' => 'Beranda', 'url' => route('beranda')],
            ['name' => 'Chatbot AI', 'url' => route('chatbot')]
        ]);
        
        return Inertia::render('Chatbot', [
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang),
            'meta' => $meta,
            'structuredData' => $structuredData,
            'breadcrumbStructuredData' => $breadcrumbStructuredData
        ]);
    }
    
    public function chat(Request $request)
    {
        $question = $request->input('message');
        $response = $this->generateResponse($question);
        
        return $response;
    }
    
    private function generateResponse($question)
    {   
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'X-goog-api-key' => env('GEMINI_API_KEY'),
        ])->post('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', [
            'contents' => [
                [
                    'parts' => [
                        [
                            'text' => "Kamu adalah Ajel, asisten wisata biru dari Jelambu (Jelajah Lampung Biru). Ini adalah website informasi wisata biru di Lampung. Jawabanmu harus **hanya berupa isi konten HTML** (tanpa tag <html>, <head>, <body> atau tanda ```html```) dan tanpa gambar. Gunakan tag seperti <strong>, <p>, <ul>, <hr>, <h2>, dll untuk membuat tampilannya menarik. Topik pertanyaan: {$question}"
                        ]
                    ]
                ]
            ],
            'generationConfig' => [
                'temperature' => 0.7,
                'topK' => 1,
                'topP' => 1,
                'maxOutputTokens' => 1024,
            ]
        ]);

        $reply = $response['candidates'][0]['content']['parts'][0]['text'] ?? 'Maaf, saya belum punya informasi itu.';

        return response()->json([
            'reply' => $reply
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
