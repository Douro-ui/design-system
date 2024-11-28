import type {
  TypographyProps,
  TypographyStyledProps,
} from '../../typography.types';
import getDisplay from './typography.styles';
import { useResponsiveDisplayTypography } from '../../hooks/useTypography';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const Display8 = ({
  styled,
  children,
  displayType = 'display8',
  ...props
}: TypographyProps): React.ReactNode => {
  const theme = useTheme();

  const getDisplay8DefaultThemeValues: TypographyStyledProps = {
    fontSize: theme.typography.display[displayType].mobile.fontSize,
    lineHeight: theme.typography.display[displayType].mobile.lineHeight,
    fontWeight: theme.typography.display[displayType].mobile.fontWeight,
    color: theme.colors.brand.primary,
    fontFamily: theme.fontFamily.display,
  };

  const reponsiveStyle = useResponsiveDisplayTypography(displayType);

  const combinedStyles = {
    ...getDisplay8DefaultThemeValues,
    ...reponsiveStyle,
  };

  const mergedThemeValues = deepMerge<TypographyStyledProps>(
    combinedStyles,
    styled,
  );
  const DisplayStyled = getDisplay(displayType);

  return (
    <DisplayStyled
      styled={mergedThemeValues as Required<TypographyStyledProps>}
      {...props}
    >
      {children}
    </DisplayStyled>
  );
};
