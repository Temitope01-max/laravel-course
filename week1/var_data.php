<?php

declare(strict_types=1);

// SCALAR TYPE
$name = 'Aderinmola'; // string
$age = 30; // integer
$salary = 1250.50; // float
$isAdmin = true; // boolean

// COMPOUND TYPES
$skills = ['PHP', 'Laravel']; // indexed array
$user = ['name' => 'Aderinmola', 'age' => 30]; // assoc array

// SPECIAL TYPES
$nothing = null; // null

// Inspect any variable
var_dump($name); // string(10) "Aderinmola"
var_dump($age);
var_dump($skills);
var_dump($user);

echo strlen($name); // 10
echo str_contains($name, 'nm'); // 1 (PHP 8+)

echo strlen($name);
echo strtoupper($name);
echo "Hello, {$name}! You are {$age} years old."; // interpolation

if (str_contains($name, 'dg')) {
    echo 'Found!';
} else {
    echo "No, 'dg' not found!";
}

if (str_starts_with('Hello World!', 'Hello')) {
    echo "Yes it starts with 'Hello!'";
} else {
    echo "No, it does not starts with 'Hello!'";
}

if (str_ends_with('Hello World!', 'Hello')) {
    echo "Yes it ends  with 'Hello!'";
} else {
    echo "No, it does not ends with 'Hello!'";
}
