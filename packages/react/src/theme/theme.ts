import { brand, neutral, extended } from '../tokens/palettes';
import { body, display, heading } from '../tokens/typography';
import { spacing } from '../tokens/spacing';
import {
  Breakpoints,
  FontWeight,
  fontFamilyDisplay,
  fontFamilyText,
} from './theme.constants';
import { Theme } from './theme.types';

const fontSize = '1rem';

const theme: Theme = {
  name: 'default_theme',
  colors: {
    brand,
    neutral,
    extended,
  },
  fontFamily: {
    display: fontFamilyDisplay,
    text: fontFamilyText,
  },
  fontWeight: {
    REGULAR: FontWeight.REGULAR,
    ROMAN: FontWeight.ROMAN,
    MEDIUM: FontWeight.MEDIUM,
    BOLD: FontWeight.BOLD,
    BOLDER: FontWeight.BOLDER,
  },
  fontSize,
  spacing,
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
