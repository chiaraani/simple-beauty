---
title: Forms
---

An example of a form:

```html
<h1>Sign Up</h1>
<form>
  <div class="field">
    <p><label for="exampleInputEmail1">Email address</label></p>
    <p><input type="email" id="exampleInputEmail1" placeholder="joe.doe@example.com"></p>
  </div>
  <div class="field">
    <p><label for="exampleInputPassword1">Password</label></p>
    <p><input type="password" id="exampleInputPassword1" aria-describedby="passwordHelp"></p>
    <p for="passwordHelp">Make sure you use a secure password.</p>
  </div>
  <div class="field">
    <p><label for="exampleInputPassword2">Password Confirmation</label></p>
    <p><input type="password" id="exampleInputPassword2"></p>
  </div>
  <div class="field">
    <p><label for="exampleSelectOption1">Plan</label></p>
    <p>
      <select id="exampleSelectOption1">
        <option disabled selected>Select a plan</option>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </select>
    </p>
  </div>
  <div class="field">
    <input type="checkbox" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <div class="actions">
    <button type="submit" class="btn btn-primary">Sign Up</button>
  </div>
</form>
```
## All styled form elements

You need to do nothing! All automatic!

```html
<input type="button" value="Input button">
<input type="date">
<input type="datetime-local">
<input type="email" placeholder="email">
<input type="month">
<input type="number" placeholder="number">
<input type="password" placeholder="password">
<input type="reset">
<input type="search" placeholder="search">
<input type="submit">
<input type="tel" placeholder="tel">
<input type="text" placeholder="text">
<input type="time">
<input type="url" placeholder="url">
<input type="week">
<button>Button</button>
<select>
  <option disabled selected>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
<textarea placeholder="textarea"></textarea>
```


## Colours

```html
<input type="text" class="canvas">
<input type="text" class="primary">
<input type="text" class="secondary">
<input type="text" class="tertiary">
<input type="text" class="success">
<input type="text" class="danger">
<input type="text" class="warning">
<input type="text" class="info">
```


## Danger field

```html
<div class="field danger">
  <p><label for="exampleInputPassword1">Password</label></p>
  <p><input type="password" id="exampleInputPassword1" aria-describedby="passwordHelp"></p>
  <p for="passwordHelp"><em>It is wrong.</em></p>
</div>
```
## On other background

```html
<div class="primary card">
  <div class="field">
    <p><label for="exampleInputEmail1">Email address</label></p>
    <p><input type="email" id="exampleInputEmail1"></p>
  </div>
  <div class="field danger">
    <p><label for="exampleInputPassword1">Password</label></p>
    <p><input type="password" id="exampleInputPassword1" aria-describedby="passwordHelp"></p>
    <p for="passwordHelp"><em>It is wrong.</em></p>
  </div>
</div>
```