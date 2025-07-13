<?php

use App\Http\Controllers\BerandaController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\KabupatenController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\WisataController;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

Route::get('/', [BerandaController::class, 'index'])->name('beranda');
Route::get('/kabupaten', [KabupatenController::class, 'index'])->name('kabupaten');
Route::get('/wisata', [WisataController::class, 'index'])->name('wisata');
Route::get('/wisata/{id}', [WisataController::class, 'show'])->name('wisata.show');
Route::get('/chatbot', [ChatbotController::class, 'index'])->name('chatbot');
Route::get('/reviews', [ReviewController::class, 'index'])->name('reviews');
Route::post('/reviews/search-comments', [ReviewController::class, 'searchComments'])->name('reviews.search_comments');

RateLimiter::for('chatbot', function ($request) {
    return Limit::perMinute(3)->by($request->ip());
});
Route::middleware('throttle:chatbot')->post('/chatbot/chat', [ChatbotController::class, 'chat'])->name('chatbot.chat');
