import { HTMLAttributes, ReactNode } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  headerTitle?: string;
  headerIcon?: string;
  childrenBody?: ReactNode;
  childrenFooter?: ReactNode;
  styledHeader?: ModalStyledProps;
  styled?: ModalStyledProps;
  isOpen?: boolean;
  onClose: () => void;
}

export interface ModalStyledProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  insideBorderColor?: string;
  backgroundColor?: string;
  justifyContentFooter?: string;
}

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  styled?: ModalStyledProps;
}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  headerTitle?: string;
  headerIcon?: string;
  styled?: ModalStyledProps;
  onClose: () => void;
}
