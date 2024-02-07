---
title: Configuration
---

`_config.sass` file contains critical variables for layout development.

## Breakpoints

By default, breakpoints are:

| Breakpoint        | Class infix | Dimensions |
| ----------------- | ----------- | ---------- |
| Extra small       | None        | <576px     |
| Small             | sm          | ≥576px     |
| Medium            | md          | ≥768px     |
| Large             | lg          | ≥992px     |
| Extra large       | xl          | ≥1200px    |
| Extra extra large | xxl         | ≥1400px    |

However, you can customise breakpoints as SASS variables, in the next way:

```SASS
$breakpoints: ('sm': ..., 'md': ..., 'xl': ..., 'xxl': ... )
```

### Collapse breakpoint

`$collapse-breakpoint` when navbars should display horizontally, or collapsed vertically.

```SASS
$collapse-breakpoint: map.get($breakpoints, 'sm')
```

## Component selectors

It is a list of selectors of components that includes: `code`, `nav a`... So you can define style that components share. You can customise the list of components by changing this variable.

```SASS
$component-selectors: ..., ...
```

## Button selectors

`$button-selectors` defines all selectors for buttons, in turn, button selectors are component selectors as well.

```SASS
$button-selectors: ..., ...
```
