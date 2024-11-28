import emotionStyled from '@emotion/styled';
import {
  HeadingType,
  TypographyStyledComponent,
  TypographyStyledProps,
} from '../../typography.types';
import { useTheme } from '@douro-ui/react';
import React from 'react';

const headingTypeToTag: Record<HeadingType, keyof React.JSX.IntrinsicElements> =
  {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    heading7: 'h6',
    heading8: 'h6',
  };

const getTypographyHeadingStyles =
  (headingType: HeadingType) =>
  ({ styled }: { styled: Required<TypographyStyledProps> }) => {
    const theme = useTheme();
    return `
      margin: 0;
      text-align: start;
      color: ${styled.color};
      font-size: ${styled.fontSize};
      font-weight: ${styled.fontWeight};
      font-family: ${styled.fontFamily};
      line-height: ${styled.lineHeight};

      @media (min-width: ${theme.breakpoints.tablet}px) {
        font-size: ${theme.typography.heading[headingType].tablet.fontSize || styled.fontSize};
        font-weight: ${theme.typography.heading[headingType].tablet.fontWeight || styled.fontWeight};
        line-height: ${theme.typography.heading[headingType].tablet.lineHeight || styled.lineHeight};
      }

      @media (min-width: ${theme.breakpoints.desktop}px) {
        font-size: ${theme.typography.heading[headingType].desktop.fontSize || styled.fontSize};
        font-weight: ${theme.typography.heading[headingType].desktop.fontWeight || styled.fontWeight};
        line-height: ${theme.typography.heading[headingType].desktop.lineHeight || styled.lineHeight};
      }

      @media (min-width: ${theme.breakpoints.desktopLarge}px) {
        font-size: ${theme.typography.heading[headingType].desktopLarge.fontSize || styled.fontSize};
        font-weight: ${theme.typography.heading[headingType].desktopLarge.fontWeight || styled.fontWeight};
        line-height: ${theme.typography.heading[headingType].desktopLarge.lineHeight || styled.lineHeight};
      }
    `;
  };

const getHeader = (headingType: HeadingType): TypographyStyledComponent => {
  const tag = headingTypeToTag[
    headingType
  ] as keyof React.JSX.IntrinsicElements;

  const Header = emotionStyled(tag)<{
    styled: Required<TypographyStyledProps>;
  }>`
    ${({ styled }) => getTypographyHeadingStyles(headingType)({ styled })}
  `;

  return Header as TypographyStyledComponent;
};

export default getHeader;
