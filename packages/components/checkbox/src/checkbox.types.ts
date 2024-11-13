import { InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled'> {
  size?: 'sm' | 'md' | 'lg';
  backgroundColor?: string;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  styled?: CheckboxStyledProps;
}

export interface CheckboxGroupProps {
  options: CheckboxProps[];
  name: string;
  selectedValues?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: string;
}

export interface CheckboxStyledProps {
  backgroundColor?: string;
  beforeBackgroundColor?: string;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  borderColor?: string;
  borderRadius?: string;
  checkedBackgroundColor?: string;
  checkedBorderColor?: string;
  disabledBorderColor?: string;
  disabledColor?: string;
  hoverBorderColor?: string;
  hoverCheckedBorderColor?: string;
  hoverCheckedBackgroundColor?: string;
  activeCheckedBorderColor?: string;
  activeBeforeCheckedBackgroundColor?: string;
  disableCheckedBorderColor?: string;
  disabledBeforeCheckedBackgroundColor?: string;
  disabledBeforeCheckedBorderColor?: string;
}
