---
layout: home
---
# Framework for super fast, easy and beautiful web layout development.
## Responsive. Build, utilise prebuilt grid system, and customize with Sass and components.

Hate adding tons of classes to forms? Well, forms are styled automatically!

```html
  <input type="button" value="Input button">
  <input type="date">
  <input type="datetime-local">
  <input type="email" placeholder="email">
  <input type="month">
  <input type="number" placeholder="number">
  <input type="password" placeholder="password">
  <input type="reset">
  <input type="search" placeholder="search">
  <input type="submit">
  <input type="tel" placeholder="tel">
  <input type="text" placeholder="text">
  <input type="time">
  <input type="url" placeholder="url">
  <input type="week">
  <button>Button</button>
  <select>
    <option disabled selected>Select an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
  <textarea placeholder="textarea"></textarea>
```

Add a few short classes to button:
```html
<button class="canvas">Canvas</button>
<button class="primary">Primary</button>
<button class="secondary">Secondary</button>
<button class="tertiary">Tertiary</button>
<button class="success">Success</button>
<button class="danger">Danger</button>
<button class="warning">Warning</button>
<button class="info">Info</button>
```

And, make a navbar this easily:

```html
<style>body { height: 15em; }</style>

<nav>
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
```

## Find out more about Simple beauty <a class="success button" href="/docs">here</a>, or have look at an <a class="success button" href="/theme">example</a>.