import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeBtn?: 'primary' | 'secondary' | 'tertiary' | 'error';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  iconBefore?: () => EmotionJSX.Element;
  iconAfter?: () => EmotionJSX.Element;
  styled?: ButtonStyledProps;
}

export interface ButtonStyledProps {
  color?: string;
  colorHover?: string;
  colorActive?: string;
  colorDisabled?: string;
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
