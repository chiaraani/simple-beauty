---
title: Principles of Simple beauty
---

What makes Simple beauty different to other web layout frameworks is its principles.

## Style html tags

If you want to style navbars, style is directly applied to `nav` tag, instead of creating `navbar` class, and a class to style links of the navbar.

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>
```

If an HTML tag is very specific, then apply style directly to it.
This makes development very fast, because if you have a great deal of not styled html code, you might not even need to think about adding classes to it.

### Exceptions

#### You want a different look to actual html tag

When you want element to look as if was other kind of element.

```html
<a class="button" href="#">Not a button, but it looks like a button</a>
```

#### html tag is unspecific

For example, you want to make a component out of a 'div'.

```html
<div class="component">This is a div that is styled as a component.</div>
```

#### To set a particular feature

For example, you want your text to have a particular color.

```html
<span class="secondary-text">Text with secondary color</span>
```

## Change look and feel in CSS or SASS

If you wish to change look, create a new theme with SASS variables, CSS variables, or CSS in general. Adding loads of classes that abbreviate CSS declarations is very tedious, and ends up in a very unclean messy long html.

## How was this framework originated?

In 2015, when I worked at the layout of a website of mine with bootstrap, I was weary of having to memorise so many classes to style everything I fancied. I felt like a repetitive machine. So I thought there was something wrong with web layout frameworks. I wondered, "Machines are made to take us off the repetitive work. Therefore, why are we going to have tedious repetitive web layout development if web layouts are inside machines?" After years of reflecting on how developing web layouts, I got to the clonclusion of the mentioned principles.

Web layout development should be smarter to become simpler. So I considered both "smart" and "simple" as possible words for the name of the framework. Nonetheless, I prefered "simple" over "smart" because it is an alusion to the Christian Roman Catholic God that one if his adjectives is "simple". I want to make web layout development simple because God is simple. Furthermore, it is important that webs are beautiful, and it results that "beauty" is also an alusion to the Christian Roman Catholic God, who is the "beauty" himself.

Finally, the name of the framework is "Simple beauty".