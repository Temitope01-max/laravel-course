<?php

declare(strict_types=1);

class Example
{
    private float $salary = 50000.50;

    public function getSalary(): float
    {
        return $this->salary; // Accessing private property from within the class
    }
}

class ChildExample extends Example
{
    public function trySalaryAccess(): float
    {
        return $this->getSalary(); // Accessing private property through public method in child class
    }
}

$obj = new Example();
echo $obj->getSalary();
// echo $obj->salary; //Error: Cannot access private property
