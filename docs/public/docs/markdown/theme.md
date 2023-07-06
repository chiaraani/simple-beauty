# Theme

If you use SASS, you can change SASS variables how you fancy to get a new theme.
It is worth to note that many variables are only in CSS, and they work differently to SASS variables.
Some parts of the theme are hard coded, for there is not a useful reason to encapsulate them in variables.

You must import _config.sass_ to your theme first to be able work well.

## Colors

- **Canvas** is the color of website background.

- **Primary** is the main matching color of the website.

- **Secondary** is the second main color of the website.

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

## Components

`$component-selectors` is a SASS variable defined in configuration. It is a list of selectors of components that includes: `code`, `nav a`... There you can define style that components share.

```SASS
#{$component-selectors}
  padding: ...
  border: ...
  border-radius: ...
```

## Typography

### Links

Below there is a typical example of styling links. Text color is set to `---primary-color` to make it match the rest of the website.

```CSS
.link, a {
  color: var(--primary-color);
  text-decoration: underline;
  font: inherit;
}
```
