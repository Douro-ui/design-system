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
}

export interface TagsProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: string;
  iconPosition?: 'left' | 'right';
  hasIconClose?: boolean;
  iconClose?: string;
  label: string;
  disabled?: boolean;
  styled?: TagsStyledProps;
}
