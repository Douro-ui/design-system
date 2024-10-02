import React, { ReactNode } from 'react';

export interface ToasterProps {
  typeToaster?: 'success' | 'info' | 'warning' | 'error';
  position?:
    | 'top-right'
    | 'top-left'
    | 'top-center'
    | 'bottom-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'center';
  isInStack?: boolean;
  duration?: number;
  dismissible?: boolean;
  children: React.ReactNode;
  styled?: ToasterStyledProps;
  onClose?: () => void;
  onClick?: () => void;
  showCloseButton?: boolean;
  showProgressBar?: boolean;
  visible?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  id?: string;
}
export interface ToasterProviderProps {
  children: ReactNode;
}

export interface ToasterContextType {
  addToaster: (toaster: ToasterProps) => void;
}

export interface UseToasterQueueResult {
  toasters: ToasterProps[];
  addToaster: (toaster: ToasterProps) => void;
  removeToaster: (id: string) => void;
}

export interface UseToasterParams {
  duration?: number;
  onClose?: () => void;
}

export interface UseToasterResult {
  visible: boolean;
  progress: number;
  closeToaster: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export interface ToasterStackProps {
  toasters: ToasterProps[];
  removeToaster: (id: string) => void;
}

export interface ToasterStyledProps {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  backgroundColorHover?: string;
  borderColorHover?: string;
  borderRadius?: string;
  position?: string;
}
