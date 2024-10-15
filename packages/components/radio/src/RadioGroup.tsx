import React, { ChangeEvent, useCallback } from 'react';
import { RadioGroupProps, RadioProps } from './radio.types';
import { RadioGroupStyled } from './radio.styles';
import Radio from './Radio';

const RadioGroup = ({
  options,
  name,
  selectedValue,
  onChange,
}: RadioGroupProps): React.ReactNode => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange?.(value);
    },
    [onChange],
  );

  return (
    <RadioGroupStyled>
      {options.map((option: RadioProps) => (
        <Radio
          {...option}
          key={option.value}
          label={option.label}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={handleChange}
          disabled={option.disabled}
          size={option.size}
        />
      ))}
    </RadioGroupStyled>
  );
};

export default RadioGroup;
