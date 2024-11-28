import type {
  TypographyProps,
  TypographyStyledProps,
} from '../../typography.types';
import getHeader from './typography.styles';
import { useResponsiveHeadingTypography } from '../../hooks/useTypography';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const Heading8 = ({
  styled,
  children,
  headingType = 'heading8',
  ...props
}: TypographyProps): React.ReactNode => {
  const theme = useTheme();

  const getHeading8DefaultThemeValues: TypographyStyledProps = {
    fontSize: theme.typography.heading[headingType].mobile.fontSize,
    lineHeight: theme.typography.heading[headingType].mobile.lineHeight,
    fontWeight: theme.typography.heading[headingType].mobile.fontWeight,
    color: theme.colors.brand.primary,
    fontFamily: theme.fontFamily.text,
  };

  const reponsiveStyle = useResponsiveHeadingTypography(headingType);

  const combinedStyles = {
    ...getHeading8DefaultThemeValues,
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
