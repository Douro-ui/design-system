import styled from '@emotion/styled';
import { TooltipProps, TooltipStyledProps } from './tooltip.types';

const handlePosition = (
  position: TooltipProps['position'],
  styled: Required<TooltipStyledProps>,
  isFixedBottom: boolean,
) => {
  if (isFixedBottom) return '';

  switch (position) {
    default:
      return `
        &::after {
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 5px 5px 0 5px;
          border-top-color: ${styled.backgroundColor};
        }
      `;
    case 'bottom':
      return `
        &::after {
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 0 5px 5px 5px;
          border-bottom-color: ${styled.backgroundColor};
        }
      `;
    case 'left':
      return `
        &::after {
          top: 50%;
          right: -5px;
          transform: translateY(-50%);
          border-width: 5px 0 5px 5px;
          border-left-color: ${styled.backgroundColor};
        }
      `;
    case 'right':
      return `
        &::after {
          top: 50%;
          left: -5px;
          transform: translateY(-50%);
          border-width: 5px 5px 5px 0;
          border-right-color: ${styled.backgroundColor};
        }
      `;
  }
};

export const TooltipContainer = styled.div`
  position: relative;
`;

export const TooltipStyled = styled.div<{
  styled: Required<TooltipStyledProps>;
  position: TooltipProps['position'];
  isFixedBottom: boolean;
  top: number;
  left: number;
}>`
  color: ${({ styled }) => styled.color};
  min-width: 21.5rem;
  background-color: ${({ styled }) => styled.backgroundColor};
  border-radius: ${({ styled }) => styled.borderRadius};
  padding: 1rem 0.75rem;
  position: absolute;
  z-index: 1000;
  box-shadow: ${({ styled }) => styled.boxShadow};
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
  }

  transition: opacity 0.2s ease;

  ${({ position, styled, isFixedBottom }) =>
    handlePosition(position, styled, isFixedBottom)}
`;
