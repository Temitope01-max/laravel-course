<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return "Admin Dashboard";
    }

    public function users()
    {
        return "Admin Users";
    }
}
