import {
  ChangeEventHandler,
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactElement,
} from 'react';

export interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  styled?: ToggleStyledProps;
  size?: 'sm' | 'md' | 'lg';
  icon?: () => ReactElement;
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
