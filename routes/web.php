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
    // Profil pengguna
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Rute untuk Operator
    Route::prefix('dashboard')->group(function () {
        Route::get('/operators', [OperatorController::class, 'index'])->name('dashboard.operators');
        Route::resource('operators', OperatorController::class);
    });

    // Rute untuk Prabayar
    Route::prefix('dashboard')->group(function () {
        Route::get('/prabayar', [PrabayarController::class, 'index'])->name('dashboard.prabayar');
        Route::resource('prabayar', PrabayarController::class);
    });

    // Dashboard utama
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

// Rute untuk otentikasi
require __DIR__.'/auth.php';
