import { useTheme as useThemeEmotion } from '@emotion/react';
import type { Theme } from '../theme/theme.types';

export const useTheme = <T extends Theme = Theme>(): T => {
  return useThemeEmotion() as T;
};
