<?php

declare(strict_types=1);

// function to calculate discount price
function calculateDiscount(float $price, int $discountPercent = 10): float
{
    return $price - ($price * $discountPercent / 100);
}

// Get price from user
$price = (float) readline('Enter product price: ');

// Calculate discounted price
$finalPrice = calculateDiscount($price);

// Display result
echo 'The product price is N'.$price.' while the discounted Price is N'.$finalPrice.PHP_EOL;
echo PHP_EOL;

// *********************************************************//
// function to format currency
function formatCurrency(float $amount, string $symbol = '$'): string
{
    return $symbol.number_format($amount, 2);
}

// Get user input
$amount = (float) readline('Enter amount: ');

// Display formatted currency
echo 'The formatted amount is '.formatCurrency($amount).PHP_EOL;
echo PHP_EOL;

// **********************************************************//
// filter products with their price greater than 20
$products = [
    ['name' => 'headset', 'price' => 50],
    ['name' => 'Akeyboard', 'price' => 8],
    ['name' => 'Mouse', 'price' => 25],
    ['name' => 'Monitor', 'price' => 120],
];

// Filter products with price > 20
$filteredProducts = array_filter(
    $products,
    fn ($product) => $product['price'] > 20
);

print_r($filteredProducts);
