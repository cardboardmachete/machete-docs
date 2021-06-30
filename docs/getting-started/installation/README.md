---
title: Installation
---

# Installation

Machete is designed to be used in a _fresh_ Laravel project. It extends some core functionality, such as account management and authentication, and as such isn't recommended to be used in an existing project.

#### Install Package

`composer require cardboardmachete/machete`

#### Publish Migrations

Get everything set up in your database.

`php artisan vendor:publish --provider="CardboardMachete\Machete\MacheteServiceProvider" --tag="migrations"`
