import styled from '@emotion/styled';

export const CarouselStyled = styled.div`
  width: calc(100% + 7.5rem);
  max-width: 80%;
  margin: 0 auto;
  position: relative;
  padding: 0 3.75rem;

  .carousel.carousel-slider {
    padding: 0;
    overflow: hidden;
  }
`;

export const Slide = styled.div`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;

  & video {
    width: 9.375rem;
    height: 9.375rem;
  }

  & img {
    width: 9.375rem;
    border: 0.0625rem solid black;
    background-color: white;
  }
`;

export const IndicatorButton = styled.button<{ isSelected: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  color: ${props => (props.isSelected ? 'black' : 'gray')};
`;

export const IndicatorItem = styled.li`
  display: inline;
  margin: 0 0.25rem;
`;

export const CarouselHtmlStyled = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  border: 0.0625rem solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
