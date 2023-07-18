# Theme

If you use SASS, you can change SASS variables how you fancy to get a new theme.
It is worth to note that many variables are only in CSS, and they work differently to SASS variables.
Some parts of the theme are hard coded, for there is not a useful reason to encapsulate them in variables.

You must import _config.sass_ to your theme first to be able work well.
CSS is separated in mixin `last-declared`, because last declared CSS has priority over first declared, and the CSS of the theme must have priority over other CSS. Therefore, whatever you write in this mixin would be declared last in the resulting CSS transpiled from SASS.

## Colors

- **Canvas** is the color of website background.

- **Primary** is the main matching color of the website.

- **Secondary** is the second main color of the website.

- **Info** is the color for links.

Color variables in SASS:

```SASS
$colors: ( "canvas": ..., "primary": ..., "secondary": ...)
```

Color variables in CSS:

```CSS
:root {
  --canvas-color: ...;
  --primary-color: ...;
  --secondary-color: ...;
}
```

### Text contrast colors

`$colors` would also generate CSS variables to let text color contrast background color. You can change these as you fancy to create cool results!

```CSS
:root {
  --text-contrast-canvas-color: ...;
  --text-contrast-primary-color: ...;
  ...
}
```

Also, it generates versions of each color that contrast background color. In this way:

```CSS
:root {
  --canvas-text-contrast-canvas-color: ...;
  --primary-text-contrast-canvas-color: ...;
  ...
}
```

Most importantly, you can access a version of a color that contrast current background color through a CSS variable. You define current background color by adding a background class to your element, by extending that class using SASS, or it would be set by parent element.

In the next example, `.my-class` would receive adapted text colors that contrast its parent background color.

```CSS
.my-class {
  color: var(--secondary-text-color)
}
```

### Border colors

Besides, `$colors` generates border colors for components. Border colors would contrast background colors as much as you set `$border-contrast`.

```SASS
$border-color: ...
```

You are able to customise them using CSS variables too.

```CSS
:root {
  --canvas-border-color: ...;
  --primary-border-color: ...;
  ...
}
```

### Gradients

`$colors` even generates CSS variables for gradients, one for the light color of gradients, and another for the dark color, in the next way:

```CSS
:root {
  --light-gradient-canvas-color: ...;
  --dark-gradient-canvas-color: ...;
}
```

The contrast is taken from `$gradient-contrast`.

From these variables, you are able to create gradients for all backgrounds in the next way:

```SASS
$gradient: linear-gradient(to bottom, var(--light-gradient-color), var(--dark-gradient-color))
```

## Typography

### Links

Below there is a typical example of styling links. Text color is set to `--primary-text-color` to make it match the rest of the website.

```CSS
.link, a {
  color: var(--primary-text-color);
  text-decoration: underline;
  font: inherit;
}
```

## Components

`config.$component-selectors` is a SASS variable defined in configuration. It is a list of selectors of components that includes: `code`, `nav a`... There you can define style that components share.

```SASS
#{config.$component-selectors}
  padding: ...
  border-style: ...
  border-width: ...
  border-radius: ...
```

## Navbar

There is a CSS variable defined at `:root`, that sets top margin of body if there is a `nav.absolute`, or `nav.fixed`.

```CSS
:root {
  --navbar-body-margin: ...;
}
```
