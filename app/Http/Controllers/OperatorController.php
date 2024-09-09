<?php
// app/Http/Controllers/OperatorController.php
namespace App\Http\Controllers;

use App\Models\Operator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OperatorController extends Controller
{
    public function index()
    {
        $operators = Operator::all();
        return Inertia::render('Operator/Index', [
            'operators' => $operators,
        ]);
    }
    
    public function create()
    {
        return Inertia::render('Operator/Create'); // Halaman form untuk menambah operator baru
    }

    public function store(Request $request)
    {
        $request->validate([
            'operator_name' => 'required|string|max:255',
        ]);

        Operator::create($request->all()); // Simpan data operator
        return redirect()->route('dashboard.operators')->with('success', 'Operator berhasil ditambahkan!');
    }

    public function edit(Operator $operator)
    {
        return Inertia::render('Operator/Edit', [
            'operator' => $operator,
        ]); // Halaman form untuk edit operator
    }

    public function update(Request $request, Operator $operator)
    {
        $request->validate([
            'operator_name' => 'required|string|max:255',
        ]);

        $operator->update($request->all()); // Update data operator
        return redirect()->route('dashboard.operators')->with('success', 'Operator berhasil diperbarui!');
    }

    public function destroy(Operator $operator)
    {
        $operator->delete(); // Hapus data operator
        return redirect()->route('dashboard.operators')->with('success', 'Operator berhasil dihapus!');
    }
}
