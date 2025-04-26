import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  splitting: false,
  clean: true,
  dts: true,
  target: 'es2020',
  platform: 'neutral',
  outDir: 'dist',
  bundle: false,
  treeshake: true,
  tsconfig: './prod.tsconfig.json',
  sourcemap: true,
  esbuildOptions: (options) => {
    options.banner = { js: '"use strict";' }
  },
  outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '' }),
})
