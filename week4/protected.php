<?php

declare(strict_types=1);

class Example
{
    protected int $age = 30;
}

class ChildExample extends Example
{
    public function getAge(): int
    {
        return $this->age; // Accessing protected property from child
    }
}

$childExample = new ChildExample();
echo $childExample->getAge();
// echo $childExample->age; // Error: Cannot access protected property