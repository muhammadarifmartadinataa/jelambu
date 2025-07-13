<?php

namespace App\Observers;

use App\Models\Wisata;
use Illuminate\Support\Facades\Storage;

class WisataObserver
{
    /**
     * Handle the Wisata "updated" event.
     */
    public function updated(Wisata $wisata): void
    {
        if ($wisata->isDirty('thumbnail')) {
            if (Storage::disk('public')->exists($wisata->getOriginal('thumbnail'))) {
                Storage::disk('public')->delete($wisata->getOriginal('thumbnail'));
            }
        }

        if ($wisata->isDirty('galeri')) {
            $oldGaleri = $wisata->getOriginal('galeri') ?: [];
            $newGaleri = $wisata->galeri ?: [];

            $deletedGaleri = array_diff($oldGaleri, $newGaleri);

            foreach ($deletedGaleri as $file) {
                if (Storage::disk('public')->exists($file)) {
                    Storage::disk('public')->delete($file);
                }
            }
        }
    }

    /**
     * Handle the Wisata "deleted" event.
     */
    public function deleted(Wisata $wisata): void
    {
        if (Storage::disk('public')->exists($wisata->thumbnail)) {
            Storage::disk('public')->delete($wisata->thumbnail);
        }

        $galeri = $wisata->galeri ?: [];
        foreach ($galeri as $file) {
            if (Storage::disk('public')->exists($file)) {
                Storage::disk('public')->delete($file);
            }
        }
    }
}
