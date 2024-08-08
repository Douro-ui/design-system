import { HTMLAttributes, ReactNode } from 'react';

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  onClick?: () => void;
  styled?: BreadcrumbStyledProps;
}

export interface BreadcrumbGroupProps extends HTMLAttributes<HTMLDivElement> {
  separator?: ReactNode;
  styled?: BreadcrumbStyledProps;
}

export interface BreadcrumbStyledProps {
  color?: string;
  colorHover?: string;
  colorActive?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
}
