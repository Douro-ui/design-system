import { InputHTMLAttributes } from 'react';

export interface TextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  maxLength?: number;
  placeholder?: string;
  disabled?: boolean;
  styled?: TextareaStyledProps;
}

export interface TextareaStyledProps {
  labelColor?: string;
  color?: string;
  colorActive?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorActive?: string;
  fontSize?: string;
}
