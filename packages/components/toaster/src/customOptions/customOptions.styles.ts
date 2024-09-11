import styled from '@emotion/styled';
import {
  CloseButtonStyledProps,
  ProgressBarStyledProps,
} from './customOptions.types';

export const CloseButtonStyled = styled.button<{
  styled: Required<CloseButtonStyledProps>;
}>`
  background-color: ${({ styled }) => styled.backgroundColor || 'transparent'};
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.25rem 0.375rem;
  cursor: pointer;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    fill: ${({ styled }) => styled.color};
  }
`;

export const ProgressBarStyled = styled.div<{
  styled: Required<ProgressBarStyledProps>;
  duration: number;
  progress: number;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.125rem;
  width: ${({ progress }) => progress}%;
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 1px solid ${({ styled }) => styled.borderColor};
  border-radius: ${({ styled }) => styled.borderRadius};
  transition: width 0.1s linear;
`;
