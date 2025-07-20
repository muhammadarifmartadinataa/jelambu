<?php

namespace App\Http\Controllers;

use App\Helpers\SeoHelper;
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

        // SEO Meta Tags
        $meta = SeoHelper::generateMetaTags([
            'title' => 'Daftar Kabupaten - ' . config('app.name'),
            'description' => 'Temukan destinasi wisata biru terbaik tiap kabupaten di Lampung. Jelajahi tempat-tempat indah dengan informasi lengkap fasilitas dan lokasi.',
            'keywords' => 'wisata lampung, destinasi wisata, tempat wisata, liburan lampung, wisata biru, pantai, laut, wisata alam',
            'url' => route('wisata')
        ]);

        // Structured Data
        $structuredData = SeoHelper::generateStructuredData('website', [
            'name' => config('app.name'),
            'url' => route('kabupaten'),
            'search_url' => route('wisata')
        ]);

        // Breadcrumb
        $breadcrumbStructuredData = SeoHelper::generateBreadcrumbStructuredData([
            ['name' => 'Beranda', 'url' => route('beranda')],
            ['name' => 'Kabupaten', 'url' => route('kabupaten')]
        ]);
        
        return Inertia::render('Kabupaten', [
            'kabupatens' => $kabupatens,
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang),
            'meta' => $meta,
            'structuredData' => $structuredData,
            'breadcrumbStructuredData' => $breadcrumbStructuredData
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
