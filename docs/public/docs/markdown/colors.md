# Colors

## Background color

You can set the background color of anything by adding classes. And text would get the right contrast.

```HTML
<style type="text/css">div { padding: 1em; display: inline-block; }</style>
<div class="canvas-bg">Canvas</div>
<div class="primary-bg">Primary</div>
<div class="secondary-bg">Secondary</div>
```

## Text color

When you set a color to a text, the color would contrast its background.

```HTML
<span class="canvas-text">Canvas</span>
<span class="primary-text">Primary</span>
<span class="secondary-text">Secondary</span>
```

## CSS varibles

Theme colors are enveloped in CSS variables.

```HTML
<style> div { width: 3em; height: 3em; display: inline-block; }</style>
<div style="background-color: var(--canvas-color)"></div>
<div style="background-color: var(--primary-color)"></div>
<div style="background-color: var(--secondary-color)"></div>
```

### Light versions of the colors

```HTML
<style> div { width: 3em; height: 3em; display: inline-block; }</style>
<div style="background-color: var(--light-canvas-color)"></div>
<div style="background-color: var(--light-primary-color)"></div>
<div style="background-color: var(--light-secondary-color)"></div>
```

### Dark versions of the colors

```HTML
<style> div { width: 3em; height: 3em; display: inline-block; }</style>
<div style="background-color: var(--dark-canvas-color)"></div>
<div style="background-color: var(--dark-primary-color)"></div>
<div style="background-color: var(--dark-secondary-color)"></div>
```
