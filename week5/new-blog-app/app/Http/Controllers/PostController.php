<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() {
        // route --> /posts/
        $posts = Post::orderBy('created_at', 'desc')->paginate(10);
        return view('posts.index', ["posts" => $posts]);
    }

    public function show($id) {
        // route --> /posts/{id}
        $post = Post::findOrFail($id);
        $comments = $post->comments;
        $author = $post->author;
        return view('posts.show', compact('post', 'comments', 'author'));
    }

    public function create()
    {
        return view('posts.create');
    }
}
