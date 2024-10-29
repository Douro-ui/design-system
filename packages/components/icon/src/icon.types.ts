import { HTMLAttributes } from 'react';
import { icons } from '@douro-ui/svg-icons';

export interface IconStyledProps {
  fillColor?: string;
  strokeColor?: string;
  width?: string;
  height?: string;
}

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: keyof typeof icons;
  styled?: IconStyledProps;
}
