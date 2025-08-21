# Initum
The template helps you quickly start layout development for a project.

Before the first run:

```bash
sudo npm install
```

## Modes
One-time build:

```bash
gulp
```

Start live build on a local server:

```bash
gulp live
```

Live build on a local server with an internet tunnel:

```bash
gulp external-world
```

## Templating
Templates are built in the `templates` folder using `<include>` tags. Components are located in `blocks`. Variables are used via `@@var` (see [gulp-html-tag-include](https://github.com/straykov/gulp-html-tag-include)). Production files are automatically compiled into the project root.

## Styles
Styles are written in `assets/source/styles/layout.css`, compiled to `assets/css/style.css`.

#### PostCSS
Variables ([postcss-simple-vars](https://github.com/postcss/postcss-simple-vars)):

```css
$f_Helvetica: "Helvetica Neue", Arial, sans-serif;
```

Nesting ([postcss-nested](https://github.com/postcss/postcss-nested)) for BEM elements:

```css
.block {
  ...

  &__element {
    ...
  }
}
```

[CSSNext](http://cssnext.io): Features from CSS 4, prefixes, custom media queries.

