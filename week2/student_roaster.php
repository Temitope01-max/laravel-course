<?php

// Student Roaster:

// • Create an array of at least 5 student names (use your real classmates' names!).

// • Use a foreach loop to print each name with its position: e.g. "1. Tunde", "2. Amara"...

// • BONUS: Add a second array of scores and print name + score side by side.

// • BONUS 2: Print only students with a score above 70

declare(strict_types=1);

// Student names
$students = ['Tade', 'Sade', 'David', 'Helen', 'Peter'];

// Student scores
$scores = [87, 55, 90, 72, 67];

echo 'Student Roster'.PHP_EOL;
echo PHP_EOL;

// Display each name with position
foreach ($students as $index => $student) {
    echo ($index + 1).'. '.$student.PHP_EOL;
}

// Display name and score side by side
echo 'Student Scores'.PHP_EOL;

foreach ($students as $index => $student) {
    echo $student.' - '.$scores[$index].PHP_EOL;
}

// Display name and score, with score above 70
echo 'Student With Scores Above 70'.PHP_EOL;
foreach ($students as $index => $student) {
    if ($scores[$index] > 70) {
        echo $student.' - '.$scores[$index].PHP_EOL;
    }
}
