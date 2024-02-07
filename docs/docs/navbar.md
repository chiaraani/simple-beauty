---
title: Navbar
---

As easy as this:

```html
<nav>
  <a href="#" class="brand">Brand</a>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>
```

## Brand

This is where you display your website's name.

```html
<a href="#" class="brand">My website's name</a>
```

## Collapse

Make your navbar collapsable like this:

```html
<nav>
  <button class="open-button"></button>
  <a href="#" class="brand">Brand</a>
  <div class="collapse">
    <div><button class="close-button"></button></div>
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>
```

_The navbar is only collapsed in small devices._

### Open

To keep navbar open add `open` class to `.collapse`.

```html
<nav>
  <button class="open-button"></button>
  <a href="#" class="brand">Brand</a>
  <div class="open collapse">
    <div><button class="close-button"></button></div>
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>
```

### Close

To keep navbar close add `close` class to `.collapse`.

```html
<nav>
  <button class="open-button"></button>
  <a href="#" class="brand">Brand</a>
  <div class="close collapse">
    <div><button class="close-button"></button></div>
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>
```

## Horizontal in small devices

If you add `horizonal-sm` class, it would always arrange elements horizontally, even in small devices.

```html
<nav class="horizontal-sm">
  <a href="#" class="brand">Brand</a>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>
```

## Placement

### Absolute

Just add `absolute` class to it.

```html
<nav class="absolute">
  <button class="open-button"></button>
  <a href="#" class="brand">Brand</a>
  <div class="collapse">
    <div><button class="close-button"></button></div>
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>

<ol>
  <li>Stuff...</li>
  <li>Stuff...</li>
</ol>
```

### Fixed

Simply add `fixed` class.

```html
<style type="text/css"> :root { height: 100px; background: white; } </style>

<nav class="fixed">
  <button class="open-button"></button>
  <a href="#" class="brand">Brand</a>
  <div class="collapse">
    <div><button class="close-button"></button></div>
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>

<ol>
  <li>Stuff...</li>
  <li>Stuff...</li>
  <li>Stuff...</li>
  <li>Stuff...</li>
</ol>
```

### Sticky

Just add `sticky` class.

```html
<style type="text/css"> :root { height: 100px; background: white; } </style>

<header><big>Header...</big></header>
<nav class="sticky">
  <button class="open-button"></button>
  <a href="#" class="brand">Brand</a>
  <div class="collapse">
    <div><button class="close-button"></button></div>
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>

<ol>
  <li>Stuff...</li>
  <li>Stuff...</li>
  <li>Stuff...</li>
  <li>Stuff...</li>
</ol>
```

## Items

### Active

You can add `active` class to active link to style it.

```html
<nav>
  <a href="#" class="brand">Brand</a>
  <a href="#">Home</a>
  <a href="#" class="active">About</a>
</nav>
```
