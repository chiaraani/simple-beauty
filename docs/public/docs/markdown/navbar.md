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

## Collapse

Make your navbar collapsable like this:

```HTML
<nav>
  <div class="brand"><button class="open-button"></button> <a href="#" >Brand</a></div>
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

```HTML
<nav>
  <div class="brand"><button class="open-button"></button> <a href="#" >Brand</a></div>
  <div class="open collapse">
    <div><button class="close-button"></button></div>
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>
```

### Close

To keep navbar close add `close` class to `.collapse`.

```HTML
<nav>
  <div class="brand"><button class="open-button"></button> <a href="#" >Brand</a></div>
  <div class="close collapse">
    <div><button class="close-button"></button></div>
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>
```

## Horizontal in small devices

If you add `horizonal-sm` class, it would always arrange elements horizontally, even in small devices.

```HTML
<nav class="horizontal-sm">
  <a href="#" class="brand">Brand</a>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>
```

## Placement

### Absolute

Just add `absolute` class to it.

```HTML
<nav class="absolute">
  <div class="brand"><button class="open-button"></button> <a href="#" >Brand</a></div>
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

```HTML
<style type="text/css"> body { height: 100px; }</style>

<nav class="fixed">
  <div class="brand"><button class="open-button"></button> <a href="#" >Brand</a></div>
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

```HTML
<style type="text/css"> :root { height: 100px; background: white; } </style>

<header><big>Header...</big></header>
<nav class="sticky">
  <div class="brand"><button class="open-button"></button> <a href="#" >Brand</a></div>
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
