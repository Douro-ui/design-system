import { HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';

export interface AvatarStyledProps {
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  fontFamily?: string;
  fontWeight?: number;
}

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallbackText?: string;
  typeAvt?: 'base' | 'image';
  src?: string;
  styled?: AvatarStyledProps;
  img?: ImgHTMLAttributes<Element>;
  children?: ReactNode;
}
