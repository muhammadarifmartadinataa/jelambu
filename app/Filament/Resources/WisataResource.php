<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WisataResource\Pages;
use App\Filament\Resources\WisataResource\RelationManagers;
use App\Models\Wisata;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class WisataResource extends Resource
{
    protected static ?string $model = Wisata::class;

    protected static ?string $navigationIcon = 'heroicon-o-globe-asia-australia';

    protected static ?string $navigationLabel = 'Wisata';

    protected static ?string $pluralLabel = 'Wisata';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(3)
                    ->schema([
                        Section::make('Detail Wisata')
                            ->schema([
                                Forms\Components\TextInput::make('nama')
                                    ->required()
                                    ->maxLength(255)
                                    ->label('Nama Wisata'),
                                Grid::make(2)
                                    ->schema([
                                        Forms\Components\TextInput::make('lokasi')
                                            ->required()
                                            ->maxLength(255)
                                            ->label('Desa & Kecamatan'),
                                        Forms\Components\Select::make('kabupaten_id')
                                            ->required()
                                            ->relationship('kabupaten', 'nama_kabupaten'),
                                        ]),
                                    Grid::make(3)
                                    ->schema([
                                        Forms\Components\TextInput::make('rating')
                                            ->required()
                                            ->numeric()
                                            ->minValue(1)
                                            ->maxValue(5)
                                            ->step(0.1),
                                        Forms\Components\TextInput::make('latitude')
                                            ->required(),
                                        Forms\Components\TextInput::make('longitude')
                                            ->required(),
                                    ]),
                                    Forms\Components\RichEditor::make('deskripsi')
                                        ->required()
                                        ->disableToolbarButtons([
                                            'attachFiles',
                                        ]),
                            ])->columnSpan(2),
                        Grid::make(1)
                            ->schema([
                                Section::make('Fasilitas Wisata')
                                    ->schema([
                                        Forms\Components\Select::make('fasilitas')
                                            ->relationship('fasilitas', 'nama')
                                            ->multiple()
                                            ->preload()
                                            ->hiddenLabel(true),
                                    ]),
                                Section::make('Thumbnail & Video')
                                    ->schema([
                                        Forms\Components\TextInput::make('video')
                                            ->maxLength(255)
                                            ->label('Link Video Youtube'),
                                        Forms\Components\FileUpload::make('thumbnail')
                                            ->required()
                                            ->image()
                                            ->directory('thumbnail'),
                                    ]),
                            ])->columnSpan(1)
                    ]),
                Section::make('Galeri')
                    ->schema([
                        Forms\Components\FileUpload::make('galeri')
                            ->multiple()
                            ->directory('galeri')
                            ->hiddenLabel(true)
                            ->image(),
                    ]),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nama')
                    ->label('Nama Wisata'),
                Tables\Columns\TextColumn::make('lokasi'),
                Tables\Columns\TextColumn::make('kabupaten.nama_kabupaten'),
                Tables\Columns\TextColumn::make('rating')
                    ->badge(),              
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWisatas::route('/'),
            'create' => Pages\CreateWisata::route('/create'),
            'edit' => Pages\EditWisata::route('/{record}/edit'),
        ];
    }
}
