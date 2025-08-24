<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;

class RateLimiterServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        RateLimiter::for('chatbot', function ($request) {
            return Limit::perMinute(100)->by($request->ip());
        });

        RateLimiter::for('search-comments', function ($request) {
            return Limit::perMinute(3)->by($request->ip());
        });
    }
}
