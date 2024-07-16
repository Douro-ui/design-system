import React, { useCallback } from 'react';
import { CheckboxGroupProps, CheckboxOption } from './checkbox.types';
import {
  CheckboxGroupStyled,
  CheckboxContainerStyled,
} from './checkbox.styles';
import Checkbox from './Checkbox';

const CheckboxGroup = ({
  options,
  name,
  selectedValues = [],
  onChange,
}: CheckboxGroupProps): React.ReactNode => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      let newSelectedValues: string[];

      if (event.target.checked) {
        newSelectedValues = [...selectedValues, value];
      } else {
        newSelectedValues = selectedValues.filter(
          (selectedValue: string) => selectedValue !== value,
        );
      }

      onChange?.(newSelectedValues);
    },
    [onChange, selectedValues],
  );

  return (
    <CheckboxGroupStyled>
      {options.map((option: CheckboxOption) => (
        <CheckboxContainerStyled key={option.value}>
          <Checkbox
            {...option}
            backgroundColor={option.backgroundColor}
            label={option.label}
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={handleChange}
            disabled={option.disabled}
            isCircle={option.isCircle}
          />
        </CheckboxContainerStyled>
      ))}
    </CheckboxGroupStyled>
  );
};

export default CheckboxGroup;
