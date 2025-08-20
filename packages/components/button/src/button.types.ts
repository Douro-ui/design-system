import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Custom = 'custom',
  Error = 'error',
}

export enum ButtonSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  ExtraLarge = 'xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeBtn?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  onKeyDown?: () => void;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  'aria-label'?: string;
  styled?: ButtonStyledProps;
}

export interface ButtonStyledProps {
  color?: string;
  colorHover?: string;
  colorActive?: string;
  colorDisabled?: string;
  focusColor?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
  backgroundColorDisabled?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorActive?: string;
  borderColorDisabled?: string;
  borderRadius?: string;
  activeFontWeight?: number;
  gapLg?: string;
  gapSm?: string;
}
