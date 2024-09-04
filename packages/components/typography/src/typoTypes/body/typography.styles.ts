import styled from '@emotion/styled';
import { BodyType, TypographyStyledProps } from '../../typography.types';
import { useTheme } from '@douro-ui/react';

const getTypographyBodyStyles =
  (bodyType: BodyType) =>
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
      font-size: ${theme.typography.body[bodyType].tablet.fontSize || styled.fontSize};
      font-weight: ${theme.typography.body[bodyType].tablet.fontWeight || styled.fontWeight};
      line-height: ${theme.typography.body[bodyType].tablet.lineHeight || styled.lineHeight};
    }

    @media (min-width: ${theme.breakpoints.desktop}px) {
      font-size: ${theme.typography.body[bodyType].desktop.fontSize || styled.fontSize};
      font-weight: ${theme.typography.body[bodyType].desktop.fontWeight || styled.fontWeight};
      line-height: ${theme.typography.body[bodyType].desktop.lineHeight || styled.lineHeight};
    }

    @media (min-width: ${theme.breakpoints.desktopLarge}px) {
      font-size: ${theme.typography.body[bodyType].desktopLarge.fontSize || styled.fontSize};
      font-weight: ${theme.typography.body[bodyType].desktopLarge.fontWeight || styled.fontWeight};
      line-height: ${theme.typography.body[bodyType].desktopLarge.lineHeight || styled.lineHeight};
    }
  `;
  };

export const TypographyBodyStyled = styled.p<{
  styled: Required<TypographyStyledProps>;
  bodyType: BodyType;
}>`
  ${({ styled, bodyType }) => getTypographyBodyStyles(bodyType)({ styled })}
`;
