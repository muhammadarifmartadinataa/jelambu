<?php

namespace App\Http\Controllers;

use App\Helpers\SeoHelper;
use App\Models\Kabupaten;
use App\Models\Wisata;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerandaController extends Controller
{
    public function index(Request $request)
    {
        $lang = $request->get('lang', session('locale', 'id'));
        session(['locale' => $lang]);
        app()->setLocale($lang);
        
        $kabupatens = Kabupaten::withCount('wisatas')->get();
        $wisatas = Wisata::with('kabupaten')->take(6)->get();
        $destinations = Wisata::all()->pluck('twitter_keyword');

        // SEO Meta Tags untuk homepage
        $meta = SeoHelper::generateMetaTags([
            'title' => 'Jelajah Lampung Biru - ' . config('app.name'),
            'description' => 'Temukan keindahan wisata biru Lampung yang menakjubkan. Dari pantai eksotis hingga laut yang memukau.',
            'keywords' => 'wisata lampung, destinasi wisata, tempat wisata, liburan lampung, pariwisata, travel lampung, pantai lampung',
            'url' => route('beranda'),
            'type' => 'website'
        ]);

        // Structured Data untuk website
        $structuredData = SeoHelper::generateStructuredData('website', [
            'name' => config('app.name'),
            'url' => route('beranda'),
            'search_url' => route('wisata')
        ]);
        
        return Inertia::render('Beranda', [
            'kabupatens' => $kabupatens,
            'wisatas' => $wisatas,
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang),
            'destinations' => $destinations,
            'meta' => $meta,
            'structuredData' => $structuredData
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
