import type { RadioProps } from './radio.types';
import { InputStyled, LabelStyled, RadioStyled } from './radio.styles';
import { ChangeEvent, FC, useCallback } from 'react';

const Radio: FC<RadioProps> = ({
  backgroundColor,
  label,
  onChange,
  checked,
  name,
  value,
  disabled,
  ...props
}) => {
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
          {...props}
          type="radio"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <LabelStyled>{label}</LabelStyled>
      </label>
    </RadioStyled>
  );
};
export default Radio;
