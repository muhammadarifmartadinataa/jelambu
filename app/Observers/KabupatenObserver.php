<?php

namespace App\Observers;

use App\Models\Kabupaten;
use Illuminate\Support\Facades\Storage;

class KabupatenObserver
{
    /**
     * Handle the Kabupaten "updated" event.
     */
    public function updated(Kabupaten $kabupaten): void
    {
        if ($kabupaten->isDirty('logo')) {
            if (Storage::disk('public')->exists($kabupaten->getOriginal('logo'))) {
                Storage::disk('public')->delete($kabupaten->getOriginal('logo'));
            }
        }
    }

    /**
     * Handle the Kabupaten "deleted" event.
     */
    public function deleted(Kabupaten $kabupaten): void
    {
        if (!is_null($kabupaten->logo)) {
            if (Storage::disk('public')->exists($kabupaten->logo)) {
                Storage::disk('public')->delete($kabupaten->logo);
            }
        }
    }
}
