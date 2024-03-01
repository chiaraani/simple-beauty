---
title: Navbar
---

This a navbar:

```html
<style>body { height: 10em; }</style>

<nav class="navbar">
  <div class="header">
    <a href="#" class="site-name">Site name</a>
    <button class="toggle-navbar" onclick="toggleNavbar()"></button>
  </div>
  <div class="collapse">
    <div>
      <a class="active" href="#">Home</a>
      <a href="#">About</a>
    </div>
    <div>
      <p><em>Slogan...</em></p>
      <a href="#" class="success">Sign up</a>
      <a href="#">Sign in</a>
    </div>
  </div>
</nav>
```

## Open

Add `open` class to open `.collapse`.

```html
<style>body { height: 10em; }</style>

<nav class="open navbar">
  <div class="header">
    <a href="#" class="site-name">Site name</a>
    <button class="toggle-navbar"></button>
  </div>
  <div class="collapse">
    <div>
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
    <div>
      <p><em>Slogan...</em></p>
      <a href="#" class="success">Sign up</a>
      <a href="#">Sign in</a>
    </div>
  </div>
</nav>
```

## Fixed

Add `fixed` class to navbar, and `navbar-push` class to body or website content.

```html
<style>body { height: 10em; }</style>

<nav class="fixed navbar">
  <div class="header">
    <a href="#" class="site-name">Site name</a>
    <button class="toggle-navbar" onclick="toggleNavbar()"></button>
  </div>
  <div class="collapse">
    <div>
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
    <div>
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