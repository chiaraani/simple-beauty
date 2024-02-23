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
<div class="tertiary grid row">
  <div class="col-12-s">col 12 s</div>
  <div class="col-11-s">col 11 s</div>
  <div class="col-1-s">col 1 s</div>
  <div class="col-10-s">col 10 s</div>
  <div class="col-2-s">col 2 s</div>
  <div class="col-9-s">col 9 s</div>
  <div class="col-3-s">col 3 s</div>
  <div class="col-8-s">col 8 s</div>
  <div class="col-4-s">col 4 s</div>
  <div class="col-7-s">col 7 s</div>
  <div class="col-5-s">col 5 s</div>
  <div class="col-6-s">col 6 s</div>
  <div class="col-6-s">col 6 s</div>
</div>
```

## Slice in

`.slice-in-NUMBER-BREAKPOINT_INFIX` child width is parent width ÷ NUMBER when screen width is ≥ BREAKPOINT.

```html
<div class="secondary grid slice-in-1-s">
  <div>slice in 1 s</div>
</div>
<div class="secondary grid slice-in-2-s">
  <div>slice in 2 s</div>
</div>
<div class="secondary grid slice-in-3-s">
  <div>slice in 3 s</div>
</div>
<div class="secondary grid slice-in-4-s">
  <div>slice in 4 s</div>
</div>
<div class="secondary grid slice-in-5-s">
  <div>slice in 5 s</div>
</div>
<div class="secondary grid slice-in-6-s">
  <div>slice in 6 s</div>
</div>
<div class="secondary grid slice-in-7-s">
  <div>slice in 7 s</div>
</div>
<div class="secondary grid slice-in-8-s">
  <div>slice in 8 s</div>
</div>
<div class="secondary grid slice-in-9-s">
  <div>slice in 9 s</div>
</div>
<div class="secondary grid slice-in-10-s">
  <div>slice in 1 s</div>
</div>
<div class="secondary grid slice-in-11-s">
  <div>slice in 1 s</div>
</div>
<div class="secondary grid slice-in-12-s">
  <div>slice in 1 s</div>
</div>
```

```html
<div class="secondary grid slice-in-12-xxl slice-in-9-xl slice-in-8-l slice-in-6-m slice-in-4-s slice-in-3-xs">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
  <div>Item 9</div>
  <div>Item 10</div>
  <div>Item 11</div>
  <div>Item 12</div>
</div>
```