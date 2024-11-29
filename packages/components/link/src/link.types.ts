import { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react';

export interface LinkStyledProps {
  color?: string;
  colorHover?: string;
  colorFocus?: string;
  colorActive?: string;
  colorVisited?: string;
  colorDisabled?: string;
  colorHoverVisited?: string;
  fontSize?: string;
  fontWeight?: number;
  fontFamily?: string;
}

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isUnderline?: boolean;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  ariaLabel?: string;
  children?: ReactNode;
  iconBefore?: () => ReactElement;
  iconAfter?: () => ReactElement;
  styled?: LinkStyledProps;
}
