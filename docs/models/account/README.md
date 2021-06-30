---
title: Account
---

# Account

The Account model replaces your standard User model in Laravel.

It is designed to only be used for authentication.

### Usage

#### Authenticated Account

You can use the Account model as you would the typical User model in Laravel for authentication purposes.

```php
use Machete\Account\Models\Account;

# Get the currently authenticated Account
Auth::user();

# Log in any Account manually
$account = Account::where('name', 'Admin')->get();
Auth::login($account);
```

### Relationships

#### Characters

Each Account model can have multiple [Character](/models/character/) models attached to it.

```php
use Machete\Account\Models\Account;

Account::first()->characters;
```

### Setup

<StarterPitch />

#### Extend

It's highly recommended to extend this model so it's easier to use and reference in your own application.

```php
use Machete\Account\Models\Account as MacheteAccount;

class Account extends MacheteAccount
{
    use HasFactory, Notifiable;
}
```

#### Update Authenticated Model

In your `config/auth.php`, update the `providers.users.model` to your newly-extended Account model.

#### Clean Up

Now that we aren't using the `User` model anywhere, you are free to delete the model. We'll rely completely on this new `Account` model for authentication moving forward.
