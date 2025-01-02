import type {
  TypographyProps,
  TypographyStyledProps,
} from '../../typography.types';
import { useResponsiveDisplayTypography } from '../../hooks/useTypography';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';
import getDisplay from './typography.styles';

export const Display4 = ({
  styled,
  children,
  displayType = 'display4',
  ...props
}: TypographyProps): React.ReactNode => {
  const theme = useTheme();

  const getDisplay4DefaultThemeValues: TypographyStyledProps = {
    fontSize: theme.typography.display[displayType].mobile.fontSize,
    lineHeight: theme.typography.display[displayType].mobile.lineHeight,
    fontWeight: theme.typography.display[displayType].mobile.fontWeight,
    color: theme.colors.brand.primary,
    fontFamily: theme.fontFamily.display,
  };

  const reponsiveStyle = useResponsiveDisplayTypography(displayType);

  const combinedStyles = {
    ...getDisplay4DefaultThemeValues,
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
