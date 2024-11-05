import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { AnchorHTMLAttributes, ReactNode } from 'react';

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
}

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isUnderline?: boolean;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  ariaLabel?: string;
  children?: ReactNode;
  iconBefore?: () => EmotionJSX.Element;
  iconAfter?: () => EmotionJSX.Element;
  styled?: LinkStyledProps;
}
