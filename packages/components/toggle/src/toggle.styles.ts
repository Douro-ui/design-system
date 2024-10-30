import styled from '@emotion/styled';
import { ToggleProps, ToggleStyledProps } from './toggle.types';
import { css } from '@emotion/react';

const ratioSize = (Width: number, Height: number) => `
  width: ${Width}rem;
  height: ${Height}rem;
`;
const sizeMap = {
  sm: ratioSize(2.75, 1.25),
  md: ratioSize(3, 1.5),
  lg: ratioSize(3.75, 1.75),
};
const circleSizeMap = {
  sm: ratioSize(1.25, 1.25),
  md: ratioSize(1.5, 1.5),
  lg: ratioSize(1.75, 1.75),
};

const handleTranslateX = (size: ToggleProps['size'] = 'lg') =>
  size === 'lg' ? 'translateX(2rem);' : 'translateX(1.5rem);';
const handleSize = (size: ToggleProps['size'] = 'lg') => sizeMap[size];
const circleSize = (size: ToggleProps['size'] = 'lg') => circleSizeMap[size];

const toggleDisabledStyles = () => css`
  cursor: not-allowed;
  pointer-events: none;
`;

export const CircleStyled = styled.div<{
  size: ToggleProps['size'];
  styled: Required<ToggleStyledProps>;
  withIcon?: boolean;
  checked?: boolean;
  disabled?: boolean;
}>`
  position: absolute;
  background-color: ${({ styled }) => styled.circleBackgroundColor};
  border-radius: 50%;
  transition:
    transform 0.4s,
    background-color 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  margin: 0 0 0 0.125rem;
  ${({ size }) => circleSize(size)};
  transform: ${({ checked, size }) =>
    checked ? handleTranslateX(size) : 'translateX(0)'};
`;

export const SpanStyled = styled.span<{
  styled: Required<ToggleStyledProps>;
  size: ToggleProps['size'];
  disabled?: boolean;
  checked?: boolean;
}>`
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: ${({ styled, disabled }) =>
    disabled ? styled.backgroundColorDisabled : styled.backgroundColor};
  transition: 0.4s;
  border-radius: 2.125rem;
  padding: 0.125rem;

  &:hover {
    background-color: ${({ styled }) => styled.backgroundColorHover};
  }

  svg {
    fill: ${({ styled, disabled }) =>
      disabled ? styled.iconColorDisabled : styled.iconColor};
  }

  ${({ disabled }) => disabled && toggleDisabledStyles}
  ${({ size }) => handleSize(size)};
`;

export const InputStyled = styled.input<{
  styled: Required<ToggleStyledProps>;
  reSize?: ToggleProps['size'];
  disabled?: boolean;
}>`
  opacity: 0;
  margin: 0;

  &:focus + span {
    box-shadow: 0 0 0.0625rem ${({ styled }) => styled.colorActive};
  }

  &:checked + span {
    background-color: ${({ styled, disabled }) =>
      disabled ? styled.backgroundColorDisabled : styled.color};

    &:hover {
      background-color: ${({ styled }) => styled.colorHover};
    }

    div > svg {
      fill: ${({ styled, disabled }) =>
        disabled ? styled.iconColorDisabled : styled.color};

      &:hover {
        fill: ${({ styled }) => styled.colorHover};
      }
    }
  }

  ${({ reSize }) => handleSize(reSize)};
`;

export const ToggleContainerStyled = styled.label<{
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 2.125rem;

  ${({ disabled }) => disabled && toggleDisabledStyles}
`;

export const ToggleStyled = styled.div`
  position: relative;
  display: inline-block;
`;

export const IconStyled = styled.div<{
  styled: Required<ToggleStyledProps>;
  disabled?: boolean;
  icon?: boolean;
  checked?: boolean;
}>`
  width: 1rem;
  height: 1rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
