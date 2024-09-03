import { HTMLAttributes, ReactNode, ReactElement } from 'react';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  styled?: CarouselStyledProps;
  visibleSlides?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  showIcons?: boolean;
  showIndicators?: boolean;
  infiniteLoop?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  slides: CarouselSlideProps[];
}
export interface CarouselSlideProps extends HTMLAttributes<HTMLDivElement> {
  styled?: CarouselSlideStyledProps;
  children: ReactNode;
}

export interface CarouselStyledProps {
  gap?: string;
  backgroundColor?: string;
}

export interface CarouselSlideStyledProps {
  borderRadius?: string;
  borderColor?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
}
