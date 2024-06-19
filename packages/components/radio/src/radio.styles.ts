import styled from '@emotion/styled';
import { RadioStyledProps } from './radio.types';

export const LabelStyled = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const InputStyled = styled.input<{ backgroundColor?: string }>`
  appearance: none;
  width: 0.875rem;
  height: 0.875rem;
  display: grid;
  place-content: center;
  border-radius: 50%;
  border: 1px solid #767676;
  transition: background-color 0.3s ease-in-out;

  &::before {
    content: '';
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: #298dcc;
  }

  &:checked {
    background-color: #ffffff;
    border-color: #298dcc;

    &::before {
      transform: scale(1);
    }

    &:hover {
      border-color: #005e99;

      &::before {
        background-color: #005e99;
      }
    }

    &:active {
      border-color: #003a5e;

      &::before {
        background-color: #003a5e;
      }
    }

    &:disabled {
      border-color: #bcbcbc;

      &::before {
        background-color: #bcbcbc;
      }
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

export const RadioStyled = styled.div<Omit<RadioStyledProps, 'label'>>`
  display: flex;
  align-items: center;
  background-color: ${props => props.backgroundColor ?? 'transparent'};

  label {
    display: flex;
    align-items: center;
  }
`;

export const RadioGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;
