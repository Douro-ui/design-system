import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import React from 'react';
 
export const theme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#f8f9fa',
        text: '#343a40',
    },
    spacing: {
        xs: '6px',
        sm: '12px',
        md: '24px',
        lg: '36px',
        xl: '48px',
    },
}
 
export const ThemeProvider = ({theme, children}: {theme: any, children: React.ReactNode}) => {
    return <ThemeProviderEmotion theme={theme}>{children}</ThemeProviderEmotion>
}