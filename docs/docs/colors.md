---
title: Colours
---

These are the colours of simple beauty:

```html
<ul class="group">
  <li class="canvas"><strong>Canvas:</strong> background colour of the site and some components.</li>
  <li class="primary"><strong>Primary:</strong> main colour of the website, for buttons, navbar, components, links, and forms by default.</li>
  <li class="secondary"><strong>Secondary:</strong> second colour for the site.</li>
  <li class="tertiary"><strong>Tertiary:</strong> third colour for the site.</li>
  <li class="success"><strong>Success:</strong> color used for positive or successful actions and information.</li>
  <li class="danger"><strong>Danger:</strong> color used for errors and dangerous actions.</li>
  <li class="warning"><strong>Warning:</strong> color used for non-destructive warning messages.</li>
  <li class="info"><strong>Info:</strong> color used for neutral and informative content.</li>
</ul>
```

Those are recommendations for using colours, but you can change defaults them by [making your theme](/docs/theme.html).

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
</p>
```
They will contrast automatically:

```html
<style>span { margin: 0 0.5em }</style>
<div class="primary card">
  <span class="canvas-text">Canvas</span><span class="primary-text">Primary</span><span class="secondary-text">Secondary</span><span class="tertiary-text">Tertiary</span>
  <span class="success-text">Success</span><span class="danger-text">Danger</span><span class="warning-text">Warning</span><span class="info-text">Info</span>
</div>
```