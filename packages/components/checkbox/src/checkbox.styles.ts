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
  border: 1px solid #767676;
  display: grid;
  place-content: center;
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '0.125rem')};
  transition: background-color 0.3s ease-in-out;

  &::before {
    content: "";
    width: 0.625rem;
    height: 0.625rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: #FFFFFF;
    clip-path: polygon(22.45% 43.52%, 40% 63.71%, 78.92% 29.86%, 86% 38%, 40% 78%, 15% 50%);
  }

  &:checked {
    background-color: #298DCC;
    border: none;

    &::before {
      transform: scale(1);
    }

    &:hover {
      background-color: #005E99;
    }

    &:active {
      background-color: #003A5E;
    }

    &:disabled {
      background-color: #BCBCBC;
    }
  }

  &:hover {
    border-color: #2D2D2D;
  }

  &:disabled {
    border-color: #BCBCBC;
    cursor: not-allowed;

    + span {
      color: #BCBCBC;
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
