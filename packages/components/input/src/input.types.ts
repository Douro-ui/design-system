import { HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  styled?: InputStyledProps;
}

export interface InputStyledProps {
  labelColor?: string;
  color?: string;
  colorActive?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorActive?: string;
  fontSize?: string;
  fontWeight?: number;
}
