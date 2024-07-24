import { AnchorHTMLAttributes } from 'react';

export interface LinkStyledProps {
  color?: string;
  colorHover?: string;
  colorFocus?: string;
  colorActive?: string;
  fontSize?: string;
  fontWeight?: number;
}

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  underline?: boolean;
  disabled?: boolean;
  styled?: LinkStyledProps;
}
