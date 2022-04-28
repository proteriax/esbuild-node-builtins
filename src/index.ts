import type { Plugin } from "esbuild"
import * as builtIns from "./builtins"

declare type BuiltInModule = keyof typeof builtIns

interface NodeBuiltInOptions {
  include?: BuiltInModule[]
}

export const nodeBuiltIns = (options: NodeBuiltInOptions = {}): Plugin => {
  const { include = Object.keys(builtIns) } = options
  if (!include.length) {
    throw new Error("Must specify at least one built-in module")
  }
  const filter = RegExp(`^(${include.join("|")})$`)
  return {
    name: "node-builtins",
    setup(build) {
      build.onResolve({ filter }, arg => ({
        path: builtIns[arg.path as keyof typeof builtIns],
      }))
    },
  }
}
