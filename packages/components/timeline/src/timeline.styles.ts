import styled from '@emotion/styled';
import {
  TimelineGroupProps,
  TimelineGroupStyledProps,
  TimelineProps,
  TimelineStyledProps,
} from './timeline.types';

export const TimelineContainerStyled = styled.div<
  {
    styled: Required<TimelineStyledProps>;
  } & TimelineProps
>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.063rem solid ${({ styled }) => styled.borderColor};
  background-color: ${({ styled }) => styled.backgroundColor};
  border-radius: 0.25rem;
  gap: 1rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: 100%;
    width: 70vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet + 1}px) {
    width: ${({ horizontally }) => (horizontally ? '32vw' : '40vw')};
    height: 8.25rem;
  }
`;

export const TimelineMainContentStyled = styled.div<TimelineProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  overflow: hidden;
  height: calc(100% - 2.5rem);
`;

export const TimelineMiniContentStyled = styled.div<
  {
    styled: Required<TimelineStyledProps>;
  } & TimelineProps
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-left: 0.063rem solid ${({ styled }) => styled.borderColor};
  padding: 1rem;
  width: ${({ horizontally }) => (horizontally ? '20%' : '15%')};
  font-size: ${({ styled }) => styled.fontSize};
  color: ${({ styled }) => styled.color};
  text-align: center;
  justify-content: center;
  height: calc(100% - 2rem);
  position: relative;

  & :nth-child(2) {
    font-weight: bolder;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 20%;
  }
`;

export const TimelineGroupContainerStyled = styled.div<
  {
    styled: Required<TimelineGroupStyledProps>;
  } & TimelineGroupProps
>`
  display: flex;
  align-items: center;
  padding: 1rem;
  height: auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    gap: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet + 1}px) {
    flex-direction: ${({ horizontally }) => (horizontally ? 'column' : 'row')};
  }
`;

export const TimelineGroupLineStyled = styled.div<
  {
    styled: Required<TimelineGroupStyledProps>;
  } & TimelineGroupProps
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ horizontally }) => (horizontally ? '100%' : '0.313rem')};
  height: ${({ horizontally }) => (horizontally ? '0.313rem' : '100%')};
  border-radius: 0.25rem;
  background-color: ${({ styled }) => styled.lineColor};
  position: absolute;
  transform: ${({ horizontally }) =>
    horizontally ? 'translateY(-50%)' : 'translateX(-50%)'};
  left: ${({ horizontally }) => (horizontally ? 'none' : '50%')};
  top: ${({ horizontally }) => (horizontally ? '50%' : 'none')};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    left: 0;
    transform: none;
    width: 0.313rem;
    height: 100%;
    top: 0;
  }
`;

export const TimelineGroupCircleStyled = styled.div<
  {
    styled: Required<TimelineGroupStyledProps>;
    left?: boolean;
  } & TimelineGroupProps
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 6250rem;
  background-color: ${({ styled }) => styled.circleBackgroundColor};
  border: 0.125rem solid ${({ styled }) => styled.circleBorderColor};
  transform: ${({ left, horizontally }) =>
    horizontally
      ? left
        ? 'translateY(0.456rem)'
        : 'translateY(-0.456rem)'
      : left
        ? 'translateX(0.456rem)'
        : 'translateX(-0.456rem)'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    position: absolute;
    left: -0.25rem;
    transform: none;
  }
`;

export const TimelineGroupSideStyled = styled.div<
  {
    styled: Required<TimelineGroupStyledProps>;
  } & TimelineGroupProps
>`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    gap: 5rem;
    margin-left: 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet + 1}px) {
    flex-direction: ${({ horizontally }) => (horizontally ? 'row' : 'column')};
    gap: 10rem;
  }
`;

export const TimelineGroupContentStyled = styled.div<
  {
    styled: Required<TimelineGroupStyledProps>;
  } & TimelineGroupProps
>`
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    .timeline-container {
      border-color: ${({ styled }) => styled.borderColorHover};
      transform: scale(1.05);
    }

    .timeline-group-circle {
      border-color: ${({ styled }) => styled.circleBorderColorHover};
      box-shadow: 0 0.25rem 0.5rem rgb(0 0 0 / 10%);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet + 1}px) {
    flex-direction: ${({ horizontally }) => (horizontally ? 'column' : 'row')};
  }
`;
