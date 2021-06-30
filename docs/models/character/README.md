---
title: Character
---

# Character

A Character model is what the player will typically be playing as. This can be any playable entity. For example, in a kingdom-builder game, you might extend the Character model as a Kingdom model in your codebase.

### Usage

#### Active Character

Characters have an `is_active` boolean flag to quickly and easily determine if the Character is active at any given time.
This has been simplified to fetch via the `ActiveCharacter` helper model:

```php
use Machete\Character\Models\ActiveCharacter;

# Get the first active character.
ActiveCharacter::first();

# Gets all the active characters of a player.
ActiveCharacter::all();
```

This helper gets the first Character where:

1. The attached Account ID matches the currently authenticated Account ID.
2. Only gets Characters that have `is_active` set to `true`.

::: tip 
It's up to you as the developer to determine how this flag should be used. In an RPG, for example, you may want to only let players have 1 Character active at a time.

Making a Character active may look like this:

```php
use Machete\Character\Models\Character;

# You can get the currently authenticated Account
# via the Auth helper method.
Auth::user()->characters()->update(['is_active' => false]);
Character::where('id', $id)->update(['is_active' => true]);
```
:::

### Relationships

#### Account

A Character is always attached to 1 [Account](/models/account/).

```php
Character::first()->account
```
