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
| Extra small | None |  <600px |
| Small | s |  ≥600px |
| Medium | m |  ≥800px |
| Large | l | ≥1000px |
| Extra large | xl |  ≥1200px |
| Extra extra large | xxl | ≥1400px |


## Part

`.part-NUMBER-of-BREAKPOINT_INFIX` width is going to be > (parent's width at BREAKPOINT) ÷ NUMBER. Then it is automatically going to adapt to smaller devices.

```html
<style type="text/css"> body { margin: 0; }</style>
<div class="part-1-xxl">
  <div class="primary card">part-1-of-xxl</div>
</div>
<div class="part-2-xxl">
  <div class="primary card">part-2-of-xxl</div>
</div>
<div class="part-3-xxl">
  <div class="primary card">part-3-of-xxl</div>
</div>
<div class="part-4-xxl">
  <div class="primary card">part-4-of-xxl</div>
</div>
<div class="part-6-xxl">
  <div class="primary card">part-6-of-xxl</div>
</div>
<div class="part-12-xxl">
  <div class="primary card">part-12-of-xxl</div>
</div>
```

## Sliced

`.slice-BREAKPOINT_INFIX-in-NUMBER` child width is going to be > (parent's width at BREAKPOINT) ÷ NUMBER. Then they are automatically going to adapt to smaller devices.

```html
<style type="text/css"> body { margin: 0; }</style>
<div class="slice-in-1-xxl">
  <div>
    <div class="primary card">slice-xxl-in-1</div>
  </div>
</div>
<div class="slice-in-2-xxl">
  <div>
    <div class="primary card">slice-xxl-in-2</div>
  </div>
</div>
<div class="slice-in-3-xxl">
  <div>
    <div class="primary card">slice-xxl-in-3</div>
  </div>
</div>
<div class="slice-in-4-xxl">
  <div>
    <div class="primary card">slice-xxl-in-4</div>
  </div>
</div>
<div class="slice-in-6-xxl">
  <div>
    <div class="primary card">slice-xxl-in-6</div>
  </div>
</div>
<div class="slice-in-12-xxl">
  <div>
    <div class="primary card">slice-xxl-in-12</div>
  </div>
</div>
```