import styled from '@emotion/styled';
import {
  CheckboxProps,
  CheckboxStyledProps,
  CheckboxGroupStyledProps,
} from './checkbox.types';

const sizeMap: Record<
  Exclude<CheckboxProps['checkboxSize'], undefined>,
  {
    fontSize: string;
    boxSize: string;
    groupLabelSize: string;
    groupErrorSize: string;
  }
> = {
  sm: {
    fontSize: '0.75rem',
    boxSize: '1rem',
    groupLabelSize: '0.875rem',
    groupErrorSize: '0.75rem',
  },
  md: {
    fontSize: '0.875rem',
    boxSize: '1.125rem',
    groupLabelSize: '1rem',
    groupErrorSize: '0.875rem',
  },
  lg: {
    fontSize: '1rem',
    boxSize: '1.375rem',
    groupLabelSize: '1.125rem',
    groupErrorSize: '1rem',
  },
};

function getSizeValues(
  checkboxSize: CheckboxProps['checkboxSize'] | undefined,
) {
  if (!checkboxSize) return sizeMap.md;
  return sizeMap[checkboxSize];
}

export const LabelStyled = styled.span<{
  styled: Required<CheckboxStyledProps>;
  checkboxSize: CheckboxProps['checkboxSize'];
}>`
  cursor: pointer;
  color: ${({ styled }) => styled.color};
  font-family: ${({ styled }) => styled.fontFamily};
  font-weight: ${({ styled }) => styled.fontWeight};
  ${({ checkboxSize }) => {
    const { fontSize } = getSizeValues(checkboxSize);
    return `
      font-size: ${fontSize};
    `;
  }}
  text-align: left;
`;

export const InputStyled = styled.input<{
  styled: Required<CheckboxStyledProps>;
  checkboxSize: CheckboxProps['checkboxSize'];
}>`
  appearance: none;
  display: grid;
  place-content: center;
  margin: 0;
  cursor: pointer;
  ${({ checkboxSize }) => {
    const { boxSize } = getSizeValues(checkboxSize);
    return `
      width: ${boxSize};
      height: ${boxSize};
    `;
  }}
  border: 1px ${({ styled }) => styled.borderColor} solid;
  border-radius: ${({ styled }) => styled.borderRadius};

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
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ styled }) => styled.backgroundColor};

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: flex-start;
  }
`;

export const CheckboxGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

export const CheckboxGroupLabelStyled = styled.div<{
  styled: Required<CheckboxGroupStyledProps>;
  checkboxSize?: CheckboxProps['checkboxSize'];
}>`
  ${({ checkboxSize }) => {
    const { groupLabelSize } = getSizeValues(checkboxSize);
    return `
      font-size: ${groupLabelSize};
    `;
  }}

  font-weight: ${({ styled }) => styled.fontWeight || 'bold'};
  margin-bottom: 0.5rem;
  color: ${({ styled }) => styled.titleColor || '#1e293b'};
  font-family: ${({ styled }) => styled.fontFamily || 'Arial, sans-serif'};
  text-align: left;
`;

export const CheckboxGroupErrorStyled = styled.div<{
  styled: Required<CheckboxGroupStyledProps>;
  checkboxSize?: CheckboxProps['checkboxSize'];
}>`
  ${({ checkboxSize }) => {
    const { groupErrorSize } = getSizeValues(checkboxSize);
    return `
      font-size: ${groupErrorSize};
    `;
  }}

  color: ${({ styled }) => styled.errorColor || '#dc2626'};
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25rem;
`;

export const IconContainer = styled.div<{
  checkboxSize?: CheckboxProps['checkboxSize'];
  styled: Required<CheckboxGroupStyledProps>;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ checkboxSize }) => {
    const { groupErrorSize } = getSizeValues(checkboxSize);
    return `
      font-size: ${groupErrorSize};
    `;
  }}

  svg {
    stroke: ${({ styled }) => styled.errorIconColor || '#dc2626'};
  }
`;
