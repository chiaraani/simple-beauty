---
title: Modal
---

```html
<style>body { height: 20em; }</style>
<a class="open-modal button" href="#modal">Open modal</a>
<div class="modal" id="modal">
  <a class="close" href=""></a>
  <h2>Modal</h2>
  <p>Content...</p>
  <hr />
  <a href="#" class="danger button">Cancel</a>
  <a href="#" class="success button">Accept</a>
</div>
```

## Open

```html
<style>body { height: 20em; }</style>
<div class="open modal" id="modal">
  <a class="close" href=""></a>
  <h2>Modal</h2>
  <p>Content...</p>
  <hr />
  <a href="#" class="danger button">Cancel</a>
  <a href="#" class="success button">Accept</a>
</div>
```

## Big modal


```html
<style>body { height: 10em; }</style>
<div class="open modal part-1" id="modal">
  <a class="close" href=""></a>
  <h2>Modal</h2>
  <ol class="group">
    <li>Item abc def ghi jkl mno pqrs tuv wxyz</li>
    <li>Item abc def  wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ</li>
    <li>Item abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ</li>
    <li>Item abc def ghi jkl mno pqrs tuv w ABC DEF GHI JKL MNO PQRS TUV WXYZ</li>
    <li>Item abc dejkl mno pqrs tuv wxyz ABC DEF GHI JKLO PQRS TUV WXYZ</li>
  </ol>
  <hr />
  <a href="#" class="danger button">Cancel</a>
  <a href="#" class="success button">Accept</a>
</div>
```