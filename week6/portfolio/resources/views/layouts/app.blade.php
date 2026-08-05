<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Portfolio')</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100">

<nav class="bg-green-600 text-white p-4">
    <div class="container mx-auto flex gap-6">

        <a href="{{ route('home') }}">Home</a>

        <a href="{{ route('about') }}">About</a>

        <a href="{{ route('projects') }}">Projects</a>

        <a href="{{ route('contact') }}">Contact</a>

    </div>
</nav>

<div class="container mx-auto py-8">
    @yield('content')
</div>

</body>
</html>
 