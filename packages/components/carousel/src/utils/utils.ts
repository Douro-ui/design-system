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

export const initializeDrag = (
  trackRef: MutableRefObject<HTMLDivElement | null>,
  totalSlides: number,
  currentSlide: number,
  setCurrentSlide: (slide: number) => void,
  infiniteLoop: boolean,
) => {
  let isDragging = false;
  let startPosition = 0;
  let dragOffset = 0;

  const onMouseDown = (event: MouseEvent) => {
    if (!trackRef.current) return;
    isDragging = true;
    startPosition = event.clientX;
    trackRef.current.style.transition = 'none';
  };

  const onMouseMove = (event: MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    dragOffset = event.clientX - startPosition;
    trackRef.current.style.transform = `translateX(${dragOffset}px)`;
  };

  const onMouseUp = () => {
    if (!isDragging || !trackRef.current) return;
    isDragging = false;
    trackRef.current.style.transition = '';
    trackRef.current.style.transform = '';

    const slideWidth = trackRef.current.clientWidth / totalSlides;
    if (Math.abs(dragOffset) > slideWidth / 4) {
      if (dragOffset < 0) {
        const newSlide = infiniteLoop
          ? currentSlide + 1
          : Math.min(currentSlide + 1, totalSlides - 1);
        setCurrentSlide(newSlide);
      } else {
        const newSlide = infiniteLoop
          ? currentSlide - 1
          : Math.max(currentSlide - 1, 0);
        setCurrentSlide(newSlide);
      }
    }
    dragOffset = 0;
  };

  const onMouseLeave = () => {
    if (isDragging) onMouseUp();
  };

  if (trackRef.current) {
    trackRef.current.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseleave', onMouseLeave);
  }

  return (): void => {
    if (trackRef.current) {
      trackRef.current.removeEventListener('mousedown', onMouseDown);
    }
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mouseleave', onMouseLeave);
  };
};
