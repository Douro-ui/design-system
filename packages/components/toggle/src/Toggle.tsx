import type {
  InputStyledProps,
  SpanStyledProps,
  ToggleProps,
} from './toggle.types';
import {
  ToggleStyled,
  ToggleContainerStyled,
  SpanStyled,
  InputStyled,
} from './toggle.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React, { ChangeEvent } from 'react';

const Toggle = ({
  disabled,
  checked,
  onChange,
  onToggleChange,
  styled,
  ...props
}: ToggleProps & {
  onToggleChange?: (checked: boolean) => void;
}): React.ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: InputStyledProps & SpanStyledProps = {
    styledColorBackground: theme.colors.neutral.silver.shade50,
    styledColorBackgroundHover: theme.colors.neutral.silver.shade40,
    styledColor: theme.colors.extended.blue.shade50,
    styledColorHover: theme.colors.extended.blue.shade40,
    styledColorActive: theme.colors.extended.blue.shade30,
  };

  const mergedThemeValues = deepMerge<InputStyledProps & SpanStyledProps>(
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
          {...mergedThemeValues}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <SpanStyled {...mergedThemeValues} />
      </ToggleStyled>
      <span>{props.children}</span>
    </ToggleContainerStyled>
  );
};

export default Toggle;
