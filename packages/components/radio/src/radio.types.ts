import { HTMLAttributes, InputHTMLAttributes } from 'react';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  label: string;
  value: string;
}

export interface RadioOption extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  backgroundColor?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
}

export interface RadioStyledProps {
  backgroundColor?: string;
}
