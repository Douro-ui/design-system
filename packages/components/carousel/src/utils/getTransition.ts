import { MutableRefObject } from 'react';

export const handleTransitionEnd = (
  currentSlide: number,
  totalSlides: number,
  trackRef: MutableRefObject<HTMLDivElement | null>,
  setCurrentSlide: (slide: number) => void,
  setIsTransitioning: (transitioning: boolean) => void,
  infiniteLoop: boolean,
): void => {
  setIsTransitioning(false);

  if (infiniteLoop) {
    if (currentSlide === totalSlides + 1) {
      setCurrentSlide(1);
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = '';
          }
        }, 50);
      }
    } else if (currentSlide === 0) {
      setCurrentSlide(totalSlides);
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = '';
          }
        }, 50);
      }
    }
  }
};
