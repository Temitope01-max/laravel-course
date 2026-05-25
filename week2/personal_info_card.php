<?php

/**
 * Personal Info Card.
 *
 * -Create a file
 *
 * -Declare variables for your name, age, city and whether you are a developer
 *
 * -Use echo to output a formatted sentence e.g. “My name is Paul, I am 20 years old from Lagos”
 *
 * -Use var_dump() to print the Boolean variable and explain what you see
 *
 * -Bonus: Use strlen() to print how many characters are in your name.
 **/

declare(strict_types=1);

// Variables
$name = 'Aderinmola';
$age = 35;
$city = 'Lagos';
$isDeveloper = true;

echo "My name is $name, I am $age years of age and I live in $city".PHP_EOL;

// Output with var_dump
var_dump($isDeveloper);

$name_len = strlen($name);
echo "My name consist of $name_len characters!!!";
