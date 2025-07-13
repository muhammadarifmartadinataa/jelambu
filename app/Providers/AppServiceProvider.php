<?php

namespace App\Providers;

use App\Models\Fasilitas;
use App\Models\Kabupaten;
use App\Models\Wisata;
use App\Observers\FasilitasObserver;
use App\Observers\KabupatenObserver;
use App\Observers\WisataObserver;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);
        
        Kabupaten::observe(KabupatenObserver::class);
        Fasilitas::observe(FasilitasObserver::class);
        Wisata::observe(WisataObserver::class);
    }
}
