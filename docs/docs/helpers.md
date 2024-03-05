---
title: Helpers
---

## Position

### Centre

`center` class allows you to centre elements.

```html
<div class="secondary card center" style="width: 100px">Center</div>
```

### Sticky

Just add `sticky` class to make element sticky.

```html
<style type="text/css">body { height: 5em }</style>
<ol>
  <li>item</li>
  <li>item</li>
<div class="secondary card sticky">Sticky</div>
  <li>item</li>
  <li>item</li>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ol>
```

### Fixed 

Just add `fixed` class to make element fixed.

```html
<style type="text/css">body { height: 5em }</style>
<div class="fixed tertiary card" style="right: 0">Fixed</div>
<ol>
  <li>item</li>
  <li>item</li>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ol>
```

## Fluid 

It makes an element have neither margin nor border radius.
```html
<div class="card fluid">Fluid</div>
```

## Grow

`grow` sets `flex-grow: 1;` style.

```html
<div class="responsive-wrapper">
  <div class="card">Item</div>
  <div class="primary card grow">.grow</div>
  <div class="card">Item</div>
</div>
```


## Padding

`padding` class sets padding specified in theme.

```html
<div class="padding primary-bg">Padding</div>
```

## Box shadow

`box-shadow` class sets `box-shadow` to `var(--component-box-shadow)`;

```html
<div class="box-shadow">.box-shadow</div>
```