<?php

// Function Factory

// • Create a file: exercise4.php

// • Write a function calculateBMI(float $weight, float $height): float — returns the BMI value.

// • Write a function getBMICategory(float $bmi): string returns 'Underweight', 'Normal', 'Overweight', or 'Obese'.

// • Call both functions with your own (or made-up) numbers and echo the result.

// • BONUS: Add PHP 8 type hints on both parameters and return types

declare(strict_types=1);

// Function to calculate BMI
function calculateBMI(float $weight, float $height): float
{
    return $weight / ($height ** 2);
}

// Function to get BMI category
function getBMICategory(float $bmi): string
{
    if ($bmi < 18.5) {
        return 'Underweight';
    } elseif ($bmi < 25) {
        return 'Normal';
    } elseif ($bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obesse';
    }
}

// Declare variables
$weight = 70;
$height = 1.75;

// Call functions
$bmi = calculateBMI($weight, $height);
$category = getBMICategory($bmi);

// Display result
echo 'Weight: '.$weight."kg\n";
echo 'Height: '.$height."m\n";
echo 'BMI: '.round($bmi, 2)."\n";
echo 'Category: '.$category."\n";
