import { InputHTMLAttributes, ReactElement } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled'> {
  checkboxSize?: 'sm' | 'md' | 'lg';
  backgroundColor?: string;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  styled?: CheckboxStyledProps;
}

export interface CheckboxGroupProps {
  checkboxSize?: 'sm' | 'md' | 'lg';
  options: CheckboxProps[];
  name: string;
  title?: string;
  selectedValues?: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  error?: string;
  errorIcon?: ReactElement;
  styled?: CheckboxGroupStyledProps;
}

export interface CheckboxGroupStyledProps {
  titleColor?: string;
  errorColor?: string;
  errorIconColor?: string;
  fontFamily?: string;
  fontWeight?: number;
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
  indeterminateBorderColor: string;
  indeterminateBackgroundColor: string;
  indeterminateBeforeBackgroundColor: string;
  indeterminateHoverBorderColor: string;
  indeterminateHoverBackgroundColor: string;
  indeterminateHoverBeforeBackgroundColor: string;
  disabledIndeterminateBorderColor: string;
  disabledIndeterminateBackgroundColor: string;
  disabledIndeterminateBeforeBackgroundColor: string;
}
