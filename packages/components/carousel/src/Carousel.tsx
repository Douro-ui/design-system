import {
  CarouselStyled,
  CarouselTrack,
  IconButton,
  IndicatorWrapper,
  IndicatorDot,
  DraggableArea,
} from './carousel.styles';
import CarouselSlide from './CarouselSlide';
import {
  CarouselProps,
  CarouselSlideProps,
  CarouselStyledProps,
} from './carousel.types';
import { deepMerge, useTheme } from '@douro-ui/react';
import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { Icon } from '@douro-ui/icon';
import { handleTransitionEnd as utilsHandleTransitionEnd } from './utils/getTransition';
import {
  handleDragStart as utilsHandleDragStart,
  handleDragEnd as utilsHandleDragEnd,
} from './utils/getDrag';

const Carousel = ({
  styled,
  slides,
  showIcons,
  showIndicators,
  visibleSlides = 1,
  autoplay = false,
  autoplayInterval = 2000,
  infiniteLoop = false,
  leftIcon,
  rightIcon,
  ...props
}: CarouselProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: CarouselStyledProps = {
    gap: '0.25rem',
    backgroundColor: theme.colors.brand.white,
  };

  const mergedThemeValues = deepMerge<CarouselStyledProps>(
    defaultThemeValues,
    styled,
  );

  const [currentSlide, setCurrentSlide] = useState(infiniteLoop ? 1 : 0);
  const totalSlides = Array.isArray(slides) ? slides.length : 0;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);

  const handleTransitionEnd = () => {
    utilsHandleTransitionEnd(
      currentSlide,
      totalSlides,
      trackRef,
      setCurrentSlide,
      setIsTransitioning,
      infiniteLoop,
    );
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide: number) => prevSlide + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide: number) => prevSlide - 1);
    }
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval]);

  return (
    <CarouselStyled
      styled={mergedThemeValues as Required<CarouselStyledProps>}
      {...props}
    >
      <DraggableArea
        data-testid="draggable-area"
        onMouseDown={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          utilsHandleDragStart(event, dragStartX)
        }
        onMouseUp={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          utilsHandleDragEnd(event, dragStartX, nextSlide, prevSlide)
        }
      />
      <CarouselTrack
        styled={mergedThemeValues as Required<CarouselStyledProps>}
        totalSlides={infiniteLoop ? totalSlides + 2 : totalSlides}
        currentSlide={currentSlide}
        visibleSlides={visibleSlides}
        onTransitionEnd={handleTransitionEnd}
        ref={trackRef}
      >
        {infiniteLoop && (
          <CarouselSlide key={`clone-last-${slides[totalSlides - 1].children}`}>
            {slides[totalSlides - 1].children}
          </CarouselSlide>
        )}
        {slides.map((slide: CarouselSlideProps, index: number) => (
          <CarouselSlide key={`slide-${index}`}>{slide.children}</CarouselSlide>
        ))}
        {infiniteLoop && (
          <CarouselSlide key={`clone-first-${slides[0].children}`}>
            {slides[0].children}
          </CarouselSlide>
        )}
      </CarouselTrack>

      {showIcons && (
        <>
          <IconButton
            styled={mergedThemeValues as Required<CarouselStyledProps>}
            direction="left"
            role="button"
            aria-label="previous slide"
            onClick={prevSlide}
          >
            {leftIcon || <Icon name="chevron-up" />}
          </IconButton>
          <IconButton
            styled={mergedThemeValues as Required<CarouselStyledProps>}
            direction="right"
            role="button"
            aria-label="next slide"
            onClick={nextSlide}
          >
            {rightIcon || <Icon name="chevron-down" />}
          </IconButton>
        </>
      )}

      {showIndicators && (
        <IndicatorWrapper>
          {Array.from({ length: totalSlides }).map(
            (_: unknown, index: number) => (
              <IndicatorDot
                key={`indicator-${index}`}
                active={index + 1 === currentSlide}
                onClick={() => setCurrentSlide(index + 1)}
                role="button"
                aria-label="indicator"
              />
            ),
          )}
        </IndicatorWrapper>
      )}
    </CarouselStyled>
  );
};

export default Carousel;
