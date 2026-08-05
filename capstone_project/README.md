# Project: E‑Commerce Storefront



````markdown
# E-Commerce Storefront

A Laravel-based e-commerce application that allows customers to browse products, manage carts, and place orders while administrators manage the store inventory.

## Features

- User authentication
- Product management
- Categories
- Shopping cart
- Order checkout
- File uploads
- Role-based access
- Queue jobs
- Email notifications
- Slack notifications
- Feature testing

## Tech Stack

- Laravel 12
- PHP 8.3+
- MySQL
- Blade
- Tailwind CSS
- Laravel Breeze
- Vite


## Author

Akinkunmi Aderinmola
````

---

# Preview

```text
📦 ecommerce-store
 ├── app
 ├── database
 ├── public
 ├── resources
 ├── routes
 ├── README.md
 └── composer.json
```
# Database Design

Design the entities.

Tables

```
users

roles

categories

products

product_images

carts

cart_items

orders

order_items
```

---


# Product Management (Admin)

Only admins can

* Create products
* Edit products
* Delete products


# Categories

Admin

* Create category
* Update category
* Delete category

Customer

Browse products

```
- Electronics

- Fashion

- Books

- Shoes
```



# Feature Testing

Tools

PHPUnit

Pest

Write tests

```
Customer logs in

↓

Adds product

↓

Views cart

↓

Checkout

↓

Order created

↓

Email queued
```

---

# Security

Validation

CSRF

Authorization

Mass Assignment

Password hashing

SQL Injection protection

XSS protection

---

# Deployment

Deploy to

Laravel Cloud

Render

Railway

DigitalOcean

Hostinger

Use

```
MySQL

Redis

Queue Worker

Storage
```

---


# Technologies & Tools

| Category        | Tool                                                                                          |
| --------------- | --------------------------------------------------------------------------------------------- |
| Backend         | Laravel 12                                                                                    |
| Language        | PHP 8.3+                                                                                      |
| Frontend        | Blade                                                                                         |
| Styling         | Tailwind CSS                                                                                  |
| UI Components   | PrebuiltUI or Flowbite                                                                        |
| Database        | MySQL or PostgreSQL                                                                           |
| Authentication  | Laravel Breeze                                                                                |
| Authorization   | Spatie Laravel Permission (recommended) or Gates/Policies                                     |
| File Storage    | Laravel Storage (`public` disk)                                                               |
| Queue           | Database (development) or Redis (production)                                                  |
| Email           | Mailpit (development), SMTP/Mailtrap (testing), or a transactional email service (production) |
| Notifications   | Laravel Notifications (Email + Slack)                                                         |
| Testing         | PHPUnit or Pest                                                                               |
| Version Control | Git & GitHub                                                                                  |
| Deployment      | Laravel Cloud, Render, Railway, or DigitalOcean                                               |
