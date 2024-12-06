import type {
  TypographyProps,
  TypographyStyledProps,
} from '../../typography.types';
import { TypographyBodyStyled } from './typography.styles';
import { useResponsiveBodyTypography } from '../../hooks/useTypography';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const Body2 = ({
  styled,
  children,
  bodyType = 'body2',
  ...props
}: TypographyProps): React.ReactNode => {
  const theme = useTheme();

  const getBody2DefaultThemeValues: TypographyStyledProps = {
    fontSize: theme.typography.body[bodyType].mobile.fontSize,
    lineHeight: theme.typography.body[bodyType].mobile.lineHeight,
    fontWeight: theme.typography.body[bodyType].mobile.fontWeight,
    color: theme.colors.brand.primary,
    fontFamily: theme.fontFamily.text,
  };

  const reponsiveStyle = useResponsiveBodyTypography(bodyType);

  const combinedStyles = {
    ...getBody2DefaultThemeValues,
    ...reponsiveStyle,
  };

  const mergedThemeValues = deepMerge<TypographyStyledProps>(
    combinedStyles,
    styled,
  );

  return (
    <TypographyBodyStyled
      styled={mergedThemeValues as Required<TypographyStyledProps>}
      bodyType={bodyType}
      {...props}
    >
      {children}
    </TypographyBodyStyled>
  );
};
