import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tailwind from 'eslint-plugin-tailwindcss'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
  {
    ignores: ['dist/**', '*.config.*', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tailwind.configs['flat/recommended'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@/app',
              message:
                'FSD: Import from app layer to pages/features/entities/widgets is not allowed',
            },
            {
              name: '@/app/**',
              message:
                'FSD: Import from app layer to pages/features/entities/widgets is not allowed',
            },
          ],
          patterns: [
            {
              group: ['@/pages/**'],
              message: 'FSD: Import from pages layer to features/entities/widgets is not allowed',
            },
            {
              group: ['@/widgets/**'],
              message: 'FSD: Import from widgets layer to features/entities is not allowed',
            },
            {
              group: ['@/features/**'],
              message: 'FSD: Import from features layer to entities is not allowed',
            },
          ],
        },
      ],
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          'pathGroups': [
            {
              pattern: '@/app/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/pages/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/widgets/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/features/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/entities/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/shared/**',
              group: 'internal',
              position: 'after',
            },
          ],
          'pathGroupsExcludedImportTypes': ['builtin'],
          'alphabetize': {
            order: 'asc', // Сортировка по алфавиту
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    files: ['src/main.tsx', 'src/app/**/*'],
    rules: {
      'no-restricted-imports': 'off',
    },
  }
)
