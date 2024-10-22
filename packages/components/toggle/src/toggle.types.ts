import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ChangeEventHandler, HTMLAttributes, LabelHTMLAttributes } from 'react';

export interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  styled?: ToggleStyledProps;
  size?: 'sm' | 'md' | 'lg';
  icon?: () => EmotionJSX.Element;
}

export interface ToggleStyledProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorDisabled?: string;
  color?: string;
  colorHover?: string;
  colorActive?: string;
  iconColor?: string;
  iconColorDisabled?: string;
  circleBackgroundColor?: string;
}
