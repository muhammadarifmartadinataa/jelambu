<?php

namespace App\Filament\Resources\KeywordResource\Pages;

use App\Filament\Resources\KeywordResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageKeywords extends ManageRecords
{
    protected static string $resource = KeywordResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
