import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['dist'], // Diretórios ignorados
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser, // Parser para TypeScript
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Regras JS recomendadas
      ...tsPlugin.configs.recommended.rules, // Regras TS recomendadas
      ...reactHooks.configs.recommended.rules, // Regras React Hooks recomendadas
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
