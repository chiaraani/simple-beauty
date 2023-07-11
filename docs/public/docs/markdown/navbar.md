# Navbar

As easy as this:

```HTML
<nav>
  <a href="#" class="brand">Brand</a>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>
```

## Brand

This is where you display your website's name.

```HTML
<a href="#" class="brand">My website's name</a>
```

## Placement

### Absolute

Just add a class to it.

```HTML
<nav class="absolute">
  <a href="#" class="brand">Brand</a>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<ol>
  <li>Stuff...</li>
  <li>Stuff...</li>
</ol>
```

### Fixed

Just add a class to it.

```HTML
<style type="text/css"> body { height: 50px; }</style>

<nav class="fixed">
  <a href="#" class="brand">Brand</a>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<ol>
  <li>Stuff...</li>
  <li>Stuff...</li>
  <li>Stuff...</li>
  <li>Stuff...</li>
</ol>
```

### Sticky

```HTML
<style type="text/css"> :root { height: 100px; }</style>

<header><a href="#" class="brand">My website's name</a></header>
<nav class="sticky">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<ol>
  <li>Stuff...</li>
  <li>Stuff...</li>
  <li>Stuff...</li>
  <li>Stuff...</li>
</ol>
```
