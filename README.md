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

# Options

## dirs?: String[]

include the path that starts with one of the values in the transformation target

```json
{
  "dirs": ["/src"]
}
```

in:

```js
import lib from "/src/lib";
import lib2 from "/src/node/lib2";
import lib3 from "src/node/lib3"; // that's not transform!
```

out:

```js
import lib from "/src/lib.js";
import lib2 from "/src/node/lib2.js";
import lib3 from "src/node/lib3"; // that's not transform!
```
