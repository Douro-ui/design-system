import { defaultPalette } from '../palettes';
import { body, display, heading } from '../typography';
import {
  Breakpoints,
  FontWeight,
  fontFamilyDisplay,
  fontFamilyText,
} from './theme.constants';
import { Theme } from './theme.types';

const spaceUnit = 1;
const fontSize = 1;

const theme: Theme = {
  name: 'default_theme',
  colors: defaultPalette,
  fontFamily: {
    display: fontFamilyDisplay,
    text: fontFamilyText,
  },
  fontWeight: FontWeight,
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
  typography: {
    heading,
    body,
    display,
  },

  breakpoints: {
    [Breakpoints.MOBILE]: 576,
    [Breakpoints.DESKTOP_LARGE]: 1400,
    [Breakpoints.DESKTOP]: 900,
    [Breakpoints.TABLET]: 700,
  },
};

export default theme;
