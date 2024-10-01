import { HTMLAttributes } from 'react';
import { icons } from '@douro-ui/svg-icons';

export interface IconStyledProps {
  color?: string;
  fillColor?: string;
  strokeColor?: string;
  width?: string;
  height?: string;
}

export interface IconProps extends HTMLAttributes<SVGElement> {
  name: keyof typeof icons;
  size?: 'sm' | 'md' | 'lg';
  styled?: IconStyledProps;
}
