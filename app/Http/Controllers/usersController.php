<?php

namespace App\Http\Controllers;

use App\Http\Resources\usersResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class usersController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Index',[
            'users' => usersResource::collection(User::all())->resolve(),
        ]);
    }

    public function create(){
        return Inertia::render('User/Create');
    }
}
