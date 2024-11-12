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
  onKeyDown,
  iconBefore,
  iconAfter,
  'aria-label': ariaLabel,
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
    focusColor: theme.colors.brand.senary,
    borderRadius: '100px',
    activeFontWeight: theme.fontWeight.MEDIUM,
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getErrorButtonTypeDefaultThemeValues,
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
      typeBtn="error"
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
      )}{' '}
    </ButtonStyled>
  );
};
