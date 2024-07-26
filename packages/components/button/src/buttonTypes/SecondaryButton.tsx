import type { ButtonProps, ButtonStyledProps } from '../button.types';
import { ButtonStyled } from '../button.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const SecondaryButton = ({
  typeBtn,
  size,
  children,
  styled,
  onClick,
  disabled,
  ...props
}: ButtonProps): React.ReactNode => {
  const theme = useTheme();

  const getSecondaryButtonTypeDefaultThemeValues: ButtonStyledProps = {
    color: theme.colors.brand.primary,
    backgroundColor: 'transparent',
    colorHover: theme.colors.brand.white,
    borderColor: theme.colors.brand.primary,
    borderColorHover: 'transparent',
    backgroundColorHover: theme.colors.brand.primary,
    backgroundColorActive: 'transparent',
    backgroundColorDisabled: 'transparent',
    colorActive: theme.colors.brand.primary,
    colorDisabled: theme.colors.neutral.cold.shade70,
    borderColorActive: 'transparent',
    borderColorDisabled: theme.colors.neutral.cold.shade70,
    borderRadius: '100px',
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getSecondaryButtonTypeDefaultThemeValues,
    styled,
  );

  return (
    <ButtonStyled
      typeBtn={'secondary'}
      size={size}
      styled={mergedThemeValues}
      onClick={onClick}
      disabled={disabled}
      data-testid={`button-${typeBtn}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};
