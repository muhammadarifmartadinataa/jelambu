<?php

namespace App\Http\Controllers;

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
        
        return Inertia::render('Beranda', [
            'kabupatens' => $kabupatens,
            'wisatas' => $wisatas,
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang),
            'destinations' => $destinations
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
