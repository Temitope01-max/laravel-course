<?php

// php oop

// Task 1 - Create a Payable Interface with charge() and receipt() methods.
// Build CashPayment, CardPayment as classes implementing it. Create an Order
// class that  accepts any Payable, stores the total, and calls charge().
// Instantiate two orders with different payemnt methods and print receipts.

// Task 2 - Extend the project: add a PaymentHistory class that stores all transactions(array of objects).
// Add a method to return the total charged amount.

declare(strict_types=1);

// Create a Payable Interface with charge() and receipt() methods.
interface Payable
{
    public function charge(float $amount): void;

    public function receipt(float $amount): string;
}

// Build CashPayment, CardPayment as classes implementing it
class CashPayment implements Payable
{
    private float $amount = 0;

    public function charge(float $amount): void
    {
        $this->amount = $amount;
        echo "Cash payment of ₦{$amount} processed.<br>";
    }

    public function receipt(float $amount): string
    {
        $this->amount = $amount;

        return "Cash Payment - ₦{$amount}";
    }
}

class CardPayment implements Payable
{
    private float $amount = 0;

    public function charge(float $amount): void
    {
        $this->amount = $amount;
        echo "Card payment of ₦{$amount} processed.<br>";
    }

    public function receipt(float $amount): string
    {
        $this->amount = $amount;

        return "Card Payment - ₦{$this->amount}";
    }
}

// Create an Order
// class that  accepts any Payable, stores the total, and calls charge().
class Order
{
    private float $amount;
    private Payable $paymentMethod;

    public function __construct(float $amount, Payable $paymentMethod)
    {
        $this->amount = $amount;
        $this->paymentMethod = $paymentMethod;
    }

    public function process(): void
    {
        $this->paymentMethod->charge($this->amount);
    }

    public function getReceipt(): string
    {
        return $this->paymentMethod->receipt($this->amount);
    }

    public function getTotal(): float
    {
        return $this->amount;
    }
}

// Task 2
// Extend the project: add a PaymentHistory class that stores all transactions(array of objects).
// Add a method to return the total charged amount.

class PaymentHistory
{
    private array $transactions = [];

    public function addTransaction(Order $order): void
    {
        $this->transactions[] = $order;
    }

    public function getTotalCharged(): float
    {
        $total = 0;

        foreach ($this->transactions as $transaction) {
            $total += $transaction->getTotal();
        }

        return $total;
    }
}

// Create payment methods
$cashPayment = new CashPayment();
$cardPayment = new CardPayment();

// Create orders
$order1 = new Order(1000, $cashPayment);
$order2 = new Order(2000, $cardPayment);
$order3 = new Order(3000, $cardPayment);
$order4 = new Order(4000, $cashPayment);

// Process orders
echo 'Order processing starts'.PHP_EOL;

$orders = [$order1, $order2, $order3, $order4];
foreach ($orders as $order) {
    $order->process();
    echo "\n";
}

echo 'Order processing ends';
echo PHP_EOL;
echo PHP_EOL;

echo 'Receipt for Orders'.PHP_EOL;

// Print receipts
foreach ($orders as $order) {
    echo $order->getReceipt().PHP_EOL;
}

echo PHP_EOL;

// Store payment history
$history = new PaymentHistory();

foreach ($orders as $order) {
    $history->addTransaction($order);
}

// echo "<br><br>";
echo PHP_EOL;
echo 'Total Charged: ₦'.$history->getTotalCharged();
