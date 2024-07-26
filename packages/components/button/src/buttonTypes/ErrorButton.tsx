import type { ButtonProps, ButtonStyledProps } from '../button.types';
import { ButtonStyled } from '../button.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const ErrorButton = ({
  typeBtn,
  size,
  children,
  styled,
  onClick,
  disabled,
  ...props
}: ButtonProps): React.ReactNode => {
  const theme = useTheme();

  const getErrorButtonTypeDefaultThemeValues: ButtonStyledProps = {
    color: theme.colors.brand.white,
    backgroundColor: theme.colors.extended.red.shade50,
    colorHover: theme.colors.brand.white,
    borderColor: theme.colors.extended.red.shade50,
    backgroundColorDisabled: theme.colors.neutral.cold.shade95,
    colorDisabled: theme.colors.neutral.cold.shade70,
    borderRadius: '100px',
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getErrorButtonTypeDefaultThemeValues,
    styled,
  );

  return (
    <ButtonStyled
      typeBtn={'error'}
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
