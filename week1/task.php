<?php

declare(strict_types=1);
// Variables
$product_name = 'Trendy Gown';
$price = 330.8;
$stock = 50;
$isAvailable = true;

// Output with var_dump
var_dump($product_name);
var_dump($price);
var_dump($stock);

echo "The {$product_name} has {$stock} units remaining."; // interpolation

echo PHP_EOL;

// Check if string contains
if (str_contains($product_name, 'Laravel')) {
    echo 'Found!';
} else {
    echo 'No, not found!';
}
