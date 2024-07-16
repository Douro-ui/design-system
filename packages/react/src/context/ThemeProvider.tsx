import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import React from 'react';
import type { Theme } from '../theme/theme.types';
import { deepMerge } from '../utils/deepMerge';
import { defaultTheme } from '../theme';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

export const ThemeProvider = ({
  theme,
  children,
}: {
  theme?: Theme;
  children: React.ReactNode;
}): EmotionJSX.Element => {
  const mergedTheme = deepMerge({ ...defaultTheme }, theme);
  return (
    <ThemeProviderEmotion theme={mergedTheme}>{children}</ThemeProviderEmotion>
  );
};
