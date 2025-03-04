import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import React from 'react';

export interface ExpandablePanelStyledProps {
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
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

export interface ExpandablePanelProps {
  items: ExpandablePanelItemProps[];
  styled?: ExpandablePanelStyledProps;
  preventAllClosed?: boolean;
  multipleOpens?: boolean;
  onToggle?: (index: number) => void;
  className?: string;
}

export interface ExpandablePanelItemProps
  extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  styled?: ExpandablePanelStyledProps;
  header?: ReactNode;
  expanded?: boolean;
  startExpanded?: boolean;
  hasIcon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
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

export type HandleToggleArgs = {
  index: number;
  setItems: React.Dispatch<React.SetStateAction<ExpandablePanelItemProps[]>>;
  preventAllClosed?: boolean;
  multipleOpens?: boolean;
};
