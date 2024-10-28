import type { ButtonProps, ButtonStyledProps } from '../button.types';
import { ButtonStyled, IconStyled } from '../button.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const SecondaryButton = ({
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
    activeFontWeight: theme.fontWeight.MEDIUM,
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getSecondaryButtonTypeDefaultThemeValues,
    styled,
  );

  return (
    <ButtonStyled
      typeBtn="secondary"
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
