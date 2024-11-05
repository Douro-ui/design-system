import type { ButtonProps, ButtonStyledProps } from '../button.types';
import { ButtonStyled, IconStyled } from '../button.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const PrimaryButton = ({
  typeBtn,
  size,
  styled,
  children,
  onClick,
  iconBefore,
  iconAfter,
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
    borderRadius: '100px',
    activeFontWeight: theme.fontWeight.MEDIUM,
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getPrimaryButtonTypeDefaultThemeValues,
    styled,
  );

  return (
    <ButtonStyled
      typeBtn="primary"
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
      )}
    </ButtonStyled>
  );
};
