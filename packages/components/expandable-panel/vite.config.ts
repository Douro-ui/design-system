import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteBuildBaseConfig } from '../../../vite.base';
import { name as packageName, main as mainEntry } from './package.json';
import type { BuildOptions } from 'vite';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  ...viteBuildBaseConfig<BuildOptions>(
    resolve(__dirname, mainEntry),
    packageName,
    {
      outDir: '../../../dist',
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: [
          'react',
          'react/jsx-runtime',
          'react-is',
          /emotion\/styled/,
          /emotion\/react/,
        ],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            react: 'React',
          },
        },
      },
    },
  ),
});
