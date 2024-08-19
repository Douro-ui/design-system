import type {
  TypographyProps,
  TypographyStyledProps,
} from '../../typography.types';
import getDisplay from './typography.styles';
import { useResponsiveDisplayTypography } from '../../../../../react';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const Display1 = ({
  styled,
  children,
  displayType = 'display1',
  ...props
}: TypographyProps): React.ReactNode => {
  const theme = useTheme();

  const getDisplay1DefaultThemeValues: TypographyStyledProps = {
    fontSize: theme.typography.display[displayType].mobile.fontSize,
    lineHeight: theme.typography.display[displayType].mobile.lineHeight,
    fontWeight: theme.typography.display[displayType].mobile.fontWeight,
    color: theme.colors.brand.black,
    fontFamily: theme.fontFamily.display,
  };

  const reponsiveStyle = useResponsiveDisplayTypography(displayType);

  const combinedStyles = {
    ...getDisplay1DefaultThemeValues,
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
