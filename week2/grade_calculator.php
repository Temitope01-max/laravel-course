<?php

declare(strict_types=1);

$score = 70;

if ($score >= 90 && $score <= 100) {
    echo 'A';
} elseif ($score >= 80 && $score < 89) {
    echo 'B';
} elseif ($score >= 70 && $score < 79) {
    echo 'C';
} elseif ($score >= 60 && $score < 69) {
    echo 'D';
} else {
    echo 'F';
}
echo PHP_EOL;
// Using a match expression
$result = match (true) {
    $score >= 90 && $score <= 100 => 'A',
    $score >= 80 && $score < 89 => 'B',
    $score >= 70 && $score < 79 => 'C',
    $score >= 60 && $score < 69 => 'D',
    default => 'F',
};

echo $result;

