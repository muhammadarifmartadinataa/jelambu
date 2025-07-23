<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Dynamic Title -->
        <title inertia>{{ $page['props']['meta']['title'] ?? config('app.name') }}</title>

        <!-- Google Site Verification -->
        <meta name="google-site-verification" content="Nhf7M2aq2p-r4wMOF3AByrJlChPH8bSqvBdpdHOpVeI" />

        <!-- Basic Meta Tags -->
        <meta name="description" content="{{ $page['props']['meta']['description'] ?? 'Temukan keindahan wisata biru Lampung yang menakjubkan. Dari pantai eksotis hingga laut yang memukau.' }}">
        <meta name="keywords" content="{{ $page['props']['meta']['keywords'] ?? '' }}">
        <meta name="robots" content="{{ $page['props']['meta']['robots'] ?? 'index,follow' }}">
        <meta name="author" content="{{ config('app.name') }}">
        <link rel="canonical" href="{{ $page['props']['meta']['canonical'] ?? request()->url() }}">

        <!-- Open Graph Meta Tags -->
        <meta property="og:title" content="{{ $page['props']['meta']['og:title'] ?? config('app.name') }}">
        <meta property="og:description" content="{{ $page['props']['meta']['og:description'] ?? 'Temukan keindahan wisata biru Lampung yang menakjubkan. Dari pantai eksotis hingga laut yang memukau.' }}">
        <meta property="og:image" content="{{ $page['props']['meta']['og:image'] ?? asset('assets/images/logo/og-image.jpg') }}">
        <meta property="og:url" content="{{ $page['props']['meta']['og:url'] ?? request()->url() }}">
        <meta property="og:type" content="{{ $page['props']['meta']['og:type'] ?? 'website' }}">
        <meta property="og:site_name" content="{{ $page['props']['meta']['og:site_name'] ?? config('app.name') }}">
        <meta property="og:locale" content="{{ $page['props']['meta']['og:locale'] ?? app()->getLocale() }}">

        <!-- Twitter Card Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $page['props']['meta']['twitter:title'] ?? config('app.name') }}">
        <meta name="twitter:description" content="{{ $page['props']['meta']['twitter:description'] ?? 'Temukan keindahan wisata biru Lampung yang menakjubkan. Dari pantai eksotis hingga laut yang memukau.' }}">
        <meta name="twitter:image" content="{{ $page['props']['meta']['twitter:image'] ?? asset('assets/images/logo/og-image.jpg') }}">

        <!-- Structured Data -->
        @if(isset($page['props']['structuredData']))
            <script type="application/ld+json">
                {!! json_encode($page['props']['structuredData'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}
            </script>
        @endif

        <!-- Breadcrumb Structured Data -->
        @if(isset($page['props']['breadcrumbStructuredData']))
            <script type="application/ld+json">
                {!! json_encode($page['props']['breadcrumbStructuredData'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}
            </script>
        @endif

        <!-- Favicon -->
        <link rel="icon" href="{{ asset('assets/images/logo/favicon.ico') }}" type="image/x-icon">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
        
        <!-- SimpleLightbox CSS -->
        <link href="https://cdn.jsdelivr.net/npm/simplelightbox@2.14.1/dist/simple-lightbox.min.css" rel="stylesheet">
        
        <!-- Styles / Scripts -->
        @routes
        @vite(['resources/js/app.js'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <!-- SimpleLightbox JS -->
        <script src="https://cdn.jsdelivr.net/npm/simplelightbox@2.14.1/dist/simple-lightbox.min.js"></script>
    </body>
</html>
