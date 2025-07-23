<?php

use App\Http\Controllers\BerandaController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\KabupatenController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\WisataController;
use Illuminate\Support\Facades\Route;

Route::get('/', [BerandaController::class, 'index'])->name('beranda');
Route::get('/kabupaten', [KabupatenController::class, 'index'])->name('kabupaten');
Route::get('/wisata', [WisataController::class, 'index'])->name('wisata');
Route::get('/wisata/{id}', [WisataController::class, 'show'])->name('wisata.show');

Route::get('/chatbot', [ChatbotController::class, 'index'])->name('chatbot');
Route::middleware('throttle:chatbot')->post('/chatbot/chat', [ChatbotController::class, 'chat'])->name('chatbot.chat');

Route::get('/reviews', [ReviewController::class, 'index'])->name('reviews');
Route::middleware('throttle:search-comments')->post('/reviews/search-comments', [ReviewController::class, 'searchComments'])->name('reviews.search_comments');


// Sitemap routes
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap.index');
Route::get('/sitemap-main.xml', [SitemapController::class, 'main'])->name('sitemap.main');
Route::get('/sitemap-wisata.xml', [SitemapController::class, 'wisata'])->name('sitemap.wisata');
Route::get('/sitemap-kabupaten.xml', [SitemapController::class, 'kabupaten'])->name('sitemap.kabupaten');
