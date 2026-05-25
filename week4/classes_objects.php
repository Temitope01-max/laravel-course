<?php

declare(strict_types=1);

class Product
{
    // Properties
    public string $name;
    public float $price;
    public int $stock;
    public bool $available;

    // Constructor
    public function __construct(
        string $name,
        float $price,
        int $stock = 0
    ) {
        $this->name = $name;
        $this->price = $price;
        $this->stock = $stock;
        $this->available = $stock > 0;
    }

    // Methods - what a Product DO
    public function getDisplayName(): string
    {
        return "{$this->name} (\${$this->price})";
    }

    public function restock(int $quantity): void
    {
        $this->stock += $quantity;
        $this->available = true;
    }

    public function sell(int $quantity): bool
    {
        if ($quantity > $this->stock) {
            return false; // Not enough stock
        }
        $this->stock -= $quantity;
        $this->available = $this->stock > 0;

        return true;
    }

    public function getDiscountPrice(int $percentage): float
    {
        if ($percentage < 0 || $percentage > 100) {
            throw new InvalidArgumentException('Percentage must be between 0 and 100');
        }

        $discountAmount = $this->price * ($percentage / 100);

        return $this->price -= $discountAmount;
    }
    
}

// Creating Objects (instances)
$laptop = new Product('Macbook Pro', 1299.99, 5);
$phone = new Product('iPhone 15', 999.00, 0);

echo $laptop->getDisplayName();
echo PHP_EOL;
var_dump($phone->available);

$laptop->sell(2);
echo $laptop->stock;
$phone->restock(10);
var_dump($phone->available);

echo $laptop->getDiscountPrice(10);
