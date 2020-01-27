# @favi_ty/babel-plugin-esm-url-resolver

add the `js` extension so that the import path can be executed as a URL

- only transpiling relative path. (may be only your repository sources)
- if the path already has an extensions, do nothing.
- if you importing `index` files, it must be specified `/index` in the path strings.

# Installation

```
yarn add -D @favi_ty/babel-plugin-esm-url-resolver
```

# Usage

```js
"plugins": ["@favi_ty/babel-plugin-esm-url-resolver"]
```

## In

```js
import * as src from "./module1";
```

## Out

```js
import * as src from "./module1.js";
```
