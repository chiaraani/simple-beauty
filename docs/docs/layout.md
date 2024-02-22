---
title: Layout
---

## Responsive class

Add responsive class and it's easy to be responsive.

```html
<div class="responsive primary card" style="width: 200px; height: 3em;">Item</div>
<div class="responsive primary card" style="width: 300px; height: 3em;">Item</div>
```

## Container

It's responsive. Its width is 800px or less to fit the device.

```html
<div class="container">
  <p class="secondary card">Content...</p>
</div>
```

## Push footer

Add a class to push footer:

```html
<style type="text/css"> body { margin: 0; }</style>
<div class="push-footer">
  <main class="card">Content...</main>
  <footer class="card">Footer</footer>
</div>
```

## Breakpoints 

| Breakpoint |  Class infix | Dimensions |
| ---------- |--------------|------------|
| Extra small | xs |  <600px |
| Small | s |  ≥600px |
| Medium | m |  ≥800px |
| Large | l | ≥1000px |
| Extra large | xl |  ≥1200px |
| Extra extra large | xxl | ≥1400px |


## Grid system

A `.row` has 12 columns. `.col-NUMBER-BREAKPOINT` sets how many columns must the element fill when screen width is BREAKPOINT or greater.

```html
<div class="row">
  <div class="col-1-l">
    <div class="tertiary card">col-1-l</div>
  </div>
  <div class="col-2-s">
    <div class="tertiary card">col-2-s</div>
  </div>
  <div class="col-3-s">
    <div class="tertiary card">col-3-s</div>
  </div>
  <div class="col-4-s">
    <div class="tertiary card">col-4-s</div>
  </div>
  <div class="col-5-s">
    <div class="tertiary card">col-5-s</div>
  </div>
  <div class="col-6-s">
    <div class="tertiary card">col-6-s</div>
  </div>
  <div class="col-7-s">
    <div class="tertiary card">col-7-s</div>
  </div>
  <div class="col-8-s">
    <div class="tertiary card">col-8-s</div>
  </div>
  <div class="col-9-s">
    <div class="tertiary card">col-9-s</div>
  </div>
  <div class="col-10-s">
    <div class="tertiary card">col-10-s</div>
  </div>
  <div class="col-11-s">
    <div class="tertiary card">col-11-s</div>
  </div>
  <div class="col-12-s">
    <div class="tertiary card">col-12-s</div>
  </div>
</div>
```