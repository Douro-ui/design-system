import { HTMLAttributes } from 'react';

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  underline?: boolean;
  href?: string;
  disabled?: boolean;
}

export interface LinkStyledProps extends HTMLAttributes<HTMLAnchorElement> {
  styledColor: string;
  styledColorHover: string;
  styledColorFocus: string;
  styledColorActive: string;
  fontSize: number;
}
