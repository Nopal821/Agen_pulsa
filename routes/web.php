<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OperatorController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PrabayarController;
use Inertia\Inertia;

// Halaman depan dan informasi dasar
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Rute yang memerlukan autentikasi
Route::middleware('auth')->group(function () {

    Route::get('/operator/create', function () {
        return Inertia::render('Operator/Create');
    });
    // Profil pengguna
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Rute untuk Operator
    Route::prefix('dashboard')->group(function () {
        // Dashboard Operator
        Route::get('/operators', [OperatorController::class, 'index'])->name('dashboard.operators');
        // Resource route untuk Operator (termasuk rute create)
        Route::resource('operators', OperatorController::class)->except(['create', 'store']);
    });

    // Rute untuk Prabayar
    Route::prefix('dashboard')->group(function () {
        // Dashboard Prabayar
        Route::get('/prabayar', [PrabayarController::class, 'index'])->name('dashboard.prabayar');
        // Resource route untuk Prabayar (termasuk rute create)
        Route::resource('prabayar', PrabayarController::class)->except(['create', 'store']);
    });

    // Dashboard utama
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Rute untuk membuat Operator dan menyimpannya
   
Route::get('/operator', [OperatorController::class, 'index'])->name('operator.index');
Route::get('/operator/create', [OperatorController::class, 'create'])->name('operator.create');
Route::post('/operator', [OperatorController::class, 'store'])->name('operator.store');
Route::get('/operator/{id}/edit', [OperatorController::class, 'edit'])->name('operator.edit');
Route::put('/operator/{id}', [OperatorController::class, 'update'])->name('operator.update');
Route::delete('/operator/{id}', [OperatorController::class, 'destroy'])->name('operator.destroy');
    // Rute untuk membuat Prabayar dan menyimpannya
   
Route::get('/prabayar', [PrabayarController::class, 'index'])->name('prabayar.index');
Route::get('/prabayar/create', [PrabayarController::class, 'create'])->name('prabayar.create');
Route::post('/prabayar', [PrabayarController::class, 'store'])->name('prabayar.store');
});

// Rute untuk otentikasi
require __DIR__.'/auth.php';
