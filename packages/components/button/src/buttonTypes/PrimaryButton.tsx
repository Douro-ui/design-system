import type { ButtonProps, ButtonStyledProps } from '../button.types';
import { ButtonStyled } from '../button.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const PrimaryButton = ({
  typeBtn,
  size,
  styled,
  children,
  onClick,
  disabled,
  ...props
}: ButtonProps): React.ReactNode => {
  const theme = useTheme();

  const getPrimaryButtonTypeDefaultThemeValues: ButtonStyledProps = {
    color: theme.colors.brand.white,
    backgroundColor: theme.colors.brand.primary,
    borderColor: 'transparent',
    colorHover: theme.colors.brand.black,
    backgroundColorHover: 'transparent',
    borderColorHover: theme.colors.brand.primary,
    backgroundColorActive: 'transparent',
    borderColorActive: 'transparent',
    colorDisabled: theme.colors.neutral.cold.shade70,
    backgroundColorDisabled: theme.colors.neutral.cold.shade95,
    borderColorDisabled: theme.colors.neutral.cold.shade70,
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getPrimaryButtonTypeDefaultThemeValues,
    styled,
  );

  return (
    <ButtonStyled
      typeBtn={'primary'}
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
