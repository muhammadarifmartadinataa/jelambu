<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class LanguageMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $language = $request->get('lang', Session::get('language', 'id'));
    
        if (!in_array($language, ['id', 'en'])) {
            $language = 'id';
        }
        
        App::setLocale($language);
        
        Session::put('language', $language);
        
        view()->share('currentLang', $language);
        
        return $next($request);
    }
}
