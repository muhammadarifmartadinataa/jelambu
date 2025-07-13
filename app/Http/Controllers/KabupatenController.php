<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kabupaten;
use Inertia\Inertia;

class KabupatenController extends Controller
{
    public function index(Request $request)
    {
        $lang = $request->get('lang', session('locale', 'id'));
        session(['locale' => $lang]);
        app()->setLocale($lang);
        
        $kabupatens = Kabupaten::withCount('wisatas')->get();
        
        return Inertia::render('Kabupaten', [
            'kabupatens' => $kabupatens,
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang)
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
