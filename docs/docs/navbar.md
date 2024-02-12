---
title: Navbar
---

This a navbar:

```html
<nav>
  <a href="#" class="site-name">Site name</a>
  <button class="open-button"></button>
  <div class="collapse">
    <button class="close-button"></button>
    <div>
      <a href="#">Home</a></li>
      <a href="#">About</a></li>
    </div>
    <div>
      <a href="#" class="success">Sign up</a>
      <a href="#">Sign in</a>
    </div>
  </div>
</nav>
```

## Fixed

Add `fixed` class to navbar, and `navbar-push` class to body or website content.

```html
<style>body { height: 5em; }</style>

<nav class="fixed">
  <a href="#" class="site-name">Site name</a>
  <button class="open-button"></button>
  <div class="collapse">
    <button class="close-button"></button>
    <div>
      <a href="#">Home</a></li>
      <a href="#">About</a></li>
    </div>
    <div>
      <a href="#" class="success">Sign up</a>
      <a href="#">Sign in</a>
    </div>
  </div>
</nav>

<ol class="navbar-push">
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ol>
```