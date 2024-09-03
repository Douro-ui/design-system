import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';
import { CarouselSlideStyled } from './carousel.styles';
import { CarouselSlideProps, CarouselSlideStyledProps } from './carousel.types';

const CarouselSlide = ({
  children,
  styled,
  ...props
}: CarouselSlideProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: CarouselSlideStyledProps = {
    borderRadius: '0.25rem',
    borderColor: theme.colors.brand.black,
    height: 'auto',
    width: 'auto',
    backgroundColor: theme.colors.brand.white,
  };

  const mergedThemeValues = deepMerge<CarouselSlideStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <CarouselSlideStyled
      styled={mergedThemeValues as Required<CarouselSlideStyledProps>}
      {...props}
    >
      {children}
    </CarouselSlideStyled>
  );
};

export default CarouselSlide;
