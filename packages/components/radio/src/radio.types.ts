import { InputHTMLAttributes } from 'react';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled'> {
  styled?: RadioStyledProps;
  checked?: boolean;
  label: string;
  value: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export interface RadioGroupProps {
  options: RadioProps[];
  name: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export interface RadioStyledProps {
  backgroundColor?: string;
  beforeBackgroundColor?: string;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  borderColor?: string;
  borderRadius?: string;
  checkedBackgroundColor?: string;
  checkedBorderColor?: string;
  checkedBeforeBorderColor?: string;
  disabledborderColor?: string;
  disabledColor?: string;
  hoverBorderColor?: string;
  hovercheckedBorderColor?: string;
  hovercheckedBackgroundColor?: string;
  activecheckedBorderColor?: string;
  activeBeforecheckedBackgroundColor?: string;
  disablecheckedBorderColor?: string;
  disabledBeforecheckedBackgroundColor?: string;
  disabledBeforecheckedBorderColor?: string;
}
