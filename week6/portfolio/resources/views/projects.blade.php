@extends('layouts.app')

@section('title','Projects')

@section('content')

<h1 class="text-4xl font-bold mb-8">
    My Projects
</h1>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

@forelse($projects as $project)

{{-- <x-project-card
    :title="$project['title']"
    :description="$project['description']"
    :link="$project['link']"
/> --}}

<x-project-card
            title="{{ $project['title'] }}"
            description="{{ $project['description'] }}"
            link="{{ $project['link'] }}"
        />

@empty

<p>No projects available.</p>

@endforelse

</div>

@endsection
