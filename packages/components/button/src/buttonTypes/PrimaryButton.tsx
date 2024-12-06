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
  onKeyDown,
  iconBefore,
  iconAfter,
  disabled,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps): React.ReactNode => {
  const theme = useTheme();

  const getPrimaryButtonTypeDefaultThemeValues: ButtonStyledProps = {
    color: theme.colors.brand.white,
    backgroundColor: theme.colors.brand.primary,
    borderColor: 'transparent',
    colorHover: theme.colors.brand.primary,
    backgroundColorHover: 'transparent',
    borderColorHover: theme.colors.brand.primary,
    backgroundColorActive: 'transparent',
    borderColorActive: 'transparent',
    colorActive: theme.colors.brand.primary,
    colorDisabled: theme.colors.neutral.cold.shade70,
    focusColor: theme.colors.brand.senary,
    backgroundColorDisabled: theme.colors.neutral.cold.shade95,
    borderColorDisabled: theme.colors.neutral.cold.shade70,
    borderRadius: '100px',
    activeFontWeight: theme.fontWeight.MEDIUM,
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getPrimaryButtonTypeDefaultThemeValues,
    styled,
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;

    if (event.key === 'Enter' && !disabled) {
      button.classList.add('is-active');
      setTimeout(() => button.classList.remove('is-active'), 300);
      onClick?.();
    }

    if (event.key === ' ' && !disabled) {
      onClick?.();
    }

    onKeyDown?.();
  };

  return (
    <ButtonStyled
      typeBtn="primary"
      size={size}
      styled={mergedThemeValues as Required<ButtonStyledProps>}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      hasIconBefore={!!iconBefore}
      hasIconAfter={!!iconAfter}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
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
