import { Breakpoints } from '@douro-ui/react';

export const mockTheme = {
  breakpoints: {
    mobile: 576,
    tablet: 700,
    desktop: 900,
    desktopLarge: 1400,
  },
  typography: {
    display: {
      display1: {
        [Breakpoints.MOBILE]: {
          fontSize: '20px',
          lineHeight: '24px',
          fontWeight: 400,
        },
        [Breakpoints.TABLET]: {
          fontSize: '24px',
          lineHeight: '28px',
          fontWeight: 500,
        },
        [Breakpoints.DESKTOP]: {
          fontSize: '28px',
          lineHeight: '32px',
          fontWeight: 600,
        },
        [Breakpoints.DESKTOP_LARGE]: {
          fontSize: '32px',
          lineHeight: '36px',
          fontWeight: 900,
        },
      },
    },
    heading: {
      h1: {
        [Breakpoints.MOBILE]: {
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: 400,
        },
        [Breakpoints.TABLET]: {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 500,
        },
        [Breakpoints.DESKTOP]: {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 600,
        },
        [Breakpoints.DESKTOP_LARGE]: {
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: 700,
        },
      },
    },
    body: {
      body1: {
        [Breakpoints.MOBILE]: {
          fontSize: '10px',
          lineHeight: '12px',
          fontWeight: 400,
        },
        [Breakpoints.TABLET]: {
          fontSize: '12px',
          lineHeight: '14px',
          fontWeight: 500,
        },
        [Breakpoints.DESKTOP]: {
          fontSize: '14px',
          lineHeight: '16px',
          fontWeight: 600,
        },
        [Breakpoints.DESKTOP_LARGE]: {
          fontSize: '16px',
          lineHeight: '18px',
          fontWeight: 700,
        },
      },
    },
  },
};
