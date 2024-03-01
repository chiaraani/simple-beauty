---
title: Modal
---

```html
<style>body { height: 20em; }</style>
<button onclick="openModal('modal')">Open modal</button>
<div class="modal" id="modal">
  <button class="close" onclick="closeModal()"></button>
  <h2>Modal</h2>
  <p>Content...</p>
  <hr />
  <button href="#" class="danger" onclick="closeModal()">Cancel</button>
  <button class="success">Accept</button>
</div>
```

## Open

```html
<style>body { height: 20em; }</style>
<div class="open modal" id="modal">
  <button class="close"></button>
  <h2>Modal</h2>
  <p>Content...</p>
  <hr />
  <button href="#" class="danger">Cancel</button>
  <button class="success">Accept</button>
</div>
```

## Big modal


```html
<style>body { height: 10em; }</style>
<div class="open modal part-1" id="modal">
  <button class="close"></button>
  <h2>Modal</h2>
  <ol class="group">
    <li>Item abc def ghi jkl mno pqrs tuv wxyz</li>
    <li>Item abc def  wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ</li>
    <li>Item abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ</li>
    <li>Item abc def ghi jkl mno pqrs tuv w ABC DEF GHI JKL MNO PQRS TUV WXYZ</li>
    <li>Item abc dejkl mno pqrs tuv wxyz ABC DEF GHI JKLO PQRS TUV WXYZ</li>
  </ol>
  <hr />
  <button href="#" class="danger">Cancel</button>
  <button class="success">Accept</button>
</div>
```