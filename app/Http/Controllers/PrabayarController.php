<?php
// app/Http/Controllers/PrabayarController.php
namespace App\Http\Controllers;

use App\Models\Prabayar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrabayarController extends Controller
{
    public function index()
    {
        $prabayar = Prabayar::all();
        return Inertia::render('Prabayar/Index', [
            'prabayar' => $prabayar,
        ]);
    }

    public function create()
    {
        return Inertia::render('Prabayar/Create'); // Halaman form untuk menambah prabayar baru
    }

    public function store(Request $request)
    {
        $request->validate([
            'operator_name' => 'required|string|max:255',
            'expired' => 'required|date',
            'price' => 'required|numeric',
            'jenis' => 'required|in:pulsa,data',
        ]);

        Prabayar::create($request->all()); // Simpan data prabayar
        return redirect()->route('dashboard.prabayar')->with('success', 'Prabayar berhasil ditambahkan!');
    }

    public function edit(Prabayar $prabayar)
    {
        return Inertia::render('Prabayar/Edit', [
            'prabayar' => $prabayar,
        ]); // Halaman form untuk edit prabayar
    }

    public function update(Request $request, Prabayar $prabayar)
    {
        $request->validate([
            'operator_name' => 'required|string|max:255',
            'expired' => 'required|date',
            'price' => 'required|numeric',
            'jenis' => 'required|in:pulsa,data',
        ]);

        $prabayar->update($request->all()); // Update data prabayar
        return redirect()->route('dashboard.prabayar')->with('success', 'Prabayar berhasil diperbarui!');
    }

    public function destroy(Prabayar $prabayar)
    {
        $prabayar->delete(); // Hapus data prabayar
        return redirect()->route('dashboard.prabayar')->with('success', 'Prabayar berhasil dihapus!');
    }
}
