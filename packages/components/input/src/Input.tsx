import { InputProps, InputStyledProps } from './input.types';
import {
  InputContainerStyled,
  InputHolderStyled,
  InputLabelStyled,
  InputStyled,
} from './input.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

const Input = ({
  label,
  placeholder,
  disabled,
  styled,
  ...props
}: InputProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: InputStyledProps = {
    color: theme.colors.neutral.silver.shade40,
    colorActive: theme.colors.neutral.silver.shade10,
    backgroundColor: theme.colors.brand.white,
    borderColor: theme.colors.neutral.silver.shade50,
    borderColorHover: theme.colors.neutral.silver.shade30,
    borderColorActive: theme.colors.neutral.cold.shade10,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight.REGULAR,
  };

  const mergedThemeValues = deepMerge<InputStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <InputContainerStyled disabled={disabled}>
      {label && (
        <InputLabelStyled
          styled={mergedThemeValues as Required<InputStyledProps>}
        >
          {label}
        </InputLabelStyled>
      )}

      <InputHolderStyled
        styled={mergedThemeValues as Required<InputStyledProps>}
      >
        <InputStyled
          placeholder={placeholder}
          styled={mergedThemeValues as Required<InputStyledProps>}
          {...props}
        />
      </InputHolderStyled>
    </InputContainerStyled>
  );
};

export default Input;
