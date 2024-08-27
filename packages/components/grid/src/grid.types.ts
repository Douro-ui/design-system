import { HTMLAttributes } from 'react';
import { Theme } from '@douro-ui/react';

export interface GridElements {
  as?: 'section' | 'main' | 'div' | 'article';
}
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  rows?: number;
  gap?: string;
  theme?: Theme;
  styled?: GridStyledProps;
}

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  column?: number;
  row?: number;
  spanColumn?: number;
  spanRow?: number;
  theme?: Theme;
  styled?: GridStyledProps;
}

export interface GridStyledProps {
  color?: string;
  backgroundColor?: string;
  height?: string;
}
