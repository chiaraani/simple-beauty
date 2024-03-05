---
title: Colours
---

These are the colours of simple beauty:

```html
<ul class="list-group">
  <li class="canvas"><strong>Canvas:</strong> background colour of the site and some components.</li>
  <li class="primary"><strong>Primary:</strong> main colour of the website, for buttons, navbar, components, links, and forms by default.</li>
  <li class="secondary"><strong>Secondary:</strong> second colour for the site.</li>
  <li class="tertiary"><strong>Tertiary:</strong> third colour for the site.</li>
  <li class="success"><strong>Success:</strong> colour used for positive or successful actions and information.</li>
  <li class="danger"><strong>Danger:</strong> colour used for errors and dangerous actions.</li>
  <li class="warning"><strong>Warning:</strong> colour used for non-destructive warning messages.</li>
  <li class="info"><strong>Info:</strong> colour used for neutral and informative content.</li>
  <li class="matching"><strong>Matching:</strong> it always matches parent's colour.</li>
</ul>
```

Those are recommendations for using colours, but you can change defaults and even add more colours by [making your theme](/docs/theme.html) .

## Background

Just add class `COLOUR-NAME-bg`.

```html
<p>
  <span class="canvas-bg">Canvas</span>
  <span class="primary-bg">Primary</span>
  <span class="secondary-bg">Secondary</span>
  <span class="tertiary-bg">Tertiary</span>
  <span class="success-bg">Success</span>
  <span class="danger-bg">Danger</span>
  <span class="warning-bg">Warning</span>
  <span class="info-bg">Info</span>
  <span class="matching-bg">Matching</span>
</p>
```

## Text

Just add class `COLOUR-NAME-text`.

```html
<p>
  <span class="canvas-text">Canvas</span>
  <span class="primary-text">Primary</span>
  <span class="secondary-text">Secondary</span>
  <span class="tertiary-text">Tertiary</span>
  <span class="success-text">Success</span>
  <span class="danger-text">Danger</span>
  <span class="warning-text">Warning</span>
  <span class="info-text">Info</span>
  <span class="matching-text">Matching</span>
</p>
```
They will contrast automatically:

```html
<style>span { margin: 0 0.5em }</style>
<div class="primary card">
  <span class="canvas-text">Canvas</span><span class="primary-text">Primary</span>
  <span class="secondary-text">Secondary</span><span class="tertiary-text">Tertiary</span>
  <span class="success-text">Success</span><span class="danger-text">Danger</span>
  <span class="warning-text">Warning</span><span class="info-text">Info</span>
  <span class="matching-text">Matching</span>
</div>
```

## Components

Add `COLOR_NAME` class.

```html
<button class="canvas">Canvas</button>
<button class="primary">Primary</button>
<button class="secondary">Secondary</button>
<button class="tertiary">Tertiary</button>
<button class="success">Success</button>
<button class="danger">Danger</button>
<button class="warning">Warning</button>
<button class="info">Info</button>
<button class="matching">Matching</button>
```

## Matching

An example of usage of matching classes.

```html
<div class="tertiary card">
  Parent
  <button class="matching">Matching</button>
  <p class="danger-text">Parent <span class="matching-text">Matching</span> Parent</p>
</div>
```