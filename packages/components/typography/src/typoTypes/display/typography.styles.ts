import emotionStyled from '@emotion/styled';
import {
  DisplayType,
  TypographyStyledComponent,
  TypographyStyledProps,
  displayTypeToTag,
} from '../../typography.types';
import { useTheme } from '@douro-ui/react';
import React from 'react';

const getTypographyDisplayStyles =
  (displayType: DisplayType) =>
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
      font-size: ${theme.typography.display[displayType].tablet.fontSize || styled.fontSize};
      font-weight: ${theme.typography.display[displayType].tablet.fontWeight || styled.fontWeight};
      line-height: ${theme.typography.display[displayType].tablet.lineHeight || styled.lineHeight};
    }

    @media (min-width: ${theme.breakpoints.desktop}px) {
      font-size: ${theme.typography.display[displayType].desktop.fontSize || styled.fontSize};
      font-weight: ${theme.typography.display[displayType].desktop.fontWeight || styled.fontWeight};
      line-height: ${theme.typography.display[displayType].desktop.lineHeight || styled.lineHeight};
    }

    @media (min-width: ${theme.breakpoints.desktopLarge}px) {
      font-size: ${theme.typography.display[displayType].desktopLarge.fontSize || styled.fontSize};
      font-weight: ${theme.typography.display[displayType].desktopLarge.fontWeight || styled.fontWeight};
      line-height: ${theme.typography.display[displayType].desktopLarge.lineHeight || styled.lineHeight};
    }
  `;
  };

const getDisplay = (displayType: DisplayType): TypographyStyledComponent => {
  const tag = displayTypeToTag[
    displayType
  ] as keyof React.JSX.IntrinsicElements;

  const Display = emotionStyled(tag)<{
    styled: Required<TypographyStyledProps>;
  }>`
      ${({ styled }) => getTypographyDisplayStyles(displayType)({ styled })}
    `;

  return Display as TypographyStyledComponent;
};

export default getDisplay;
