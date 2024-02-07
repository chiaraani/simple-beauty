---
title: Theme
---

If you use sass, you can change sass variables how you fancy to get a new theme.
It is worth to note that many variables are only in CSS, and they work differently to sass variables.
Some parts of the theme are hard coded, for there is not a useful reason to encapsulate them in variables.

You must import _config.sass_ to your theme first to be able work well.
CSS is separated in mixin `last-declared`, because last declared CSS has priority over first declared, and the CSS of the theme must have priority over other CSS. Therefore, whatever you write in this mixin would be declared last in the resulting CSS transpiled from sass.

## Colors

- **Canvas** is the color of website background.

- **Primary** is the main matching color of the website.

- **Secondary** is the second main color of the website.

- **Info** is the color for links.

Color variables in sass:

```sass
$colors: ( "canvas": ..., "primary": ..., "secondary": ...)
```

Color variables in CSS:

```css
:root {
  --canvas-color: ...;
  --primary-color: ...;
  --secondary-color: ...;
}
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

Besides, `$colors` generates border colors for components. Border colors would contrast background colors as much as you set `$border-contrast`.

```sass
$border-color: ...
```

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

```sass
$hover-contrast: ...
```

### Active

You may want to change color of clickable elements when active, focus or with `active` class. You can set their contrast with `$active-contrast`.

```sass
$active-contrast: ...
```

### Gradients

You can define a gradient for all backgrounds by declaring `--background-image`.

```css
:root {
  --background-image: ...;
}
```

## Typography

### Links

Below there is a typical example of styling links. Text color is set to `--primary-text-color` to make it match the rest of the website.

```css
.link, a {
  color: var(--primary-text-color);
  text-decoration: underline;
  font: inherit;
}
```

## Components

`config.$component-selectors` is a sass variable defined in configuration. It is a list of selectors of components that includes: `code`, `nav a`... There you can define style that components share.

```sass
#{config.$component-selectors}
  padding: ...
  border-style: ...
  border-width: ...
  border-radius: ...
```

Also you can define styles for buttons, and clickable elements.

```sass
#{config.$button-selectors}
  ...

#{config.$clickable-selectors}
  ...
  &:focus, &:focus:hover
    background-color: ...

```

## Navbar

There is a CSS variable defined at `:root`, that sets top margin of body if there is a `nav.absolute`, or `nav.fixed`.

```css
:root {
  --navbar-body-margin: ...;
}
```