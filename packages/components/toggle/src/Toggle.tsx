import type { ToggleProps } from './toggle.types';
import {
  ToggleStyled,
  ToggleContainerStyled,
  SpanStyled,
  InputStyled,
} from './toggle.styles';
import { useTheme } from '@douro-ui/react';
import React, { ChangeEvent } from 'react';

const Toggle = ({
  disabled,
  checked,
  onChange,
  onToggleChange,
  ...props
}: ToggleProps & {
  onToggleChange?: (checked: boolean) => void;
}): React.ReactNode => {
  const theme = useTheme();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(event);
      onToggleChange?.(event.target.checked);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      onToggleChange?.(!checked);
    }
  };

  return (
    <ToggleContainerStyled className={disabled ? 'disabled' : ''}>
      <ToggleStyled onClick={handleClick} {...props}>
        <InputStyled
          styledColor={theme.colors.extended.blue.shade50}
          styledColorHover={theme.colors.extended.blue.shade40}
          styledColorActive={theme.colors.extended.blue.shade30}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <SpanStyled
          styledColorBackground={theme.colors.neutral.silver.shade50}
          styledColorBackgroundHover={theme.colors.neutral.silver.shade40}
        />
      </ToggleStyled>
      <span>{props.children}</span>
    </ToggleContainerStyled>
  );
};

export default Toggle;
