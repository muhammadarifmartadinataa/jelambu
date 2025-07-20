<?php

namespace App\Http\Controllers;

use App\Models\Wisata;
use App\Models\Kabupaten;
use Illuminate\Http\Response;
use Carbon\Carbon;

class SitemapController extends Controller
{
    /**
     * Generate sitemap index
     */
    public function index()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
        $sitemap .= '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;
        
        // Main sitemap
        $sitemap .= $this->addSitemapEntry(route('sitemap.main'), now());
        
        // Wisata sitemap
        $sitemap .= $this->addSitemapEntry(route('sitemap.wisata'), $this->getLastWisataUpdate());
        
        // Kabupaten sitemap
        $sitemap .= $this->addSitemapEntry(route('sitemap.kabupaten'), $this->getLastKabupatenUpdate());
        
        $sitemap .= '</sitemapindex>';
        
        return response($sitemap, 200, [
            'Content-Type' => 'application/xml; charset=UTF-8'
        ]);
    }
    
    /**
     * Generate main sitemap (static pages)
     */
    public function main()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;
        
        // Homepage
        $sitemap .= $this->addUrlEntry(route('beranda'), now(), 'daily', '1.0');
        
        // Static pages
        $sitemap .= $this->addUrlEntry(route('wisata'), now(), 'daily', '0.9');
        $sitemap .= $this->addUrlEntry(route('kabupaten'), now(), 'weekly', '0.8');
        $sitemap .= $this->addUrlEntry(route('chatbot'), now(), 'monthly', '0.5');
        $sitemap .= $this->addUrlEntry(route('reviews'), now(), 'weekly', '0.7');
        
        $sitemap .= '</urlset>';
        
        return response($sitemap, 200, [
            'Content-Type' => 'application/xml; charset=UTF-8'
        ]);
    }
    
    /**
     * Generate wisata sitemap
     */
    public function wisata()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
                     xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">' . PHP_EOL;
        
        $wisatas = Wisata::select('slug', 'updated_at', 'thumbnail', 'nama')->get();
        
        foreach ($wisatas as $wisata) {
            $sitemap .= '<url>' . PHP_EOL;
            $sitemap .= '<loc>' . htmlspecialchars(route('wisata.show', $wisata->slug)) . '</loc>' . PHP_EOL;
            $sitemap .= '<lastmod>' . $wisata->updated_at->toAtomString() . '</lastmod>' . PHP_EOL;
            $sitemap .= '<changefreq>weekly</changefreq>' . PHP_EOL;
            $sitemap .= '<priority>0.8</priority>' . PHP_EOL;
            
            // Add image sitemap if image exists
            if ($wisata->thumbnail) {
                $sitemap .= '<image:image>' . PHP_EOL;
                $sitemap .= '<image:loc>' . htmlspecialchars(asset('storage/' . $wisata->thumbnail)) . '</image:loc>' . PHP_EOL;
                $sitemap .= '<image:title>' . htmlspecialchars($wisata->nama) . '</image:title>' . PHP_EOL;
                $sitemap .= '</image:image>' . PHP_EOL;
            }
            
            $sitemap .= '</url>' . PHP_EOL;
        }
        
        $sitemap .= '</urlset>';
        
        return response($sitemap, 200, [
            'Content-Type' => 'application/xml; charset=UTF-8'
        ]);
    }
    
    /**
     * Generate kabupaten sitemap
     */
    public function kabupaten()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;
        
        $kabupatens = Kabupaten::select('id', 'nama_kabupaten', 'updated_at')->get();
        
        foreach ($kabupatens as $kabupaten) {
            $sitemap .= $this->addUrlEntry(
                route('wisata') . '?kabupaten_id=' . $kabupaten->id,
                $kabupaten->updated_at,
                'weekly',
                '0.7'
            );
        }
        
        $sitemap .= '</urlset>';
        
        return response($sitemap, 200, [
            'Content-Type' => 'application/xml; charset=UTF-8'
        ]);
    }
    
    /**
     * Add sitemap entry to sitemap index
     */
    private function addSitemapEntry($loc, $lastmod)
    {
        return '<sitemap>' . PHP_EOL .
               '<loc>' . htmlspecialchars($loc) . '</loc>' . PHP_EOL .
               '<lastmod>' . $lastmod->toAtomString() . '</lastmod>' . PHP_EOL .
               '</sitemap>' . PHP_EOL;
    }
    
    /**
     * Add URL entry to sitemap
     */
    private function addUrlEntry($loc, $lastmod, $changefreq = 'weekly', $priority = '0.5')
    {
        return '<url>' . PHP_EOL .
               '<loc>' . htmlspecialchars($loc) . '</loc>' . PHP_EOL .
               '<lastmod>' . $lastmod->toAtomString() . '</lastmod>' . PHP_EOL .
               '<changefreq>' . $changefreq . '</changefreq>' . PHP_EOL .
               '<priority>' . $priority . '</priority>' . PHP_EOL .
               '</url>' . PHP_EOL;
    }
    
    /**
     * Get last wisata update time
     */
    private function getLastWisataUpdate()
    {
        $lastUpdate = Wisata::max('updated_at');
        return $lastUpdate ? Carbon::parse($lastUpdate) : now();
    }
    
    /**
     * Get last kabupaten update time
     */
    private function getLastKabupatenUpdate()
    {
        $lastUpdate = Kabupaten::max('updated_at');
        return $lastUpdate ? Carbon::parse($lastUpdate) : now();
    }
}