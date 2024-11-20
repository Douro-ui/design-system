import { InputHTMLAttributes } from 'react';

export interface TextareaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  maxLength?: number;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  hasCharacterCount?: boolean;
  canResize?: boolean;
  styled?: TextareaStyledProps;
}

export interface TextareaStyledProps {
  labelColor?: string;
  color?: string;
  colorHover?: string;
  colorFocus?: string;
  colorFilled?: string;
  colorError?: string;
  placeholderColor?: string;
  placeholderColorHover?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorFocus?: string;
  borderColorFilled?: string;
  fontFamily?: string;
}
