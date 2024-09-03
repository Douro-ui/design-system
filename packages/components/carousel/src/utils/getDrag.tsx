import React, { MutableRefObject } from 'react';

export const handleDragStart = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  dragStartX: MutableRefObject<number | null>,
): void => {
  dragStartX.current = event.clientX;
};

export const handleDragEnd = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  dragStartX: MutableRefObject<number | null>,
  nextSlide: () => void,
  prevSlide: () => void,
): void => {
  if (dragStartX.current === null) return;

  const dragEndX = event.clientX;
  const dragDistance = dragStartX.current - dragEndX;

  if (Math.abs(dragDistance) > 50) {
    if (dragDistance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
  dragStartX.current = null;
};
