import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/vite.config.ts', '**/.storybook/*.ts'],
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
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...pluginReactConfig.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...pluginReactConfig.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
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
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/media-has-caption': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/no-noninteractive-tabindex': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/label-has-for': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-distracting-elements': 'warn',
    },
  },
  {
    files: ['**/*.styles.ts', '**/*.styles.tsx'],
    rules: {
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
