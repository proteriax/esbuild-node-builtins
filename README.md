# esbuild-node-builtins

## Example

```ts
const { build } = require("esbuild")
const { nodeBuiltIns } = require("esbuild-node-builtins")

build({
  plugins: [nodeBuiltIns()],
})
```
