<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function about()
    {
        return view('about');
    }

    public function projects()
    {
        $projects = [
            [
                'title' => 'Portfolio Website',
                'description' => 'A personal portfolio website built with Laravel and Tailwind CSS.',
                'link' => '#',
                // 'link' => 'https://github.com/username/portfolio',
            ],
            [
                'title' => 'Task Manager',
                'description' => 'A CRUD task management application using Laravel.',
                'link' => '#',
                // 'link' => 'https://github.com/username/task-manager',

            ],
            [
                'title' => 'Weather App',
                'description' => 'A weather application consuming a third-party API.',
                'link' => '#',
                // 'link' => 'https://github.com/username/weather-app',

            ],
        ];

        return view('projects', compact('projects'));
    }

    public function contact()
    {
        return view('contact');
    }
}

