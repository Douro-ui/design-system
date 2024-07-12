import React, { ChangeEvent, useCallback } from 'react';
import { RadioGroupProps, RadioOption } from './radio.types';
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
      {options.map((option: RadioOption) => (
        <Radio
          {...option}
          key={option.value}
          backgroundColor={option.backgroundColor}
          label={option.label}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={handleChange}
          disabled={option.disabled}
        />
      ))}
    </RadioGroupStyled>
  );
};

export default RadioGroup;
