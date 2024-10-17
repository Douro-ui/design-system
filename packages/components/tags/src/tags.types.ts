import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { HTMLAttributes } from 'react';

export interface TagsStyledProps {
  color?: string;
  colorHover?: string;
  colorFocus?: string;
  colorActive?: string;
  colorDisabled?: string;
  fontFamily?: string;
  fontWeight?: number;
  iconColorHover?: string;
  iconColorFocus?: string;
  iconColorActive?: string;
  iconColorDisabled?: string;
  iconBackgroundColorHover?: string;
  iconBackgroundColorFocus?: string;
  iconborderColorFocus?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorFocus?: string;
  backgroundColorActive?: string;
  backgroundColorDisabled?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorFocus?: string;
  borderColorActive?: string;
  borderColorDisabled?: string;
  borderRadius?: string;
}

export interface TagsProps extends HTMLAttributes<HTMLDivElement> {
  typeTag?: 'readonly' | 'selectable' | 'dismissible';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconBefore?: () => EmotionJSX.Element;
  iconAfter?: () => EmotionJSX.Element;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  onClose?: () => void;
  styled?: TagsStyledProps;
}
