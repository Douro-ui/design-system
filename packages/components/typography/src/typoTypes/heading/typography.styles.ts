import emotionStyled from '@emotion/styled';
import {
  HeadingType,
  TypographyStyledComponent,
  TypographyStyledProps,
} from '../../typography.types';
import { useTheme } from '@douro-ui/react';

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
  return emotionStyled(headingType)<{
    styled: Required<TypographyStyledProps>;
  }>`
    ${({ styled }) => getTypographyHeadingStyles(headingType)({ styled })}
  `;
};

export default getHeader;
