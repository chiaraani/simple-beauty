# Theme

If you use SASS, you can change SASS variables how you fancy to get a new theme.
It is worth to note that _many variables are only in CSS_, and they work differently to SASS variables.
Some parts of the theme are hard coded, for there is not a useful reason to encapsulate them in variables.

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

`.component` is extended using SASS to many elements: `code`, `nav a`...

```SASS
.component
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
