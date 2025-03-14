import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  splitting: false,
  clean: true,
  dts: true,
  target: 'es2020',
  platform: 'browser',
  outDir: 'dist',
  bundle: false,
  treeshake: true,
  tsconfig: './prod.tsconfig.json',
  esbuildOptions(options) {
    options.banner = {
      js: '"use strict";',
    }
  },
  outExtension: () => ({ js: '' }),
})
