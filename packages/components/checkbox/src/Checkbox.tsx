import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { deepMerge, useTheme } from '@douro-ui/react';
import type { CheckboxProps, CheckboxStyledProps } from './checkbox.types';
import { InputStyled, LabelStyled, CheckboxStyled } from './checkbox.styles';

const Checkbox = ({
  label,
  onChange,
  checked,
  name,
  styled,
  value,
  disabled,
  indeterminate,
  checkboxSize = 'md',
  ...props
}: CheckboxProps): React.ReactNode => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

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
    indeterminateBorderColor: theme.colors.brand.primary,
    indeterminateBackgroundColor: theme.colors.brand.primary,
    indeterminateBeforeBackgroundColor: theme.colors.brand.white,
    indeterminateHoverBorderColor: theme.colors.neutral.cold.shade40,
    indeterminateHoverBackgroundColor: theme.colors.neutral.cold.shade40,
    indeterminateHoverBeforeBackgroundColor: theme.colors.brand.white,
    disabledIndeterminateBorderColor: theme.colors.neutral.cold.shade70,
    disabledIndeterminateBackgroundColor: theme.colors.neutral.cold.shade70,
    disabledIndeterminateBeforeBackgroundColor:
      theme.colors.neutral.cold.shade70,
  };

  const mergedThemeValues = deepMerge<CheckboxStyledProps>(
    getDefaultThemeValues,
    styled,
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (indeterminate) return;
      onChange?.(event);
    },
    [disabled, indeterminate, onChange],
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate || false;
    }
  }, [indeterminate]);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (indeterminate) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <CheckboxStyled styled={mergedThemeValues as Required<CheckboxStyledProps>}>
      <label>
        <InputStyled
          ref={inputRef}
          type="checkbox"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          onClick={handleClick}
          disabled={disabled}
          data-indeterminate={indeterminate}
          styled={mergedThemeValues as Required<CheckboxStyledProps>}
          checkboxSize={checkboxSize}
          {...props}
        />
        <LabelStyled
          checkboxSize={checkboxSize}
          styled={mergedThemeValues as Required<CheckboxStyledProps>}
        >
          {label}
        </LabelStyled>
      </label>
    </CheckboxStyled>
  );
};

export default Checkbox;
