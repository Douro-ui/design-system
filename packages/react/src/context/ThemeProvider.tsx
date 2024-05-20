import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import React from 'react';
import {  defaultTheme } from '../tokens';
import type { Theme } from '../tokens/themes/theme.types';



 const mergeThemes = (newTheme?: Partial<Theme>): Theme => {
    return {
        ...defaultTheme,
        ...newTheme,
    };
};

export const ThemeProvider = ({ theme, children }: { theme?: Theme, children: React.ReactNode }) => {
    const mergedTheme = mergeThemes(theme);
    return <ThemeProviderEmotion theme={mergedTheme}>{children}</ThemeProviderEmotion>;
};