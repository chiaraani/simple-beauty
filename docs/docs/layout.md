---
title: Layout
---

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

A `.row` has 12 columns. `.col-NUMBER-BREAKPOINT_INFIX` sets how many columns must the element fill when screen width is BREAKPOINT or greater.

```html
<div class="row">
  <div class="col-12-s tertiary card">col 12 s</div>
  <div class="col-11-s tertiary card">col 11 s</div>
  <div class="col-1-s tertiary card">col 1 s</div>
  <div class="col-10-s tertiary card">col 10 s</div>
  <div class="col-2-s tertiary card">col 2 s</div>
  <div class="col-9-s tertiary card">col 9 s</div>
  <div class="col-3-s tertiary card">col 3 s</div>
  <div class="col-8-s tertiary card">col 8 s</div>
  <div class="col-4-s tertiary card">col 4 s</div>
  <div class="col-7-s tertiary card">col 7 s</div>
  <div class="col-5-s tertiary card">col 5 s</div>
  <div class="col-6-s tertiary card">col 6 s</div>
  <div class="col-6-s tertiary card">col 6 s</div>
</div>
```

## Slice in

`.slice-in-NUMBER-BREAKPOINT_INFIX` child width is parent width ÷ NUMBER when screen width is ≥ BREAKPOINT.

```html
<div class="slice-in-1-s">
  <div class="secondary card">slice in 1 s</div>
</div>
<div class="slice-in-2-s">
  <div class="secondary card">slice in 2 s</div>
</div>
<div class="slice-in-3-s">
  <div class="secondary card">slice in 3 s</div>
</div>
<div class="slice-in-4-s">
  <div class="secondary card">slice in 4 s</div>
</div>
<div class="slice-in-5-s">
  <div class="secondary card">slice in 5 s</div>
</div>
<div class="slice-in-6-s">
  <div class="secondary card">slice in 6 s</div>
</div>
<div class="slice-in-7-s">
  <div class="secondary card">slice in 7 s</div>
</div>
<div class="slice-in-8-s">
  <div class="secondary card">slice in 8 s</div>
</div>
<div class="slice-in-9-s">
  <div class="secondary card">slice in 9 s</div>
</div>
<div class="slice-in-10-s">
  <div class="secondary card">slice in 1 s</div>
</div>
<div class="slice-in-11-s">
  <div class="secondary card">slice in 1 s</div>
</div>
<div class="slice-in-12-s">
  <div class="secondary card">slice in 1 s</div>
</div>
```

```html
<div class="slice-in-12-xxl slice-in-9-xl slice-in-8-l slice-in-6-m slice-in-4-s slice-in-3-xs">
  <div class="secondary card">Item 1</div>
  <div class="secondary card">Item 2</div>
  <div class="secondary card">Item 3</div>
  <div class="secondary card">Item 4</div>
  <div class="secondary card">Item 5</div>
  <div class="secondary card">Item 6</div>
  <div class="secondary card">Item 7</div>
  <div class="secondary card">Item 8</div>
  <div class="secondary card">Item 9</div>
  <div class="secondary card">Item 10</div>
  <div class="secondary card">Item 11</div>
  <div class="secondary card">Item 12</div>
</div>
```

### Gap

Leave a gap between elements with `gap` class.

```html
<div class="gap slice-in-3-xs">
  <div class="info card">Item 1</div>
  <div class="info card">Item 2</div>
  <div class="info card">Item 3</div>
</div>
```