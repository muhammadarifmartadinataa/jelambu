<?php

namespace App\Observers;

use App\Models\Fasilitas;
use Illuminate\Support\Facades\Storage;

class FasilitasObserver
{
    /**
     * Handle the Fasilitas "updated" event.
     */
    public function updated(Fasilitas $fasilitas): void
    {
        if ($fasilitas->isDirty('icon')) {
            if (Storage::disk('public')->exists($fasilitas->getOriginal('icon'))) {
                Storage::disk('public')->delete($fasilitas->getOriginal('icon'));
            }
        }
    }

    /**
     * Handle the Fasilitas "deleted" event.
     */
    public function deleted(Fasilitas $fasilitas): void
    {
        if (!is_null($fasilitas->icon)) {
            if (Storage::disk('public')->exists($fasilitas->icon)) {
                Storage::disk('public')->delete($fasilitas->icon);
            }
        }
    }
}
