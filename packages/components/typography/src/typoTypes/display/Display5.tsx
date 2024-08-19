import type {
  TypographyProps,
  TypographyStyledProps,
} from '../../typography.types';
import getDisplay from './typography.styles';
import { useResponsiveDisplayTypography } from '../../../../../react';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const Display5 = ({
  styled,
  children,
  displayType = 'display5',
  ...props
}: TypographyProps): React.ReactNode => {
  const theme = useTheme();

  const getDisplay5DefaultThemeValues: TypographyStyledProps = {
    fontSize: theme.typography.display[displayType].mobile.fontSize,
    lineHeight: theme.typography.display[displayType].mobile.lineHeight,
    fontWeight: theme.typography.display[displayType].mobile.fontWeight,
    color: theme.colors.brand.black,
    fontFamily: theme.fontFamily.display,
  };

  const reponsiveStyle = useResponsiveDisplayTypography(displayType);

  const combinedStyles = {
    ...getDisplay5DefaultThemeValues,
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
