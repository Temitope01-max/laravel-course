<x-layout>
    <h2>{{ $ninja->name }}</h2>

    <div class="bg-gray-200 p-4 rounded">
        <p><strong>Skill level:</strong> {{ $ninja->skill }}</p>
        <p><strong>About me:</strong></p>
        <p>{{ $ninja->bio }}</p>
    </div>

    {{-- dojo info --}}
    <div class="border-2 border-dashed bg-white px-4 pb-4 my-4 rounded">
        <h3>Category Information</h3>
        <p><strong>Category:</strong>{{ $ninja->dojo->name }}</p>
        <p><strong>Location:</strong>{{ $ninja->dojo->location }}</p>
        <p><strong>About the Category:</strong></p>
        <p>{{ $ninja->dojo->description }}</p>
    </div>

    {{-- <form action="{{ route('ninjas.destroy', $ninjas->id) }}" method="POST">
        @csrf
        @method('DELETE')

        <button type="submit" class="btn my-4">Delete Ninja</button>
    </form> --}}

    {{-- delete button --}}
  <form action="{{ route('ninjas.destroy', $ninja) }}" method="POST">
    @csrf
    @method('DELETE')

    <button type="submit" class="btn my-4">Delete Post</button>
  </form>
</x-layout>