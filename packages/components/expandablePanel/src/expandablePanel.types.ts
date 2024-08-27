import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface ExpandablePanelStyledProps {
  color?: string;
  borderColor?: string;
  colorDisabled?: string;
  backgroundColorDisabled?: string;
  borderColorDisabled?: string;
  fontSize?: string;
  fontWeight?: number;
  width?: string;
  height?: string;
  maxHeight?: string;
  paddingX?: string;
  paddingY?: string;
  gap?: string;
  isExpanded?: boolean;
}

export interface ExpandablePanelProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  styled?: ExpandablePanelStyledProps;
  header?: ReactNode;
  expanded?: boolean;
  startExpanded?: boolean;
  hasIcon?: ReactNode;
  children?: ReactNode;
}

export interface ExpandablePanelHeaderProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  styled?: ExpandablePanelStyledProps;
  disabled?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  isExpanded?: boolean;
  onClick?: () => void;
}

export interface ExpandablePanelBodyProps
  extends HTMLAttributes<HTMLDivElement> {
  styled?: ExpandablePanelStyledProps;
  isExpanded?: boolean;
  height?: string;
  children?: ReactNode;
}
