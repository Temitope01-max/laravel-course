@props(['published' => false])

<div 
    @class(['published' => $published, 'card'])
    >
    {{ $slot }}
    <a 
        href="{{ $attributes->get('href') }}" 
        {{ $attributes }}
        class="btn"
        >
        Read more
    </a>
</div>