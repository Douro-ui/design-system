import { Theme } from '@douro-ui/react';
import { HTMLAttributes, ReactNode } from 'react';

export interface TimelineStyledProps {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  fontSize?: string;
}

export interface TimelineGroupStyledProps {
  backgroundColor?: string;
  borderColor?: string;
  borderColorHover?: string;
  lineColor?: string;
  circleBackgroundColor?: string;
  circleBorderColor?: string;
  circleBorderColorHover?: string;
}

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  date?: Date;
  mainContent?: ReactNode;
  miniContent?: ReactNode;
  horizontally?: boolean;
  theme?: Theme;
  styled?: TimelineStyledProps;
}

export interface TimelineGroupProps extends HTMLAttributes<HTMLDivElement> {
  options: TimelineProps[];
  horizontally?: boolean;
  theme?: Theme;
  styled?: TimelineStyledProps;
}
