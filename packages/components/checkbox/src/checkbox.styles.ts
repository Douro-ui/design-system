import styled from '@emotion/styled';
import {
  CheckboxProps,
  CheckboxStyledProps,
  CheckboxGroupStyledProps,
} from './checkbox.types';

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
  cursor: pointer;

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

  &[data-indeterminate='true'] {
    border-color: ${({ styled }) => styled.indeterminateBorderColor};
    background-color: ${({ styled }) => styled.indeterminateBackgroundColor};
    cursor: not-allowed;

    &::before {
      content: '';
      width: 0.625rem;
      height: 0.125rem;
      background-color: ${({ styled }) =>
        styled.indeterminateBeforeBackgroundColor};
      border-radius: 0.0625rem;
      transform: scale(1);
      clip-path: none;
    }

    &:hover {
      border-color: ${({ styled }) => styled.indeterminateHoverBorderColor};
      background-color: ${({ styled }) =>
        styled.indeterminateHoverBackgroundColor};

      &::before {
        background-color: ${({ styled }) =>
          styled.indeterminateHoverBeforeBackgroundColor};
      }
    }

    &:disabled {
      border-color: ${({ styled }) => styled.disabledIndeterminateBorderColor};
      background-color: ${({ styled }) =>
        styled.disabledIndeterminateBackgroundColor};
      cursor: not-allowed;

      &::before {
        background-color: ${({ styled }) =>
          styled.disabledIndeterminateBeforeBackgroundColor};
      }
    }
  }

  &:checked {
    background-color: ${({ styled }) => styled.checkedBackgroundColor};
    border-color: ${({ styled }) => styled.checkedBorderColor};

    &::before {
      transform: scale(1.5);
    }

    &:hover {
      border-color: ${({ styled }) => styled.hoverCheckedBorderColor};
      background-color: ${({ styled }) => styled.hoverCheckedBorderColor};

      &::before {
        background-color: ${({ styled }) => styled.hoverCheckedBackgroundColor};
      }
    }

    &:active {
      border-color: ${({ styled }) => styled.activeCheckedBorderColor};

      &::before {
        background-color: ${({ styled }) =>
          styled.activeBeforeCheckedBackgroundColor};
      }
    }

    &:disabled {
      border-color: ${({ styled }) => styled.disableCheckedBorderColor};

      &::before {
        background-color: ${({ styled }) =>
          styled.disabledBeforeCheckedBackgroundColor};
      }
    }

    &[data-indeterminate='true'] {
      border-color: ${({ styled }) => styled.disableCheckedBorderColor};

      &::before {
        background-color: ${({ styled }) =>
          styled.disabledBeforeCheckedBackgroundColor};
      }
    }
  }
`;

export const CheckboxStyled = styled.div<{
  styled: Required<CheckboxStyledProps>;
  backgroundColor?: string;
}>`
  display: flex;
  align-items: left;
  justify-content: left;
  background-color: ${({ styled }) => styled.backgroundColor};
  gap: 0.5rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: left;
  gap: 0.5rem;
`;
export const CheckboxGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
`;

export const CheckboxGroupLabelStyled = styled.div<{
  styled: Required<CheckboxGroupStyledProps>;
}>`
  font-size: 1rem;
  font-weight: ${({ styled }) => styled.fontWeight || 'bold'};
  margin-bottom: 0.5rem;
  color: ${({ styled }) => styled.titleColor || '#1e293b'};
  font-family: ${({ styled }) => styled.fontFamily || 'Arial, sans-serif'};
`;

export const CheckboxGroupErrorStyled = styled.div<{
  styled: Required<CheckboxGroupStyledProps>;
}>`
  font-size: 0.875rem;
  color: ${({ styled }) => styled.errorColor || '#dc2626'};
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
