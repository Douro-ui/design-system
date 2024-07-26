import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import React, { ReactElement } from 'react';
import type { Theme } from '../theme/theme.types';
import { deepMerge } from '../utils/deepMerge';
import { defaultTheme } from '../theme';

export const ThemeProvider = ({
  theme,
  children,
}: {
  theme?: Theme;
  children: React.ReactNode;
}): ReactElement => {
  const mergedTheme = deepMerge({ ...defaultTheme }, theme);
  return (
    <ThemeProviderEmotion theme={mergedTheme}>{children}</ThemeProviderEmotion>
  );
};
