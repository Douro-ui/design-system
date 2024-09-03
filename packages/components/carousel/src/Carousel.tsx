import {
  CarouselStyled,
  CarouselTrack,
  ArrowButton,
  IndicatorWrapper,
  IndicatorDot,
} from './carousel.styles';
import CarouselSlide from './CarouselSlide';
import {
  CarouselProps,
  CarouselSlideProps,
  CarouselStyledProps,
} from './carousel.types';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode, useState, useEffect, useRef } from 'react';
import { Icon } from '@douro-ui/icon';
import {
  handleTransitionEnd as utilsHandleTransitionEnd,
  initializeDrag,
} from './utils/utils';

const Carousel = ({
  styled,
  slides,
  showArrows,
  showIndicators,
  visibleSlides = 1,
  autoplay = false,
  autoplayInterval = 2000,
  infiniteLoop = false,
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

  useEffect(() => {
    if (
      infiniteLoop &&
      (currentSlide === totalSlides + 1 || currentSlide === 0)
    ) {
      const timeout = setTimeout(handleTransitionEnd, 500);
      return () => clearTimeout(timeout);
    }
  }, [infiniteLoop, currentSlide]);

  useEffect(() => {
    const cleanupDrag = initializeDrag(
      trackRef,
      totalSlides,
      currentSlide,
      setCurrentSlide,
      infiniteLoop,
    );

    return () => {
      cleanupDrag();
    };
  }, [currentSlide, totalSlides, infiniteLoop]);

  return (
    <CarouselStyled
      styled={mergedThemeValues as Required<CarouselStyledProps>}
      {...props}
    >
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

      {showArrows && (
        <>
          <ArrowButton
            styled={mergedThemeValues as Required<CarouselStyledProps>}
            direction="left"
            aria-label="previous slide"
            onClick={prevSlide}
          >
            <Icon name="chevron-up" />
          </ArrowButton>
          <ArrowButton
            styled={mergedThemeValues as Required<CarouselStyledProps>}
            direction="right"
            aria-label="next slide"
            onClick={nextSlide}
          >
            <Icon name="chevron-down" />
          </ArrowButton>
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
              />
            ),
          )}
        </IndicatorWrapper>
      )}
    </CarouselStyled>
  );
};

export default Carousel;
