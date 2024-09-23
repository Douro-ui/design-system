import { HTMLAttributes, ReactNode } from 'react';

export interface BadgeStyledProps {
  color?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorActive?: string;
  fontSize?: string;
  fontWeight?: number;
}

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  typeBadge?: 'alert' | 'neutral' | 'success' | 'warning';
  count?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children?: ReactNode;
  styled?: BadgeStyledProps;
}
