<?php

declare(strict_types=1);

class Product
{
    public string $name;
    public float $price;

    public function __construct(string $name, float $price)
    {
        $this->name = $name;
        $this->price = $price;
    }

    public function getLabel(): string
    {
        return "{$this->name} costs \${$this->price}";
    }
}


// Child class that inherits from Product
class DigitalProduct extends Product
{
    public int $fileSize;
    
    public function __construct(string $name, float $price, int $fileSize)
    {
        parent::__construct($name, $price); // Call the parent constructor
        $this->fileSize = $fileSize;
    }

    #[Override]
    // Method overriding
    public function getLabel(): string
    {
        return parent::getLabel()." and has a file size of {$this->fileSize}MB";
    }
}


$ebook = new DigitalProduct("Learn PHP", 1299.99, 5);
echo $ebook->getLabel();

// extends
// parent __construct
// method overriding
// access modifier