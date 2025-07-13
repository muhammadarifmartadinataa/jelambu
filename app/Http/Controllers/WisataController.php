<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wisata;
use App\Models\Kabupaten;
use Inertia\Inertia;

class WisataController extends Controller
{
    public function index(Request $request)
    {
        $lang = $request->get('lang', session('locale', 'id'));
        session(['locale' => $lang]);
        app()->setLocale($lang);
        
        $query = Wisata::with('kabupaten');
        
        if ($request->has('kabupaten_id') && $request->kabupaten_id != '') {
            $query->where('kabupaten_id', $request->kabupaten_id);
        }
        
        if ($request->has('search') && $request->search != '') {
            $query->where('nama', 'like', '%' . $request->search . '%');
        }
        
        $wisatas = $query->get();
        $kabupatens = Kabupaten::all();
        
        return Inertia::render('Wisata/Index', [
            'wisatas' => $wisatas,
            'kabupatens' => $kabupatens,
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang)
        ]);
    }
    
    public function show(Request $request, $slug)
    {
        $lang = $request->get('lang', session('locale', 'id'));
        session(['locale' => $lang]);
        app()->setLocale($lang);
        
        $wisata = Wisata::with(['kabupaten', 'fasilitas'])->where('slug', $slug)->firstOrFail();
        $relatedWisatas = Wisata::with('kabupaten')
            ->where('kabupaten_id', $wisata->kabupaten_id)
            ->where('slug', '!=', $slug)
            ->take(3)
            ->get();

        $videoEmbed = null;
        
        if ($wisata->video && preg_match('/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/', $wisata->video, $matches)) {
            $videoEmbed = 'https://www.youtube.com/embed/' . $matches[1];
        }
        
        return Inertia::render('Wisata/Show', [
            'wisata' => $wisata,
            'relatedWisatas' => $relatedWisatas,
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang),
            'videoEmbed' => $videoEmbed
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
