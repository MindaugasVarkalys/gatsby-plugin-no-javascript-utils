# gatsby-plugin-no-javascript-utils

[![npm version](https://img.shields.io/npm/v/gatsby-plugin-no-javascript-utils.svg)](https://www.npmjs.com/package/gatsby-plugin-no-javascript-utils)

The utils for static site without javascript

> TODO: remove Gatsby tags in body

## Install

```bash
npm i gatsby-plugin-no-javascript gatsby-plugin-no-javascript-utils
#or
yarn add gatsby-plugin-no-javascript gatsby-plugin-no-javascript-utils
```

## How to use

```js
// In your gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'Blog',
    description: 'Web Blog'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',

    /* ... */

    // make sure it is included last in the plugins array.
    'gatsby-plugin-no-javascript',
    'gatsby-plugin-no-javascript-utils',
  ],
}
```

## Options

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-plugin-no-javascript',
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: true,
        noInlineStyles: false,
        removeGatsbyAnnouncer: false,
      },
    },
  ],
}
```

**`noSourcemaps: (default: true)`**

Disable generation of javascript sourcemaps

**`removeGeneratorTag: (default: true)`**

Remove generator meta tag

```diff
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
- <meta name="generator" content="Gatsby 2.21.4">
  <title>My Blog</title>
```

**`removeReactHelmetAttrs: (default: true)`**

Remove react-helmet data attributes

```diff
- <html lang="en" data-react-helmet="lang">
+ <html lang="en">
```

**`noInlineStyles: (default: false)`**

Replacing `<style data-href>` tag with `<link>` tag for reducing the size of HTML files and browser caching of CSS files.

```diff
- <style data-href="/styles.457cfd10c24f55260d5a.css"> ⋯ </style>
+ <link rel="stylesheet" href="/styles.457cfd10c24f55260d5a.css" type="text/css"/>
```

**`removeGatsbyAnnouncer: (default: false)`**

The `<div id="gatsby-announcer" ⋯>` is announcing route changes in a single-page application where the pages update without a reload. It may be unnecessary on a static sites.

```diff
<body>
  <div id="___gatsby">
    <div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper"> ⋯ </div>
-   <div id="gatsby-announcer" style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0" aria-live="assertive" aria-atomic="true"></div>
  </div>
```

## License

[MIT](./LICENSE)
