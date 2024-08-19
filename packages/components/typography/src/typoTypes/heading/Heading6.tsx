import type {
  TypographyProps,
  TypographyStyledProps,
} from '../../typography.types';
import getHeader from './typography.styles';
import { useResponsiveHeadingTypography } from '../../../../../react';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const Heading6 = ({
  styled,
  children,
  headingType = 'h6',
  ...props
}: TypographyProps): React.ReactNode => {
  const theme = useTheme();

  const getHeading6DefaultThemeValues: TypographyStyledProps = {
    fontSize: theme.typography.heading[headingType].mobile.fontSize,
    lineHeight: theme.typography.heading[headingType].mobile.lineHeight,
    fontWeight: theme.typography.heading[headingType].mobile.fontWeight,
    color: theme.colors.brand.black,
    fontFamily: theme.fontFamily.text,
  };

  const reponsiveStyle = useResponsiveHeadingTypography(headingType);

  const combinedStyles = {
    ...getHeading6DefaultThemeValues,
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
