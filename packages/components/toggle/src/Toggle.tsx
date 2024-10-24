import type { ToggleStyledProps, ToggleProps } from './toggle.types';
import {
  ToggleStyled,
  ToggleContainerStyled,
  SpanStyled,
  InputStyled,
  CircleStyled,
  IconStyled,
} from './toggle.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React, { ChangeEvent } from 'react';
const Toggle = ({
  disabled,
  checked,
  label,
  onChange,
  onToggleChange,
  styled,
  size = 'lg',
  icon,
  ...props
}: ToggleProps & {
  onToggleChange?: (checked: boolean) => void;
}): React.ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: ToggleStyledProps = {
    backgroundColor: theme.colors.neutral.silver.shade80,
    backgroundColorHover: theme.colors.neutral.silver.shade70,
    backgroundColorDisabled: theme.colors.neutral.cold.shade90,
    circleBackgroundColor: theme.colors.brand.white,
    color: theme.colors.brand.primary,
    colorHover: theme.colors.brand.tertiary,
    colorActive: theme.colors.extended.blue.shade30,
    iconColor: theme.colors.brand.primary,
    iconColorDisabled: theme.colors.neutral.cold.shade90,
  };

  const mergedThemeValues = deepMerge<ToggleStyledProps>(
    defaultThemeValues,
    styled,
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(event);
      onToggleChange?.(event.target.checked);
    }
  };

  return (
    <ToggleContainerStyled disabled={disabled}>
      <ToggleStyled {...props}>
        <InputStyled
          styled={mergedThemeValues as Required<ToggleStyledProps>}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          reSize={size}
          aria-checked={checked}
          aria-disabled={disabled}
          aria-label={label || 'Toggle switch'}
        />
        <SpanStyled
          size={size}
          disabled={disabled}
          styled={mergedThemeValues as Required<ToggleStyledProps>}
        >
          <CircleStyled
            size={size}
            styled={mergedThemeValues as Required<ToggleStyledProps>}
            disabled={disabled}
            checked={checked}
          >
            {icon && (
              <IconStyled
                data-testid={'icon'}
                icon
                checked
                disabled
                styled={mergedThemeValues as Required<ToggleStyledProps>}
              >
                {icon()}
              </IconStyled>
            )}
          </CircleStyled>{' '}
        </SpanStyled>
      </ToggleStyled>
    </ToggleContainerStyled>
  );
};

export default Toggle;
