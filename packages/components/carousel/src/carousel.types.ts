import { HTMLAttributes, ReactNode } from 'react';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  styled?: CarouselStyledProps;
  visibleSlides?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  //direction?: string;
  showArrows?: boolean;
  showIndicators?: boolean;
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
