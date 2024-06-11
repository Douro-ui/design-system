import { useTheme as useThemeEmotion } from '@emotion/react';
import type { Theme } from '../tokens/themes/theme.types';

export const useTheme = <T extends Theme>() => {
  return useThemeEmotion() as T;
};
