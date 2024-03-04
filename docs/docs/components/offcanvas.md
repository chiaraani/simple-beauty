---
title: Offcanvas
---

`offcanvas-BREAKPOINT_INFIX-BORDER` class hides an element by moving it out of screen BORDER if screen width is BREAKPOINT or less. 

```html
<style>body { height: 10em; }</style>

<button onclick="openOffcanvas('offcanvas1')">Open left offcanvas</button>
<div class="primary card offcanvas-l-left" id="offcanvas1">
  <button onclick="closeOffcanvas()" class="close"></button>
  <p>Left offcanvas</p>
</div>


<button onclick="openOffcanvas('offcanvas2')">Open right offcanvas</button>
<div class="primary card offcanvas-xl-right" id="offcanvas2">
  <button onclick="closeOffcanvas()" class="close"></button>
  <p>right offcanvas</p>
</div>
```

## Open

Just add open class to keep open.

```html
<style>body { height: 10em; }</style>
<div class="open primary card offcanvas-l-left">
  <button class="close"></button>
  <p>Offcanvas</p>
</div>
```