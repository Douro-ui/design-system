import type { CheckboxProps, CheckboxStyledProps } from './checkbox.types';
import { InputStyled, LabelStyled, CheckboxStyled } from './checkbox.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React, { ChangeEvent, useCallback } from 'react';

const Checkbox = ({
  label,
  onChange,
  checked,
  name,
  styled,
  value,
  disabled,
  indeterminate,
  size = 'lg',
  ...props
}: CheckboxProps): React.ReactNode => {
  const theme = useTheme();

  const getDefaultThemeValues: CheckboxStyledProps = {
    color: theme.colors.brand.primary,
    backgroundColor: theme.colors.brand.white,
    beforeBackgroundColor: theme.colors.brand.white,
    borderRadius: '0.125rem',
    borderColor: theme.colors.brand.septenary,
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.REGULAR,
    checkedBackgroundColor: theme.colors.brand.primary,
    checkedBorderColor: theme.colors.brand.primary,
    hoverBorderColor: theme.colors.brand.primary,
    hoverCheckedBackgroundColor: theme.colors.brand.white,
    hoverCheckedBorderColor: theme.colors.neutral.cold.shade40,
    activeCheckedBorderColor: theme.colors.brand.primary,
    activeBeforeCheckedBackgroundColor: theme.colors.brand.primary,
    disabledColor: theme.colors.neutral.cold.shade70,
    disabledBorderColor: theme.colors.neutral.cold.shade70,
    disableCheckedBorderColor: theme.colors.neutral.cold.shade70,
    disabledBeforeCheckedBackgroundColor: theme.colors.neutral.cold.shade70,
    disabledBeforeCheckedBorderColor: theme.colors.neutral.cold.shade70,
  };

  const mergedThemeValues = deepMerge<CheckboxStyledProps>(
    getDefaultThemeValues,
    styled,
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!disabled || !indeterminate) {
        onChange?.(event);
      }
    },
    [disabled, onChange],
  );

  return (
    <CheckboxStyled styled={mergedThemeValues as Required<CheckboxStyledProps>}>
      <label>
        <InputStyled
          type="checkbox"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          styled={mergedThemeValues as Required<CheckboxStyledProps>}
          disabled={disabled}
          //indeterminate={indeterminate}
          {...props}
        />
        <LabelStyled
          size={size}
          styled={mergedThemeValues as Required<CheckboxStyledProps>}
        >
          {label}
        </LabelStyled>
      </label>
    </CheckboxStyled>
  );
};

export default Checkbox;
