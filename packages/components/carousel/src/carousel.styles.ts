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
`;

export const CarouselTrack = styled.div<{
  styled: Required<CarouselStyledProps>;
  totalSlides: number;
  currentSlide: number;
  visibleSlides: number;
}>`
  display: flex;
  gap: ${({ styled }) => styled.gap};
  transition: transform 0.5s ease-in-out;
  width: 100%;
  transform: translateX(
    -${props => (100 / props.visibleSlides) * props.currentSlide}%
  );
  flex: 0 0 ${props => 100 / props.visibleSlides}%;
`;

export const CarouselSlideStyled = styled.div<{
  styled: Required<CarouselSlideStyledProps>;
}>`
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 0.125rem solid ${({ styled }) => styled.borderColor};
  border-radius: ${({ styled }) => styled.borderRadius};
  height: ${({ styled }) => styled.height};
  width: ${({ styled }) => styled.width};
`;

export const ArrowButton = styled.button<{
  styled: Required<CarouselStyledProps>;
}>`
  background-color: ${({ styled }) => styled.backgroundColor};
  border: none;
  font-size: 2rem;
  cursor: pointer;
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
