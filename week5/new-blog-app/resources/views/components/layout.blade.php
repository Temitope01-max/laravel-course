<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog Network</title>

    @vite('resources/css/app.css')
</head>
<body>
    {{-- @if (session('success'))
    <div id="flash" class="p-4 text-center bg-green-50 text-green-500 font-bold">
        {{ session('success') }}
    </div>
    @endif --}}

    <header>
        <nav>
            <h1>Blog Network</h1>
            <a href="{{ route('posts.index') }}">All Posts</a>
            @auth
            <p>
                <a href="{{ route('posts.create') }}">Create New Post</a>
            </p>
            @endauth
            {{-- <a href="{{ route('posts.create') }}">Create New Post</a> --}}

            @guest
            <p class="text-gray-400">Login to create posts</p>
            @endguest
        </nav>
    </header>

    <main class="container">
        {{ $slot }}
    </main>
    
</body>
</html>