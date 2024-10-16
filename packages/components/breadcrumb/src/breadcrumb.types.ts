import React, { HTMLAttributes, ReactNode } from 'react';
import { Theme } from '@douro-ui/react';

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  styled?: BreadcrumbStyledProps;
}

export interface BreadcrumbGroupProps extends HTMLAttributes<HTMLElement> {
  breadcrumbs?: string[];
  separator?: ReactNode;
  iconMobile?: ReactNode;
  lastVisibleBreadcrumbs?: number;
  theme?: Theme;
  styled?: BreadcrumbStyledProps;
}

export interface BreadcrumbStyledProps {
  color?: string;
  colorHover?: string;
  colorFocus?: string;
  colorActive?: string;
  borderColorFocus?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: number;
  fontWeightActive?: number;
  fontFamily?: string;
}
