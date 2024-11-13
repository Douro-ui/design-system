import styled from '@emotion/styled';
import { CheckboxProps, CheckboxStyledProps } from './checkbox.types';

const sizeMap: Record<Exclude<CheckboxProps['size'], undefined>, string> = {
  sm: 'font-size: 0.75rem;',
  md: 'font-size: 0.875rem;',
  lg: 'font-size: 1rem;',
};

const handleSize = (size: CheckboxProps['size']) =>
  size ? sizeMap[size] : 'font-size: 1rem;';

export const LabelStyled = styled.span<{
  styled: Required<CheckboxStyledProps>;
  size: CheckboxProps['size'];
}>`
  cursor: pointer;
  color: ${({ styled }) => styled.color};
  font-family: ${({ styled }) => styled.fontFamily};
  font-weight: ${({ styled }) => styled.fontWeight};
  ${({ size }) => handleSize(size)};
`;

export const InputStyled = styled.input<{
  styled: Required<CheckboxStyledProps>;
}>`
  appearance: none;
  width: 1.125rem;
  height: 1.125rem;
  display: grid;
  place-content: center;
  border: 1px ${({ styled }) => styled.borderColor} solid;
  border-radius: ${({ styled }) => styled.borderRadius};
  margin: 0;

  &::before {
    content: '';
    width: 0.625rem;
    height: 0.625rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${({ styled }) => styled.beforeBackgroundColor};
    clip-path: polygon(
      22.45% 43.52%,
      40% 63.71%,
      78.92% 29.86%,
      86% 38%,
      40% 78%,
      15% 50%
    );
  }

  &:hover {
    border-color: ${({ styled }) => styled.hoverBorderColor};
  }

  &:disabled {
    border-color: ${({ styled }) => styled.disabledBorderColor};
    cursor: not-allowed;

    + span {
      color: ${({ styled }) => styled.disabledColor};
      pointer-events: none;
    }
  }

  &:indeterminate {
    border-color: ${({ styled }) => styled.disabledBorderColor};
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
      transform: scale(1.5);
    }

    &:disabled {
      border-color: ${({ styled }) => styled.disableCheckedBorderColor};

      &::before {
        background-color: ${({ styled }) =>
          styled.disabledBeforeCheckedBackgroundColor};
      }
    }

    &:indeterminate {
      border-color: ${({ styled }) => styled.disableCheckedBorderColor};

      &::before {
        background-color: ${({ styled }) =>
          styled.disabledBeforeCheckedBackgroundColor};
      }
    }

    &:active {
      border-color: ${({ styled }) => styled.activeCheckedBorderColor};

      &::before {
        background-color: ${({ styled }) =>
          styled.activeBeforeCheckedBackgroundColor};
      }
    }

    &:hover {
      border-color: ${({ styled }) => styled.hoverCheckedBorderColor};
      background-color: ${({ styled }) => styled.hoverCheckedBorderColor};

      &::before {
        background-color: ${({ styled }) => styled.hoverCheckedBackgroundColor};
      }

      &:disabled {
        &::before {
          ${({ styled }) => styled.disabledBeforeCheckedBorderColor};
        }
      }

      &:indeterminate {
        &::before {
          ${({ styled }) => styled.disabledBeforeCheckedBorderColor};
        }
      }
    }
  }
`;

export const CheckboxStyled = styled.div<{
  styled: Required<CheckboxStyledProps>;
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

export const CheckboxGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
