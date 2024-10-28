import type { ButtonProps, ButtonStyledProps } from '../button.types';
import { ButtonStyled, IconStyled } from '../button.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const TertiaryButton = ({
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

  const getTertiaryButtonTypeDefaultThemeValues: ButtonStyledProps = {
    color: theme.colors.brand.primary,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    backgroundColorActive: 'transparent',
    colorHover: theme.colors.brand.black,
    backgroundColorHover: theme.colors.neutral.cold.shade95,
    backgroundColorDisabled: 'transparent',
    borderColorActive: 'transparent',
    colorDisabled: theme.colors.neutral.cold.shade70,
    borderRadius: '100px',
    activeFontWeight: theme.fontWeight.MEDIUM,
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getTertiaryButtonTypeDefaultThemeValues,
    styled,
  );

  return (
    <ButtonStyled
      typeBtn="tertiary"
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
