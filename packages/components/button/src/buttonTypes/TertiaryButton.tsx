import type { ButtonProps, ButtonStyledProps } from '../button.types';
import { ButtonStyled } from '../button.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const TertiaryButton = ({
  typeBtn,
  size,
  children,
  styled,
  onClick,
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
    backgroundColorDisabled: theme.colors.neutral.cold.shade95,
    borderColorActive: 'transparent',
    colorDisabled: theme.colors.neutral.cold.shade70,
    borderRadius: '100px',
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
      data-testid={`button-${typeBtn}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};
