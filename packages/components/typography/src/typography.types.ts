import {
  TypographyBreakpoints,
  TypographyStyle,
} from '@douro-ui/react/src/theme/theme.types';
import { HTMLAttributes } from 'react';
import { StyledComponent } from '@emotion/styled';
import React from 'react';
import { Breakpoints } from '@douro-ui/react/src/theme/theme.constants';

export interface TypographyStyledProps {
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: string;
  breakpoints?: TypographyBreakpoints;
}

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  styled?: TypographyStyledProps;
  displayType?: DisplayType;
  bodyType?: BodyType;
  headingType?: HeadingType;
}

export type DisplayType =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'display4'
  | 'display5'
  | 'display6';

export type BodyType =
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TypographyStyledComponent = StyledComponent<
  {
    styled: Required<TypographyStyledProps>;
  },
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>;

export const displayToHeadingTag: Record<DisplayType, HeadingType> = {
  display1: 'h1',
  display2: 'h2',
  display3: 'h3',
  display4: 'h4',
  display5: 'h5',
  display6: 'h6',
};

export type TypographyType = Record<Breakpoints, TypographyStyle>;
