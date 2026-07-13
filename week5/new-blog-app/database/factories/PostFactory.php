<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 'title' => 'Strategy used in getting more clients',
            // 'content' => 'The art and science involved to maximize resources and gain more customers',
            // 'author' =>  'Kola',
            // 'comments' => 'This post was really helpful for me'

            'title' => fake()->realTextBetween(20, 50),
            'content' => fake()->realText(500),
            'author' =>  fake()->name(),
            'comments' => fake()->realText(150)
        ];
    }
}
