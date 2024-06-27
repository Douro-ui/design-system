import type { RadioProps } from './radio.types';
import { InputStyled, LabelStyled, RadioStyled } from './radio.styles';
import { useCallback } from 'react';

const Radio = ({
  backgroundColor,
  label,
  onChange,
  checked,
  name,
  value,
  disabled,
  ...props
}: RadioProps) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
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
