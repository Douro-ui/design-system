import styled from '@emotion/styled';
import { InputProps, InputStyledProps } from './input.types';

export const InputContainerStyled = styled.div<InputProps>`
  border: none;
  position: relative;

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export const InputLabelStyled = styled.label<{
  styled: Required<InputStyledProps>;
}>`
  font-size: ${({ styled }) => styled.fontSize};
  font-weight: ${({ styled }) => styled.fontWeight};
  border: none;
  outline: none;
  color: ${({ styled }) => styled.labelColor};
  padding-left: 0;
  line-height: initial;
  display: block;
  margin-bottom: 0.5rem;
`;

export const InputHolderStyled = styled.div<{
  styled: Required<InputStyledProps>;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  border: 1px solid ${({ styled }) => styled.borderColor};
  border-radius: 0.25rem;
  padding: 0.625rem;

  &:hover {
    border-color: ${({ styled }) => styled.borderColorHover};
  }

  &:focus-within {
    border-color: ${({ styled }) => styled.borderColorActive};

    input {
      color: ${({ styled }) => styled.colorActive};
    }
  }
`;

export const InputStyled = styled.input<{
  styled: Required<InputStyledProps>;
}>`
  font-size: ${({ styled }) => styled.fontSize};
  border: none;
  outline: none;
  color: ${({ styled }) => styled.color};
  padding-left: 0;
  width: 100%;
  line-height: initial;

  &::placeholder {
    top: 0;
    position: absolute;
  }
`;
