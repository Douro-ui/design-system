import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import React from 'react';
import type { Theme } from '../tokens/themes/theme.types';
import { deepMerge } from '../utils/deepMerge';
import { defaultTheme } from '../tokens';

export const ThemeProvider = ({
  theme,
  children,
}: {
  theme?: Partial<Theme>;
  children: React.ReactNode;
}) => {
  const mergedTheme = deepMerge({ ...defaultTheme }, theme);
  return (
    <ThemeProviderEmotion theme={mergedTheme}>{children}</ThemeProviderEmotion>
  );
};
