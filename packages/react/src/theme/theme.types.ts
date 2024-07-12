import {
  FontWeight,
  Heading,
  Body,
  Breakpoints,
  Display,
  BrandShadeColors,
  NeutralGroupColors,
  ShadeColors,
  ExtendedGroupColors,
} from './theme.constants';

export type BrandColors = {
  [key in BrandShadeColors]: string;
};

export type NeutralColors = {
  [key in NeutralGroupColors]: {
    [key in ShadeColors]: string;
  };
};

export type ExtendedColors = {
  [key in ExtendedGroupColors]: {
    [key in ShadeColors]: string;
  };
};

export type BreakpointsType = {
  [key in Breakpoints]: number;
};

export type FontFamilyType<FontFamily extends string> = {
  [key in FontFamily]: string;
};

export interface Theme {
  name: string;
  fontSize: number;
  fontFamily: FontFamilyType<'display' | 'text'>;
  spaceUnit: Record<string, string>;
  fontWeight: typeof FontWeight;
  colors: Colors;
  typography: Typography;
  breakpoints: BreakpointsType;
}

export type Colors = {
  brand: BrandColors;
  neutral: NeutralColors;
  extended: ExtendedColors;
};

export interface TypographyStyle {
  fontSize: string;
  fontWeight: FontWeight;
  lineHeight: string;
}

export interface TypographyBreakpoints {
  mobile: TypographyStyle;
  tablet: TypographyStyle;
  desktop: TypographyStyle;
  desktopLarge: TypographyStyle;
}

export type TypographyHeader = {
  [heading in Heading]: { [breakpoint in Breakpoints]: TypographyStyle };
};

export type TypographyDisplay = {
  [display in Display]: { [breakpoint in Breakpoints]: TypographyStyle };
};

export type TypographyBody = {
  [body in Body]: { [breakpoint in Breakpoints]: TypographyStyle };
};

export type Typography = {
  heading: TypographyHeader;
  display: TypographyDisplay;
  body: TypographyBody;
};
