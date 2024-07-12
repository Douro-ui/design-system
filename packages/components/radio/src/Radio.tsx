import type { RadioProps } from './radio.types';
import { InputStyled, LabelStyled, RadioStyled } from './radio.styles';
import React, { ChangeEvent, useCallback } from 'react';

const Radio = ({
  backgroundColor,
  label,
  onChange,
  checked,
  name,
  value,
  disabled,
  ...props
}: RadioProps): React.ReactNode => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange?.(event);
      }
    },
    [disabled, onChange],
  );

  return (
    <RadioStyled backgroundColor={backgroundColor}>
      <label>
        <InputStyled
          type="radio"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <LabelStyled>{label}</LabelStyled>
      </label>
    </RadioStyled>
  );
};
export default Radio;
