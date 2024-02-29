---
title: Layout
---

## Responsive-wrapper

With `responsive-wrapper` class elements would automatically adapt to device.

```html
<div class="responsive-wrapper">
  <div class="primary card" style="width: 100px">Item 1</div>
  <div class="primary card" style="width: 300px">Item 2</div>
  <div class="primary card" style="width: 700px">Item 3</div>
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

## Hide and show classes

`hide-BREAKPOINT_INFIX` classes would hide elements when screen width is greater than or equalt to BREAKPOINT. `show-BREAKPOINT_INFIX` classes would show only elements when screen width is greater than or equalt to BREAKPOINT.

```html
<div class="responsive-wrapper">
  <div class="primary card hide-xs">Hide xs</div>
  <div class="primary card hide-s">Hide s</div>
  <div class="primary card hide-m">Hide m</div>
  <div class="primary card hide-l">Hide l</div>
  <div class="primary card hide-xl">Hide xl</div>
  <div class="primary card hide-xxl">Hide xxl</div>
</div>
<div class="responsive-wrapper">
  <div class="primary card show-xs">Show xs</div>
  <div class="primary card show-s">Show s</div>
  <div class="primary card show-m">Show m</div>
  <div class="primary card show-l">Show l</div>
  <div class="primary card show-xl">Show xl</div>
  <div class="primary card show-xxl">Show xxl</div>
</div>
```