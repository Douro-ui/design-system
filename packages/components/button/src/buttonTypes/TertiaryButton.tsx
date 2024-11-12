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
  onKeyDown,
  iconBefore,
  iconAfter,
  'aria-label': ariaLabel,
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
    focusColor: theme.colors.brand.senary,
    borderRadius: '100px',
    activeFontWeight: theme.fontWeight.MEDIUM,
  };

  const mergedThemeValues = deepMerge<ButtonStyledProps>(
    getTertiaryButtonTypeDefaultThemeValues,
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
      typeBtn="tertiary"
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
