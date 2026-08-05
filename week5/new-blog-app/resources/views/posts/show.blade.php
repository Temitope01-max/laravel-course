<x-layout>
    <h2> {{$post->title}} </h2>

    <div class="bg-gray-200 p-4 rounded">
        <p><strong>Author:</strong> {{ $post->author }}</p>
        <p><strong>Content:</strong></p>
        <p>{{ $post->content }}</p>
        <p>Published on: {{$post->created_at->format('d M Y')}}</p>
    </div>
</x-layout>