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
} from './checkbox.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import Checkbox from './Checkbox';
import { Icon } from '@douro-ui/icon';

const CheckboxGroup = ({
  options,
  name,
  selectedValues = [],
  onChange,
  title,
  styled,
  error,
  errorIcon,
}: CheckboxGroupProps): React.ReactNode => {
  const theme = useTheme();

  const getDefaultThemeValues: CheckboxGroupStyledProps = {
    titleColor: theme.colors.brand.primary,
    errorColor: theme.colors.brand.quinary,
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
        >
          {title}
        </CheckboxGroupLabelStyled>
      )}
      {options.map((option: CheckboxProps) => (
        <Checkbox
          backgroundColor={option.backgroundColor}
          key={option.value}
          name={name}
          checked={selectedValues?.includes(option.value)}
          onChange={handleChange}
          disabled={option.disabled}
          indeterminate={option.indeterminate}
          size={option.size}
          {...option}
        />
      ))}
      {error && (
        <CheckboxGroupErrorStyled
          id={`${name}-error`}
          styled={mergedThemeValues as Required<CheckboxGroupStyledProps>}
        >
          {errorIcon || <Icon name="chevron-up" />}
          {error}
        </CheckboxGroupErrorStyled>
      )}
    </CheckboxGroupStyled>
  );
};

export default CheckboxGroup;
