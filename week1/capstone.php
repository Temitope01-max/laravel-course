// Build a small CLI expense tracker: add expenses (name + amount), list all. Show total. 
// Use an array, functions with typed params, foreach to list, and git commit when done

//Requirements:

// 1. Use an array to store expenses(each expense has a name and an amount).

// 2. Create functions with typed parameters/returns to handle logic: add expenses, list expenses, and calculate the total.

// 3. Use foreach to list expensesm interactively with readline().

// 4. Run it in CLI and use git to commit your work when done to save the snapshot.

<?php

$expenses = [];

/**
 * Add a new expense.
 */
function addExpense(array &$expenses, string $name, float $amount): void
{
    $expenses[] = [
        'name' => $name,
        'amount' => $amount,
    ];
}

/**
 * List all expenses.
 */
function listExpenses(array $expenses): void
{
    if (count($expenses) === 0) {
        echo "\nNo expenses recorded yet.\n";

        return;
    }

    echo "\n--- Expense List ---\n";

    foreach ($expenses as $index => $expense) {
        $number = $index + 1;

        echo "{$number}. {$expense['name']} - ₦".
            number_format($expense['amount'], 2).PHP_EOL;
    }
}

/**
 * Calculate total expenses.
 */
function calculateTotal(array $expenses): float
{
    $total = 0;

    foreach ($expenses as $expense) {
        $total += $expense['amount'];
    }

    return $total;
}

/*
 * Main CLI loop
 */
while (true) {
    echo "\n==== Expense Tracker ====\n";
    echo "1. Add Expense\n";
    echo "2. List Expenses\n";
    echo "3. Show Total\n";
    echo "4. Exit\n";

    $choice = readline('Choose an option: ');

    switch ($choice) {
        case '1':
            $name = readline('Enter expense name: ');
            $amount = (float) readline('Enter amount: ');

            addExpense($expenses, $name, $amount);

            echo "Expense added successfully.\n";
            break;

        case '2':
            listExpenses($expenses);
            break;

        case '3':
            $total = calculateTotal($expenses);

            echo "\nTotal Expenses: ₦".
                number_format($total, 2).PHP_EOL;
            break;

        case '4':
            echo "See You Later!\n";
            exit;

        default:
            echo "Invalid option. Try again.\n";
    }
}
