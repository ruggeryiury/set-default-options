import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import jsdoc from 'eslint-plugin-jsdoc'

/** @type {import('typescript-eslint').ConfigWithExtends} */
const tseslintConfig = {
  languageOptions: {
    parser: tseslint.parser,
    sourceType: 'module',
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  files: ['src/**/*.ts'],
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    jsdoc: jsdoc,
  },
  extends: [eslint.configs.recommended, ...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked, jsdoc.configs['flat/recommended']],
  ignores: ['tests/**/*.ts', 'dist/**/*', 'src-old/**/*'],
  rules: {
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-extraneous-class': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/valid-types': 'off',
  },
}

export default tseslint.config(tseslintConfig)
