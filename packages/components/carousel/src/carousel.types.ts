import { HTMLAttributes, ReactNode } from 'react';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  styled?: CarouselStyledProps;
  visibleSlides?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  infiniteLoop?: boolean;
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
