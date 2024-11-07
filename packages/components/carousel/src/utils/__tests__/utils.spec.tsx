import { handleTransitionEnd } from '../getTransition';
import { handleDragStart, handleDragEnd } from '../getDrag';
import React, { MutableRefObject } from 'react';

const mockSetCurrentSlide = jest.fn();
const mockSetIsTransitioning = jest.fn();
const mockNextSlide = jest.fn();
const mockPrevSlide = jest.fn();

describe('handleTransitionEnd', () => {
  let trackRef: MutableRefObject<HTMLDivElement>;

  beforeEach(() => {
    trackRef = {
      current: document.createElement('div'),
    } as MutableRefObject<HTMLDivElement>;
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should set currentSlide to 1 when currentSlide is totalSlides + 1', () => {
    const currentSlide = 4;
    const totalSlides = 3;
    const infiniteLoop = true;

    handleTransitionEnd(
      currentSlide,
      totalSlides,
      trackRef,
      mockSetCurrentSlide,
      mockSetIsTransitioning,
      infiniteLoop,
    );

    expect(mockSetCurrentSlide).toHaveBeenCalledWith(1);
    expect(mockSetIsTransitioning).toHaveBeenCalledWith(false);
    jest.runAllTimers();
    expect(trackRef.current.style.transition).toBe('');
  });

  it('should set currentSlide to totalSlides when currentSlide is 0', () => {
    const currentSlide = 0;
    const totalSlides = 3;
    const infiniteLoop = true;

    handleTransitionEnd(
      currentSlide,
      totalSlides,
      trackRef,
      mockSetCurrentSlide,
      mockSetIsTransitioning,
      infiniteLoop,
    );

    expect(mockSetCurrentSlide).toHaveBeenCalledWith(totalSlides);
    expect(mockSetIsTransitioning).toHaveBeenCalledWith(false);
    jest.runAllTimers();
    expect(trackRef.current.style.transition).toBe('');
  });

  it('should call setTimeout to reset transition style', () => {
    const currentSlide = 4;
    const totalSlides = 3;
    const infiniteLoop = true;

    handleTransitionEnd(
      currentSlide,
      totalSlides,
      trackRef,
      mockSetCurrentSlide,
      mockSetIsTransitioning,
      infiniteLoop,
    );

    expect(mockSetCurrentSlide).toHaveBeenCalledWith(1);
    expect(mockSetIsTransitioning).toHaveBeenCalledWith(false);
    jest.runAllTimers();
    expect(trackRef.current.style.transition).toBe('');
  });

  it('should not change currentSlide when infiniteLoop is false', () => {
    const currentSlide = 1;
    const totalSlides = 3;
    const infiniteLoop = false;

    handleTransitionEnd(
      currentSlide,
      totalSlides,
      trackRef,
      mockSetCurrentSlide,
      mockSetIsTransitioning,
      infiniteLoop,
    );

    expect(mockSetCurrentSlide).not.toHaveBeenCalled();
    expect(mockSetIsTransitioning).toHaveBeenCalledWith(false);
  });

  it('should not change state if not transitioning', () => {
    const currentSlide = 2;
    const totalSlides = 3;
    const infiniteLoop = true;

    handleTransitionEnd(
      currentSlide,
      totalSlides,
      trackRef,
      mockSetCurrentSlide,
      mockSetIsTransitioning,
      infiniteLoop,
    );

    expect(mockSetCurrentSlide).not.toHaveBeenCalled();
    expect(mockSetIsTransitioning).toHaveBeenCalledWith(false);
  });

  it('should reset transition style if transitioning from the last slide to the first slide', () => {
    const currentSlide = 0;
    const totalSlides = 3;
    const infiniteLoop = true;

    handleTransitionEnd(
      currentSlide,
      totalSlides,
      trackRef,
      mockSetCurrentSlide,
      mockSetIsTransitioning,
      infiniteLoop,
    );

    expect(mockSetCurrentSlide).toHaveBeenCalledWith(totalSlides);
    expect(mockSetIsTransitioning).toHaveBeenCalledWith(false);
    jest.runAllTimers();
    expect(trackRef.current.style.transition).toBe('');
  });

  it('should reset transition style if transitioning from the first slide to the last slide', () => {
    const currentSlide = 4;
    const totalSlides = 3;
    const infiniteLoop = true;

    handleTransitionEnd(
      currentSlide,
      totalSlides,
      trackRef,
      mockSetCurrentSlide,
      mockSetIsTransitioning,
      infiniteLoop,
    );

    expect(mockSetCurrentSlide).toHaveBeenCalledWith(1);
    expect(mockSetIsTransitioning).toHaveBeenCalledWith(false);
    jest.runAllTimers();
    expect(trackRef.current.style.transition).toBe('');
  });
});

describe('handleDragStart', () => {
  let dragStartX: MutableRefObject<number | null>;

  beforeEach(() => {
    dragStartX = { current: null };
  });

  it('should set dragStartX to event.clientX', () => {
    const mockEvent = { clientX: 100 } as React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >;

    handleDragStart(mockEvent, dragStartX);

    expect(dragStartX.current).toBe(100);
  });
});

describe('handleDragEnd', () => {
  let dragStartX: MutableRefObject<number | null>;

  beforeEach(() => {
    dragStartX = { current: null };
    jest.clearAllMocks();
  });

  it('should do nothing if dragStartX is null', () => {
    const mockEvent = { clientX: 200 } as React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >;

    handleDragEnd(mockEvent, dragStartX, mockNextSlide, mockPrevSlide);

    expect(mockNextSlide).not.toHaveBeenCalled();
    expect(mockPrevSlide).not.toHaveBeenCalled();
  });

  it('should call nextSlide if drag distance is greater than 50', () => {
    dragStartX.current = 100;
    const mockEvent = { clientX: 30 } as React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >;

    handleDragEnd(mockEvent, dragStartX, mockNextSlide, mockPrevSlide);

    expect(mockNextSlide).toHaveBeenCalled();
    expect(mockPrevSlide).not.toHaveBeenCalled();
    expect(dragStartX.current).toBeNull();
  });

  it('should call prevSlide if drag distance is less than -50', () => {
    dragStartX.current = 100;
    const mockEvent = { clientX: 180 } as React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >;

    handleDragEnd(mockEvent, dragStartX, mockNextSlide, mockPrevSlide);

    expect(mockPrevSlide).toHaveBeenCalled();
    expect(mockNextSlide).not.toHaveBeenCalled();
    expect(dragStartX.current).toBeNull();
  });

  it('should not call nextSlide or prevSlide if drag distance is less than 50', () => {
    dragStartX.current = 100;
    const mockEvent = { clientX: 70 } as React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >;

    handleDragEnd(mockEvent, dragStartX, mockNextSlide, mockPrevSlide);

    expect(mockNextSlide).not.toHaveBeenCalled();
    expect(mockPrevSlide).not.toHaveBeenCalled();
    expect(dragStartX.current).toBeNull();
  });
});
