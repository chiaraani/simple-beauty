---
title: Navbar
---

This a navbar:

```html
<style>html { height: 10em; }</style>

<nav class="navbar">
  <div class="header">
    <a href="#" class="site-name">Site name</a>
    <button class="toggle-navbar" onclick="toggleNavbar()"><span class="menu-sb-icon"></span></button>
  </div>
  <div class="collapse">
    <div class="left">
      <a class="active" href="#">Home</a>
      <a href="#">About</a>
    </div>
    <div class="right">
      <p><em>Slogan...</em></p>
      <a href="#" class="success">Sign up</a>
      <a href="#">Sign in</a>
    </div>
  </div>
</nav>
```

## Simplest

```html
<style>html { height: 10em; }</style>

<nav class="navbar">
  <a href="#" class="site-name">Site name</a>
  <a class="active" href="#">Home</a>
  <a href="#">About</a>
  <a href="#" class="success">Sign up</a>
  <a href="#">Sign in</a>
</nav>
```


## Open

Add `open` class to open `.collapse`.

```html
<style>html { height: 10em; }</style>

<nav class="open navbar">
  <div class="header">
    <a href="#" class="site-name">Site name</a>
    <button class="toggle-navbar"><span class="menu-sb-icon"></span></button>
  </div>
  <div class="collapse">
    <div class="left">
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
    <div class="right">
      <p><em>Slogan...</em></p>
      <a href="#" class="success">Sign up</a>
      <a href="#">Sign in</a>
    </div>
  </div>
</nav>
```

## Position

### Fixed

Add `fixed` class to navbar, and `navbar-push` class to body or website content.

```html
<style>html { height: 10em; }</style>

<nav class="fixed navbar">
  <div class="header">
    <a href="#" class="site-name">Site name</a>
    <button class="toggle-navbar" onclick="toggleNavbar()"><span class="menu-sb-icon"></span></button>
  </div>
  <div class="collapse">
    <div class="left">
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
    <div class="right">
      <p><em>Slogan...</em></p>
      <a href="#" class="success">Sign up</a>
      <a href="#">Sign in</a>
    </div>
  </div>
</nav>

<main class="navbar-push">
  <h1>Item 1</h1>
  <h1>Item 2</h1>
  <h1>Item 3</h1>
  <h1>Item 4</h1>
  <h1>Item 5</h1>
</main>
```

### Sticky

Add `sticky` class to navbar to make it sticky.

```html
<style>html { height: 20em } body { height: 200%; }</style>

<a href="#" class="site-name">Site name</a>

<nav class="sticky navbar">
  <div class="header">
    <button class="toggle-navbar" onclick="toggleNavbar()"><span class="menu-sb-icon"></span></button>
  </div>
  <div class="collapse">
    <div class="left">
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
    <div class="right">
      <p><em>Slogan...</em></p>
      <a href="#" class="success">Sign up</a>
      <a href="#">Sign in</a>
    </div>
  </div>
</nav>

<main>
  <h1>Item 1</h1>
  <h1>Item 2</h1>
  <h1>Item 3</h1>
  <h1>Item 4</h1>
  <h1>Item 5</h1>
</main>
```

## Colours

You can add any colour class to navbar.

```html
<style>html { height: 10em; }</style>

<nav class="canvas navbar">
  <div class="header">
    <a href="#" class="site-name">Site name</a>
    <button class="toggle-navbar" onclick="toggleNavbar()"><span class="menu-sb-icon"></span></button>
  </div>
  <div class="collapse">
    <div class="left">
      <a class="active" href="#">Home</a>
      <a href="#">About</a>
    </div>
    <div class="right">
      <p><em>Slogan...</em></p>
      <a href="#" class="success">Sign up</a>
      <a href="#">Sign in</a>
    </div>
  </div>
</nav>
```