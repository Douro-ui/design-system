import { HTMLAttributes, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  label: string;
  value: string;
  checked?: boolean;
  isCircle?: boolean;
}

export interface CheckboxOption extends HTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  label: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  isCircle?: boolean;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  name: string;
  selectedValues?: string[];
  onChange?: (values: string[]) => void;
}

export interface CheckboxStyledProps {
  backgroundColor?: string;
  isCircle?: boolean;
}
