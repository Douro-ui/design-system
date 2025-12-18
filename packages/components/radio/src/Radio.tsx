import type { RadioProps, RadioStyledProps } from './radio.types';
import { InputStyled, LabelStyled, RadioStyled } from './radio.styles';
import React, { ChangeEvent, useCallback } from 'react';
import { deepMerge, useTheme } from '@douro-ui/react';

const Radio = ({
  label,
  onChange,
  checked,
  name,
  value,
  disabled,
  styled,
  size = 'lg',
  ...props
}: RadioProps): React.ReactNode => {
  const theme = useTheme();

  const getDefaultThemeValues: RadioStyledProps = {
    color: theme.colors.brand.primary,
    backgroundColor: theme.colors.brand.white,
    beforeBackgroundColor: theme.colors.brand.primary,
    borderRadius: '100px',
    borderColor: theme.colors.brand.septenary,
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.REGULAR,
    checkedBackgroundColor: theme.colors.brand.white,
    checkedBorderColor: theme.colors.brand.primary,
    checkedBeforeBorderColor: theme.colors.brand.primary,
    hoverBorderColor: theme.colors.brand.primary,
    hovercheckedBackgroundColor: theme.colors.brand.white,
    hovercheckedBorderColor: theme.colors.brand.primary,
    activecheckedBorderColor: theme.colors.brand.primary,
    activeBeforecheckedBackgroundColor: theme.colors.brand.primary,
    disabledColor: theme.colors.neutral.cold.shade70,
    disabledborderColor: theme.colors.neutral.cold.shade70,
    disablecheckedBorderColor: theme.colors.neutral.cold.shade70,
    disabledBeforecheckedBackgroundColor: theme.colors.neutral.cold.shade70,
    disabledBeforecheckedBorderColor: theme.colors.neutral.cold.shade70,
  };

  const mergedThemeValues = deepMerge<RadioStyledProps>(
    getDefaultThemeValues,
    styled,
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange?.(event);
      }
    },
    [disabled, onChange],
  );

  return (
    <RadioStyled styled={mergedThemeValues as Required<RadioStyledProps>}>
      <label htmlFor={value}>
        <InputStyled
          type="radio"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          styled={mergedThemeValues as Required<RadioStyledProps>}
          disabled={disabled}
          {...props}
        />
        <LabelStyled
          size={size}
          styled={mergedThemeValues as Required<RadioStyledProps>}
        >
          {label}
        </LabelStyled>
      </label>
    </RadioStyled>
  );
};
export default Radio;
