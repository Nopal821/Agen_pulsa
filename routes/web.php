<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OperatorController;
use App\Http\Controllers\PrabayarController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Api\DataController;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/operators', [DataController::class, 'getOperators']);
Route::get('/prabayars', [DataController::class, 'getPrabayar']);


// Routes that require authentication
Route::middleware('auth')->group(function () {

    // Dashboard route
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Operator routes
    Route::resource('operator', OperatorController::class);

    // Prabayar routes
    Route::resource('prabayar', PrabayarController::class);

    Route::get('/Operator/Create', [OperatorController::class, 'create'])->name('operator.create');
    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




// Include authentication routes
require __DIR__.'/auth.php';
