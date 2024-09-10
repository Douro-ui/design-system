import type {
  TypographyProps,
  TypographyStyledProps,
} from '../../typography.types';
import { useResponsiveHeadingTypography } from '../../hooks/useTypography';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';
import getHeader from './typography.styles';

export const Heading4 = ({
  styled,
  children,
  headingType = 'h4',
  ...props
}: TypographyProps): React.ReactNode => {
  const theme = useTheme();

  const getHeading4DefaultThemeValues: TypographyStyledProps = {
    fontSize: theme.typography.heading[headingType].mobile.fontSize,
    lineHeight: theme.typography.heading[headingType].mobile.lineHeight,
    fontWeight: theme.typography.heading[headingType].mobile.fontWeight,
    color: theme.colors.brand.black,
    fontFamily: theme.fontFamily.text,
  };

  const reponsiveStyle = useResponsiveHeadingTypography(headingType);

  const combinedStyles = {
    ...getHeading4DefaultThemeValues,
    ...reponsiveStyle,
  };

  const mergedThemeValues = deepMerge<TypographyStyledProps>(
    combinedStyles,
    styled,
  );

  const HeadingStyled = getHeader(headingType);

  return (
    <HeadingStyled
      styled={mergedThemeValues as Required<TypographyStyledProps>}
      {...props}
    >
      {children}
    </HeadingStyled>
  );
};
