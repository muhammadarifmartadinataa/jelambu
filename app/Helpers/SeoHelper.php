<?php

namespace App\Helpers;

class SeoHelper
{
    /**
     * Generate meta tags untuk halaman
     *
     * @param array $data
     * @return array
     */
    public static function generateMetaTags($data = [])
    {
        $defaults = [
            'title' => config('app.name'),
            'description' => 'Jelajahi keindahan wisata Indonesia dengan panduan lengkap destinasi, fasilitas, dan informasi terkini.',
            'image' => asset('assets/images/logo/og-image.jpg'),
            'url' => request()->url(),
            'type' => 'website',
            'site_name' => config('app.name'),
            'locale' => app()->getLocale(),
        ];

        $meta = array_merge($defaults, $data);

        return [
            // Basic Meta Tags
            'title' => $meta['title'],
            'description' => $meta['description'],
            'keywords' => $meta['keywords'] ?? '',
            
            // Open Graph Tags
            'og:title' => $meta['title'],
            'og:description' => $meta['description'],
            'og:image' => $meta['image'],
            'og:url' => $meta['url'],
            'og:type' => $meta['type'],
            'og:site_name' => $meta['site_name'],
            'og:locale' => $meta['locale'],
            
            // Twitter Card Tags
            'twitter:card' => 'summary_large_image',
            'twitter:title' => $meta['title'],
            'twitter:description' => $meta['description'],
            'twitter:image' => $meta['image'],
            
            // Additional Meta Tags
            'canonical' => $meta['url'],
            'robots' => $meta['robots'] ?? 'index,follow',
        ];
    }

    /**
     * Generate structured data untuk berbagai jenis konten
     *
     * @param string $type
     * @param array $data
     * @return array
     */
    public static function generateStructuredData($type, $data)
    {
        switch ($type) {
            case 'tourist_attraction':
                return [
                    '@context' => 'https://schema.org',
                    '@type' => 'TouristAttraction',
                    'name' => $data['name'],
                    'description' => $data['description'],
                    'image' => $data['image'],
                    'address' => [
                        '@type' => 'PostalAddress',
                        'addressLocality' => $data['location'],
                        'addressCountry' => 'ID'
                    ],
                    'geo' => [
                        '@type' => 'GeoCoordinates',
                        'latitude' => $data['latitude'] ?? null,
                        'longitude' => $data['longitude'] ?? null
                    ],
                    'url' => $data['url']
                ];
            
            case 'website':
                return [
                    '@context' => 'https://schema.org',
                    '@type' => 'WebSite',
                    'name' => $data['name'],
                    'url' => $data['url'],
                    'potentialAction' => [
                        '@type' => 'SearchAction',
                        'target' => $data['search_url'] . '?search={search_term_string}',
                        'query-input' => 'required name=search_term_string'
                    ]
                ];
                
            default:
                return [];
        }
    }

    /**
     * Generate breadcrumb structured data
     *
     * @param array $breadcrumbs
     * @return array
     */
    public static function generateBreadcrumbStructuredData($breadcrumbs)
    {
        $items = [];
        
        foreach ($breadcrumbs as $index => $breadcrumb) {
            $items[] = [
                '@type' => 'ListItem',
                'position' => $index + 1,
                'name' => $breadcrumb['name'],
                'item' => $breadcrumb['url']
            ];
        }

        return [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $items
        ];
    }
}