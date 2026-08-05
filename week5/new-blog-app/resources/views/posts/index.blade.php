<x-layout>
    <h2>Currently Available Posts</h2>

    <ul>
        @empty($posts)
        <p class="text-gray-400">No posts yet. <a href="{{route('posts.create') }}">Create the first one</a> </p>
        @else
            @foreach($posts as $post)
            <li>
                <x-card 
                href="{{ route('posts.show', $post->id) }}" 
                :published="$post['published']"
                >
                    <div>
                        <h3>{{ $post->title }}</h3>
                        @if($post->published)
                            <span class="rounded bg-green-100 px-2 py-1 text-sm text-green-800">published</span>
                        @else
                            <span class="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">Draft</span>
                        @endif
                        {{-- <p><strong>Category:</strong>{{ $post->category->name }}</p> --}}
                    </div>
                </x-card>
            </li>
            @endforeach
        @endempty
    </ul>

    {{ $posts->links() }}
</x-layout>