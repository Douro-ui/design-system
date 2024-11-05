import type { ButtonProps, ButtonStyledProps } from '../button.types';
import { ButtonStyled, IconStyled } from '../button.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const ErrorButton = ({
  typeBtn,
  size,
  children,
  styled,
  onClick,
  iconBefore,
  iconAfter,
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
    activeFontWeight: theme.fontWeight.MEDIUM,
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getErrorButtonTypeDefaultThemeValues,
    styled,
  );

  return (
    <ButtonStyled
      typeBtn="error"
      size={size}
      styled={mergedThemeValues as Required<ButtonStyledProps>}
      onClick={onClick}
      disabled={disabled}
      hasIconBefore={iconBefore ? true : false}
      hasIconAfter={iconAfter ? true : false}
      data-testid={`button-${typeBtn}`}
      {...props}
    >
      {iconBefore && (
        <IconStyled
          size={size}
          styled={mergedThemeValues as Required<ButtonStyledProps>}
        >
          {iconBefore()}
        </IconStyled>
      )}
      {children}
      {iconAfter && (
        <IconStyled
          size={size}
          styled={mergedThemeValues as Required<ButtonStyledProps>}
        >
          {iconAfter()}
        </IconStyled>
      )}{' '}
    </ButtonStyled>
  );
};
