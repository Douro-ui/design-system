import React, { ChangeEvent, useCallback } from 'react';
import {
  CheckboxGroupProps,
  CheckboxProps,
  CheckboxGroupStyledProps,
} from './checkbox.types';
import {
  CheckboxGroupStyled,
  CheckboxGroupLabelStyled,
  CheckboxGroupErrorStyled,
  IconContainer,
} from './checkbox.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import Checkbox from './Checkbox';

const CheckboxGroup = ({
  options,
  name,
  selectedValues = [],
  onChange,
  title,
  styled,
  error,
  errorIcon,
  checkboxSize = 'md',
}: CheckboxGroupProps): React.ReactNode => {
  const theme = useTheme();

  const getDefaultThemeValues: CheckboxGroupStyledProps = {
    titleColor: theme.colors.brand.primary,
    errorColor: theme.colors.extended.red.shade50,
    errorIconColor: theme.colors.extended.red.shade50,
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.BOLD,
  };

  const mergedThemeValues = deepMerge<CheckboxGroupStyledProps>(
    getDefaultThemeValues,
    styled,
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange?.(value);
    },
    [onChange],
  );

  return (
    <CheckboxGroupStyled aria-describedby={error ? `${name}-error` : undefined}>
      {title && (
        <CheckboxGroupLabelStyled
          styled={mergedThemeValues as Required<CheckboxGroupStyledProps>}
          checkboxSize={checkboxSize}
        >
          {title}
        </CheckboxGroupLabelStyled>
      )}

      {options.map((option: CheckboxProps) => (
        <Checkbox
          key={option.value}
          name={name}
          checkboxSize={option.checkboxSize ?? checkboxSize}
          label={option.label}
          value={option.value}
          backgroundColor={option.backgroundColor}
          checked={selectedValues.includes(option.value)}
          disabled={option.disabled}
          indeterminate={option.indeterminate}
          onChange={handleChange}
          styled={option.styled}
        />
      ))}

      {error && (
        <CheckboxGroupErrorStyled
          id={`${name}-error`}
          styled={mergedThemeValues as Required<CheckboxGroupStyledProps>}
          checkboxSize={checkboxSize}
        >
          <IconContainer
            styled={mergedThemeValues as Required<CheckboxGroupStyledProps>}
          >
            {errorIcon}
          </IconContainer>
          {error}
        </CheckboxGroupErrorStyled>
      )}
    </CheckboxGroupStyled>
  );
};

export default CheckboxGroup;
