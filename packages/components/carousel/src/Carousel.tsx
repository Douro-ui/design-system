import {
  CarouselStyled,
  CarouselTrack,
  ArrowButton,
  IndicatorWrapper,
  //IndicatorDot,
} from './carousel.styles';
import CarouselSlide from './CarouselSlide';
import {
  CarouselProps,
  CarouselSlideProps,
  CarouselStyledProps,
} from './carousel.types';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode, useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from '@douro-ui/svg-icons';

const Carousel = ({
  styled,
  slides,
  //direction,
  showArrows,
  showIndicators,
  visibleSlides = 1,
  autoplay = false,
  autoplayInterval = 3000,
  disabled = false,
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Array.isArray(slides) ? slides.length : 0;

  console.log(totalSlides);

  const nextSlide = () => {
    if (!disabled) {
      setCurrentSlide((prevSlide: number) => (prevSlide + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (!disabled) {
      setCurrentSlide(
        (prevSlide: number) => (prevSlide - 1 + totalSlides) % totalSlides,
      );
    }
  };

  useEffect(() => {
    if (autoplay && !disabled) {
      const interval = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval, disabled]);

  return (
    <CarouselStyled
      styled={mergedThemeValues as Required<CarouselStyledProps>}
      {...props}
    >
      <CarouselTrack
        styled={mergedThemeValues as Required<CarouselStyledProps>}
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        visibleSlides={visibleSlides}
      >
        {slides.map((slide: CarouselSlideProps, index: number) => (
          <CarouselSlide key={index}>{slide.children}</CarouselSlide>
        ))}
      </CarouselTrack>

      {showArrows && (
        <>
          <ArrowButton
            styled={mergedThemeValues as Required<CarouselStyledProps>}
            //direction="left"
            onClick={prevSlide}
          >
            <img
              src={ChevronUp}
              alt="Previous Slide"
              style={{ width: '1rem', height: '1rem' }}
            />
          </ArrowButton>
          <ArrowButton
            styled={mergedThemeValues as Required<CarouselStyledProps>}
            //direction="right"
            onClick={nextSlide}
          >
            <img
              src={ChevronDown}
              alt="Next Slide"
              style={{ width: '1rem', height: '1rem' }}
            />
          </ArrowButton>
        </>
      )}

      {showIndicators && (
        <IndicatorWrapper>
          {/* {Array.from({ length: totalSlides }).map((_, index) => (
            <IndicatorDot
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))} */}
        </IndicatorWrapper>
      )}
    </CarouselStyled>
  );
};

export default Carousel;
