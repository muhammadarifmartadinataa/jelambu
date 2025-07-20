<?php

namespace App\Http\Controllers;

use App\Helpers\SeoHelper;
use Illuminate\Http\Request;
use App\Models\Wisata;
use App\Models\Kabupaten;
use Inertia\Inertia;
use Illuminate\Support\Str;

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

        // SEO Meta Tags
        $meta = SeoHelper::generateMetaTags([
            'title' => 'Daftar Wisata - ' . config('app.name'),
            'description' => 'Temukan destinasi wisata biru terbaik di Lampung. Jelajahi tempat-tempat indah dengan informasi lengkap fasilitas dan lokasi.',
            'keywords' => 'wisata lampung, destinasi wisata, tempat wisata, liburan lampung, wisata biru, pantai, laut, wisata alam',
            'url' => route('wisata')
        ]);

        // Structured Data
        $structuredData = SeoHelper::generateStructuredData('website', [
            'name' => config('app.name'),
            'url' => route('wisata'),
            'search_url' => route('wisata')
        ]);

        // Breadcrumb
        $breadcrumbStructuredData = SeoHelper::generateBreadcrumbStructuredData([
            ['name' => 'Beranda', 'url' => route('beranda')],
            ['name' => 'Wisata', 'url' => route('wisata')]
        ]);
        
        return Inertia::render('Wisata/Index', [
            'wisatas' => $wisatas,
            'kabupatens' => $kabupatens,
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang),
            'meta' => $meta,
            'structuredData' => $structuredData,
            'breadcrumbStructuredData' => $breadcrumbStructuredData
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

        // SEO Meta Tags
        $meta = SeoHelper::generateMetaTags([
            'title' => $wisata->nama . ' - Wisata ' . $wisata->kabupaten->nama_kabupaten,
            'description' => Str::limit(strip_tags($wisata->deskripsi) ?: 'Jelajahi keindahan ' . $wisata->nama . ' di ' . $wisata->kabupaten->nama_kabupaten . '. Informasi lengkap fasilitas dan panduan wisata.', 300),
            'keywords' => $wisata->nama . ', wisata ' . $wisata->kabupaten->nama_kabupaten . ', destinasi wisata lampung',
            'image' => $wisata->thumbnail ? asset('storage/' . $wisata->thumbnail) : asset('assets/images/logo/og-image.jpg'),
            'url' => route('wisata.show', $wisata->slug),
            'type' => 'article'
        ]);

        // Structured Data
        $structuredData = SeoHelper::generateStructuredData('tourist_attraction', [
            'name' => $wisata->nama,
            'description' => Str::limit(strip_tags($wisata->deskripsi), 300),
            'image' => $wisata->thumbnail ? asset('storage/' . $wisata->thumbnail) : null,
            'location' => $wisata->kabupaten->nama_kabupaten,
            'latitude' => $wisata->latitude,
            'longitude' => $wisata->longitude,
            'url' => route('wisata.show', $wisata->slug)
        ]);

        // Breadcrumb
        $breadcrumbStructuredData = SeoHelper::generateBreadcrumbStructuredData([
            ['name' => 'Beranda', 'url' => route('beranda')],
            ['name' => 'Wisata', 'url' => route('wisata')],
            ['name' => $wisata->nama, 'url' => route('wisata.show', $wisata->slug)]
        ]);
        
        return Inertia::render('Wisata/Show', [
            'wisata' => $wisata,
            'relatedWisatas' => $relatedWisatas,
            'currentLang' => $lang,
            'translations' => $this->getTranslations($lang),
            'videoEmbed' => $videoEmbed,
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
