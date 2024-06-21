import styled from '@emotion/styled';
import { CheckboxStyledProps } from './checkbox.types';

export const LabelStyled = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const InputStyled = styled.input<CheckboxStyledProps>`
  appearance: none;
  width: 0.75rem;
  height: 0.75rem;
  border: 0.063rem solid #767676;
  display: grid;
  place-content: center;
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '0.125rem')};
  transition: background-color 300ms ease-in-out;

  &::before {
    content: '';
    width: 0.625rem;
    height: 0.625rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: #ffffff;
    clip-path: polygon(
      22.45% 43.52%,
      40% 63.71%,
      78.92% 29.86%,
      86% 38%,
      40% 78%,
      15% 50%
    );
  }

  &:checked {
    background-color: #298dcc;
    border: none;

    &::before {
      transform: scale(1);
    }

    &:hover {
      background-color: #005e99;
    }

    &:active {
      background-color: #003a5e;
    }

    &:disabled {
      background-color: #bcbcbc;
    }
  }

  &:hover {
    border-color: #2d2d2d;
  }

  &:disabled {
    border-color: #bcbcbc;
    cursor: not-allowed;

    + span {
      color: #bcbcbc;
      pointer-events: none;
    }
  }
`;

export const CheckboxContainerStyled = styled.div<CheckboxStyledProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
  }
`;

export const CheckboxGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;
