import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  clean: true,
  dts: true,
  target: 'es2020',
  platform: 'browser',
  outDir: 'dist',
  bundle: true,
  treeshake: true,
  tsconfig: './prod.tsconfig.json',
  esbuildOptions(options) {
    options.banner = {
      js: '"use strict";',
    }
  },
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    }
  },
})
