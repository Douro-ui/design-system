import { HTMLAttributes, ReactNode } from 'react';

export enum ShirtSize {
  sm,
  md,
  lg,
}

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  size?: ShirtSize;
  headerTitle?: string;
  childrenBody?: ReactNode;
  childrenFooter?: ReactNode;
  styledHeader?: ModalStyledProps;
  styled?: ModalStyledProps;
  isOpen?: boolean;
  closeOnOutsideClick?: boolean;
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
  size?: ShirtSize;
  children?: ReactNode;
  styled?: ModalStyledProps;
}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: ShirtSize;
  headerTitle?: string;
  headerIcon?: string;
  styled?: ModalStyledProps;
  onClose: () => void;
}
