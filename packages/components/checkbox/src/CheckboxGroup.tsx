import React, { ChangeEvent, useCallback } from 'react';
import { CheckboxGroupProps, CheckboxProps } from './checkbox.types';
import { CheckboxGroupStyled } from './checkbox.styles';
import Checkbox from './Checkbox';

const CheckboxGroup = ({
  options,
  name,
  selectedValues,
  onChange,
}: CheckboxGroupProps): React.ReactNode => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange?.(value);
    },
    [onChange],
  );

  return (
    <CheckboxGroupStyled>
      {options.map((option: CheckboxProps) => (
        <Checkbox
          {...option}
          backgroundColor={option.backgroundColor}
          label={option.label}
          key={option.value}
          name={name}
          value={option.value}
          checked={selectedValues === option.value}
          onChange={handleChange}
          disabled={option.disabled}
          indeterminate={option.indeterminate}
          size={option.size}
        />
      ))}
    </CheckboxGroupStyled>
  );
};

export default CheckboxGroup;
