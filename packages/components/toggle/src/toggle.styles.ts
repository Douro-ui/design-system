import styled from '@emotion/styled';
import { InputStyledProps, SpanStyledProps } from './toggle.types';

export const ToggleContainerStyled = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const SpanStyled = styled.span<SpanStyledProps>`
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: ${({ styledColorBackground }) => styledColorBackground};
  transition: 0.4s;
  border-radius: 2.125rem;

  &:hover {
    background-color: ${({ styledColorBackgroundHover }) =>
      styledColorBackgroundHover};
  }

  &::before {
    position: absolute;
    content: '';
    margin: 0.125rem;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    left: 0;
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const InputStyled = styled.input<InputStyledProps>`
  opacity: 0;
  width: 0;
  height: 0;

  &:focus + span {
    box-shadow: 0 0 0.0625rem ${({ styledColorActive }) => styledColorActive};
  }

  &:checked + span {
    background-color: ${({ styledColor }) => styledColor};

    &::before {
      transform: translateX(0.75rem);
    }

    &:hover {
      background-color: ${({ styledColorHover }) => styledColorHover};
    }
  }
`;

export const ToggleStyled = styled.div`
  position: relative;
  display: inline-block;
  width: 1.75rem;
  height: 1rem;
`;
