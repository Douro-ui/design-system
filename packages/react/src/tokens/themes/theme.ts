import { defaultPalette } from '../palettes';
import { Breakpoints } from './theme.constants';
import { smallDesktop, mobile, xxxlTypography } from './breakpoint.constants';

export const spaceUnit = 1;
const fontSize = 1;
const fontFamily = 'neue-haas-grotesk-display';

const typography = {
  [Breakpoints.XXXL]: xxxlTypography,
  [Breakpoints.XXL]: smallDesktop,
  [Breakpoints.XL]: smallDesktop,
  [Breakpoints.LG]: smallDesktop,
  [Breakpoints.MD]: mobile,
  [Breakpoints.IOS_MD]: mobile,
  [Breakpoints.ANDROID_XS]: mobile,
  [Breakpoints.IOS_XS]: mobile,
};

const theme = {
  mode: 'light',
  name: 'default_theme',
  colors: defaultPalette,
  fontFamily,
  fontSize,
  spaceUnit: {
    'spacing-0': `${spaceUnit * 0}rem`,
    'spacing-04': `${spaceUnit * 0.25}rem`,
    'spacing-06': `${spaceUnit * 0.375}rem`,
    'spacing-08': `${spaceUnit * 0.5}rem`,
    'spacing-12': `${spaceUnit * 0.75}rem`,
    'spacing-16': `${spaceUnit}rem`,
    'spacing-20': `${spaceUnit * 1.25}rem`,
    'spacing-24': `${spaceUnit * 1.5}rem`,
    'spacing-32': `${spaceUnit * 2}rem`,
    'spacing-40': `${spaceUnit * 2.5}rem`,
    'spacing-64': `${spaceUnit * 4}rem`,
    'spacing-80': `${spaceUnit * 5}rem`,
    'spacing-96': `${spaceUnit * 6}rem`,
    'spacing-120': `${spaceUnit * 8}rem`,
    'spacing-160': `${spaceUnit * 10}rem`,
  },
  typography,
  breakpoints: {
    [Breakpoints.ANDROID_XS]: 375,
    [Breakpoints.IOS_XS]: 360,
    [Breakpoints.IOS_MD]: 576,
    [Breakpoints.XXXL]: 1900,
    [Breakpoints.XXL]: 1400,
    [Breakpoints.XL]: 1200,
    [Breakpoints.LG]: 900,
    [Breakpoints.MD]: 700,
  },
};

export default theme;
