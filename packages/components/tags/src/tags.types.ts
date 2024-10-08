import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { HTMLAttributes } from 'react';

export interface TagsStyledProps {
  color?: string;
  colorHover?: string;
  colorFocus?: string;
  colorActive?: string;
  fontWeight?: number;
  iconColor?: string;
  iconColorHover?: string;
  iconColorFocus?: string;
  iconColorActive?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorFocus?: string;
  borderColorActive?: string;
  borderRadius?: string;
}

export interface TagsProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconBefore?: () => EmotionJSX.Element;
  iconAfter?: () => EmotionJSX.Element;
  label: string;
  disabled?: boolean;
  styled?: TagsStyledProps;
}
