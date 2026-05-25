<?php

declare(strict_types=1);
$products = [
    [
        'name' => 'Headset',
        'price' => 1345.9,
    ],
    [
        'name' => 'Wristwatch',
        'price' => 2500,
    ],
    [
        'name' => 'Laptop',
        'price' => 350000,
    ],
    [
        'name' => 'Keyboard',
        'price' => 12000,
    ],
    [
        'name' => 'Mouse',
        'price' => 5000,
    ],
];

// Loop through products
foreach ($products as $product) {
    echo 'Product: '.$product['name'];
    echo ' Price: ₦'.$product['price'].PHP_EOL;
}

echo PHP_EOL;

// switch statement
$category = 'electronics';

$taxRate = match ($category) {
    'food' => '0%',
    'electronics' => '15%',
    'luxury' => '25%',
    default => 'Unknown category'
};

echo 'Category: '.$category;
echo ' Tax Rate: '.$taxRate;
