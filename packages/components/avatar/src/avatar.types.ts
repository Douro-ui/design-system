import { BadgeProps } from '@douro-ui/badge';
import { HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';

export interface AvatarStyledProps {
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  boxShadowColor?: string;
  fontFamily?: string;
  fontWeight?: number;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
}

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fallbackText?: string;
  typeAvt?: 'base' | 'image';
  src?: string;
  styled?: AvatarStyledProps;
  imgProps?: ImgHTMLAttributes<Element>;
  children?: ReactNode;
  badge?: boolean;
  badgeProps?: BadgeProps;
  hasFilter?: boolean;
  filterTypes?: 'none' | 'green' | 'blue' | 'blueNavy';
}

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  maxVisible?: number;
}

export interface AvatarFallback {
  styled?: AvatarStyledProps;
  firstAvatarSize: AvatarProps['size'];
  remainingAvatarsCount: number;
}
