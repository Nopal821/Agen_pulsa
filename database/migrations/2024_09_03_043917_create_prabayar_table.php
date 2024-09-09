<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('prabayar', function (Blueprint $table) {
            $table->id();
            $table->string('operator_name');
            $table->date('expired');
            $table->decimal('price', 8, 2);
            $table->enum('jenis', ['pulsa', 'data']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prabayar');
    }
};
