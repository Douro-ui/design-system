import type { CheckboxProps } from './checkbox.types';
import {
  InputStyled,
  LabelStyled,
  CheckboxContainerStyled,
} from './checkbox.styles';
import React, { useCallback } from 'react';

const Checkbox = ({
  backgroundColor,
  label,
  onChange,
  checked,
  name,
  value,
  disabled,
  isCircle,
  ...props
}: CheckboxProps): React.ReactNode => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange?.(event);
      }
    },
    [disabled, onChange],
  );

  return (
    <CheckboxContainerStyled backgroundColor={backgroundColor}>
      <label>
        <InputStyled
          {...props}
          type="checkbox"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          isCircle={isCircle}
        />
        <LabelStyled>{label}</LabelStyled>
      </label>
    </CheckboxContainerStyled>
  );
};

export default Checkbox;
