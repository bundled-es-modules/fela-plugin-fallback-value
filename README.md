# fela-plugin-fallback-value

This is a mirror of [fela-plugin-fallback-value](https://www.npmjs.com/package/fela-plugin-fallback-value), bundled and exposed as ES module.

## Install

```
npm install @bundled-es-modules/fela-plugin-fallback-value
bower install bundled-es-modules/fela-plugin-fallback-value
```

## Use

```html
<script type="module">
  // from main file
  import { fallbackValue } from 'fela-plugin-fallback-value';
  // or directly
  import fallbackValue from 'fela-plugin-fallback-value/bowser.js';
  console.log(fallbackValue);
</script>
```

Make sure you added `@bundled-es-modules` scope to the path if used via npm.
