<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();

            // Post details
            $table->string('title');
            $table->text('content');

            // Author
            $table->string('author');

            // Comments (optional notes or comment count)
            $table->text('comments')->nullable();

            // Publication status
            $table->boolean('published')->default(false);
            $table->timestamp('published_at')->nullable();

            // Laravel timestamps
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
