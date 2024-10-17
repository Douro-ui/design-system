import styled from '@emotion/styled';
import {
  CarouselStyledProps,
  CarouselSlideStyledProps,
} from './carousel.types';

export const CarouselStyled = styled.div<{
  styled: Required<CarouselStyledProps>;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ styled }) => styled.backgroundColor};
  overflow: hidden;
  position: relative;
`;

export const CarouselTrack = styled.div<{
  styled: Required<CarouselStyledProps>;
  totalSlides: number;
  currentSlide: number;
  visibleSlides: number;
}>`
  display: flex;
  gap: ${({ styled }) => styled.gap};
  width: 98%;
  transition: transform 0.5s ease-in-out;
  position: relative;
  transform: translateX(
    -${({ currentSlide, visibleSlides }) => (100 / visibleSlides) * currentSlide}%
  );

  & > * {
    flex: 0 0 calc(100% / ${({ visibleSlides }) => visibleSlides});
    max-width: calc(100% / ${({ visibleSlides }) => visibleSlides});
  }
`;

export const CarouselSlideStyled = styled.div<{
  styled: Required<CarouselSlideStyledProps>;
}>`
  box-sizing: border-box;
  text-align: center;
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 0.125rem solid ${({ styled }) => styled.borderColor};
  border-radius: ${({ styled }) => styled.borderRadius};
  height: ${({ styled }) => styled.height};
  width: ${({ styled }) => styled.width};
  overflow: hidden;

  & > * {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const ArrowButton = styled.div<{
  styled: Required<CarouselStyledProps>;
  direction: 'left' | 'right';
}>`
  cursor: pointer;
  position: absolute;

  ${({ direction }) =>
    direction === 'left'
      ? `right: 95%;
      transform: rotate(-90deg);`
      : `left: 95%;
      transform: rotate(-90deg);`}
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const IndicatorDot = styled.div<{ active: boolean }>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: ${props => (props.active ? 'black' : 'gray')};
  margin: 0 0.3125rem;
  cursor: pointer;
`;
