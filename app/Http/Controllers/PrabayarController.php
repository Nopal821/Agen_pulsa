<?php

namespace App\Http\Controllers;

use App\Models\Prabayar;
use App\Models\Operator;
use App\Http\Resources\PrabayarResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrabayarController extends Controller
{
    // Menampilkan semua prabayar di halaman index
    public function index()
    {
        $prabayar = Prabayar::all(); // Memuat relasi operator
        return Inertia::render('Dashboard', [
            'prabayar' => PrabayarResource::collection($prabayar),
        ]);
    }

    // Menampilkan form create untuk membuat prabayar baru
    public function create()
    {
        $operators = Operator::all(); // Mendapatkan semua operator untuk dropdown
        return Inertia::render('Prabayar/Create', [
            'operators' => $operators,
        ]);
    }

    // Menyimpan prabayar baru
    // Menyimpan prabayar baru
public function store(Request $request)
{
    // Validasi input
    $request->validate([
        'operator_name' => 'required|string|max:255', // Menggunakan operator_name
        'expired' => 'nullable|date',
        'price' => 'required|numeric',
        'jenis' => 'required|string|max:255',
    ]);

    // Simpan data ke database
    Prabayar::create([
        'operator_name' => $request->operator_name, // Simpan operator_name
        'expired' => $request->expired,
        'price' => $request->price,
        'jenis' => $request->jenis,
    ]);

    // Redirect ke dashboard dengan pesan sukses
    return redirect()->route('dashboard')->with('success', 'Prabayar created successfully.');
}


    // Menampilkan form edit untuk prabayar
    public function edit($id)
    {
        $prabayar = Prabayar::findOrFail($id);
        return Inertia::render('Prabayar/Edit', [
            'prabayar' => $prabayar,
        ]);
    }
    

    // Memperbarui data prabayar
    public function update(Request $request, $id)
    {
        // Validasi input
        $request->validate([
            'operator_id' => 'required|exists:operators,id', // Menggunakan id operator, bukan nama
            'expired' => 'nullable|date',
            'price' => 'required|numeric',
            'jenis' => 'required|string|max:255',
        ]);

        // Mendapatkan prabayar berdasarkan id
        $prabayar = Prabayar::findOrFail($id);

        // Update data prabayar
        $prabayar->update([
            'operator_id' => $request->operator_id,
            'expired' => $request->expired,
            'price' => $request->price,
            'jenis' => $request->jenis,
        ]);

        // Redirect ke dashboard dengan pesan sukses
        return redirect()->route('dashboard')->with('success', 'Prabayar updated successfully.');
    }

    // Menghapus prabayar berdasarkan id
    public function destroy($id)
    {
        $prabayar = Prabayar::findOrFail($id);
        $prabayar->delete();

        // Redirect ke dashboard dengan pesan sukses
        return redirect()->route('dashboard')->with('success', 'Prabayar deleted successfully.');
    }
}
