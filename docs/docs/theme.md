---
title: Theme
---

## Colors

Color variables in CSS:

```css
:root {
  --canvas-color: ...;
  --primary-color: ...;
  --secondary-color: ...;
}
```

In SCSS, there is a mixin to generate variables more easily:

```scss
@include generate-color-variables.globals(
  $colors: (
    "canvas": white,
    "primary": #002b6f,
    "secondary": #005b52,
    "tertiary": #29005b,
    "success": #005b15,
    "danger": #970000,
    "warning": #e78f00,
    "info": #00b8cf,
  ),
  $text-contrast: 95%,
  $border-contrast: 30%,
  $hover-contrast: 10%,
  $active-contrast: 20%,
);
```


### Text contrast colors

`$colors` would also generate CSS variables to let text color contrast background color. You can change these as you fancy to create cool results!

```css
:root {
  --text-contrast-canvas-color: ...;
  --text-contrast-primary-color: ...;
  ...
}
```

Also, it generates versions of each color that contrast background color. In this way:

```css
:root {
  --canvas-text-contrast-canvas-color: ...;
  --primary-text-contrast-canvas-color: ...;
  ...
}
```

Most importantly, you can access a version of a color that contrast current background color through a CSS variable. You define current background color by adding a background class to your element, by extending that class using sass, or it would be set by parent element.

In the next example, `.my-class` would receive adapted text colors that contrast its parent background color.

```css
.my-class {
  color: var(--secondary-text-color)
}
```

### Border colors

You are able to customise them using CSS variables too.

```css
:root {
  --canvas-border-color: ...;
  --primary-border-color: ...;
  ...
}
```

### Hover

You may want to change color of clickable elements when hovered. You can set the contrast when a clickable element is hover by setting `$hover-contrast`.

```css
:root {
  --canvas-hover-color: ...;
  --primary-hover-color: ...;
  ...
}
```