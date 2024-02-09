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

## Part

`part-NUMBER` class is going to be 1400px divided in that number. Then it is automatically going to adapt to smaller devices.

```html
<div class="part-1">
  <div class="primary card">part-1</div>
</div>
<div class="part-2">
  <div class="primary card">part-2</div>
</div>
<div class="part-3">
  <div class="primary card">part-3</div>
</div>
<div class="part-4">
  <div class="primary card">part-4</div>
</div>
<div class="part-6">
  <div class="primary card">part-6</div>
</div>
<div class="part-12">
  <div class="primary card">part-12</div>
</div>
```

## Sliced

`.sliced-in-NUMBER` children are going to be 1400px divided in that number. Then they are automatically going to adapt to smaller devices.

```html
<div class="sliced-in-1">
  <div>
    <div class="primary card">sliced-in-1</div>
  </div>
</div>
<div class="sliced-in-2">
  <div>
    <div class="primary card">sliced-in-2</div>
  </div>
</div>
<div class="sliced-in-3">
  <div>
    <div class="primary card">sliced-in-3</div>
  </div>
</div>
<div class="sliced-in-4">
  <div>
    <div class="primary card">sliced-in-4</div>
  </div>
</div>
<div class="sliced-in-6">
  <div>
    <div class="primary card">sliced-in-6</div>
  </div>
</div>
<div class="sliced-in-12">
  <div>
    <div class="primary card">sliced-in-12</div>
  </div>
</div>
```