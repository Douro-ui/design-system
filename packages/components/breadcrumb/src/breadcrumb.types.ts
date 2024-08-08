import React, { HTMLAttributes, ReactNode } from 'react';

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  styled?: BreadcrumbStyledProps;
}

export interface BreadcrumbGroupProps extends HTMLAttributes<HTMLElement> {
  breadcrumbs?: string[];
  separator?: ReactNode;
  styled?: BreadcrumbStyledProps;
}

export interface BreadcrumbStyledProps {
  color?: string;
  colorHover?: string;
  colorActive?: string;
}
