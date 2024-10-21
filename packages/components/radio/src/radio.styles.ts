import styled from '@emotion/styled';
import { RadioProps, RadioStyledProps } from './radio.types';

const handleSize = (size: RadioProps['size']) => {
  switch (size) {
    case 'sm':
      return 'font-size: 0.75rem;';
    case 'md':
      return 'font-size: 0.875rem;';
    default:
      return 'font-size: 1rem;';
  }
};

export const LabelStyled = styled.span<{
  styled: Required<RadioStyledProps>;
  size: RadioProps['size'];
}>`
  cursor: pointer;
  color: ${({ styled }) => styled.color};
  font-family: ${({ styled }) => styled.fontFamily};
  font-weight: ${({ styled }) => styled.fontWeight};
  ${({ size }) => handleSize(size)};
`;

export const InputStyled = styled.input<{
  styled: Required<RadioStyledProps>;
}>`
  appearance: none;
  width: 1.125rem;
  height: 1.125rem;
  display: grid;
  place-content: center;
  border-radius: ${({ styled }) => styled.borderRadius};
  border: 1px ${({ styled }) => styled.borderColor} solid;
  margin: 0;

  &::before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${({ styled }) => styled.beforeBackgroundColor};
  }

  &:hover {
    border-color: ${({ styled }) => styled.hoverBorderColor};
  }

  &:disabled {
    border-color: ${({ styled }) => styled.disabledborderColor};
    cursor: not-allowed;

    + span {
      color: ${({ styled }) => styled.disabledColor};
      pointer-events: none;
    }
  }

  &:checked {
    background-color: ${({ styled }) => styled.checkedBackgroundColor};
    border-color: ${({ styled }) => styled.checkedBorderColor};

    &::before {
      transform: scale(1);
    }

    &:disabled {
      border-color: ${({ styled }) => styled.disablecheckedBorderColor};

      &::before {
        background-color: ${({ styled }) =>
          styled.disabledBeforecheckedBackgroundColor};
      }
    }

    &:active {
      border-color: ${({ styled }) => styled.activecheckedBorderColor};

      &::before {
        background-color: ${({ styled }) =>
          styled.activeBeforecheckedBackgroundColor};
      }
    }

    &:hover {
      border-color: ${({ styled }) => styled.hovercheckedBorderColor};

      &::before {
        background-color: ${({ styled }) => styled.hovercheckedBackgroundColor};
        box-shadow: inset 0 0 0 0.063rem
          ${({ styled }) => styled.checkedBeforeBorderColor};
      }

      &:disabled {
        &::before {
          box-shadow: inset 0 0 0 0.063rem
            ${({ styled }) => styled.disabledBeforecheckedBorderColor};
        }
      }
    }
  }
`;

export const RadioStyled = styled.div<{
  styled: Required<RadioStyledProps>;
  backgroundColor?: string;
}>`
  display: flex;
  align-items: center;
  background-color: ${({ styled }) => styled.backgroundColor};

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const RadioGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
