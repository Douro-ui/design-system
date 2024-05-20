export type BreakpointsType = {
  [key in Breakpoints]: number;
}

export enum FontWeight {
  REGULAR = 400,
  ROMAN = 500,
  MEDIUM = 600,
  BOLD = 700,
  BOLDER = 900
}

interface TypographyStyle {
  fontSize?: string;
  fontWeight?: FontWeight;
  lineHeight?: string;
  fontFamily?: string;
}
interface TypographyHeader {
  h1?: TypographyStyle;
  h2?: TypographyStyle;
  h3?: TypographyStyle;
  h4?: TypographyStyle;
  h5?: TypographyStyle;
  h6?: TypographyStyle;
  h7?: TypographyStyle;
  h8?: TypographyStyle;
}

interface TypographyTitle {
  title1?: TypographyStyle;
  title2?: TypographyStyle;
  title3?: TypographyStyle;
  title4?: TypographyStyle;
  title5?: TypographyStyle;
  title6?: TypographyStyle;
  title7?: TypographyStyle;
  title8?: TypographyStyle;
}

interface TypographyBody {
  body1?: TypographyStyle;
  body2?: TypographyStyle;
  body3?: TypographyStyle;
  body4?: TypographyStyle;
  body5?: TypographyStyle;
  body6?: TypographyStyle;
  body7?: TypographyStyle;
  body8?: TypographyStyle;
}

interface TypographyButton {
  buttonL?: TypographyStyle & { '&:hover'?: { textDecoration?: string } };
  buttonM?: TypographyStyle & { '&:hover'?: { textDecoration?: string } };
  buttonS?: TypographyStyle & { '&:hover'?: { textDecoration?: string } };
}

interface TypographyLink {
  link2XL?: TypographyStyle & { '&:active'?: { fontWeight?: FontWeight } };
  linkXL?: TypographyStyle & { '&:active'?: { fontWeight?: FontWeight } };
  linkL?: TypographyStyle & { '&:active'?: { fontWeight?: FontWeight } };
  linkM?: TypographyStyle & { '&:active'?: { fontWeight?: FontWeight } };
  linkS?: TypographyStyle & { '&:active'?: { fontWeight?: FontWeight } };
}

interface TypographyGroup {
  header?: TypographyHeader;
  title?: TypographyTitle;
  body?: TypographyBody;
  button?: TypographyButton;
  links?: TypographyLink;
}

export type Typography = {
  xxxl?: TypographyGroup;
  xxl?: TypographyGroup;
  xl?: TypographyGroup;
  l?: TypographyGroup;
  md?: TypographyGroup;
  ios_md?: TypographyGroup;
  android_xs?: TypographyGroup;
  ios_xs?: TypographyGroup;
}
export enum Breakpoints {
  ANDROID_XS = 'android-xs',
  IOS_XS = 'ios-xs',
  IOS_MD = 'ios-md',
  XXXL = 'xxxl',
  XXL = 'xxl',
  XL = 'xl',
  LG = 'lg',
  MD = 'md',
}