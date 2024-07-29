import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/vite.config.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      ecmaVersion: 8,
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      react: pluginReactConfig,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...pluginReactConfig.configs.recommended.rules,
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': [
        'error',
        { allowTypedFunctionExpressions: true },
      ],
      '@typescript-eslint/typedef': [
        'error',
        {
          parameter: true,
          arrowParameter: true,
          propertyDeclaration: true,
          memberVariableDeclaration: true,
        },
      ],
    },
  },
  {
    files: ['**/*.styles.ts', '**/*.styles.tsx'],
    rules: {
      '@typescript-eslint/typedef': 'off',
    },
  },
];
