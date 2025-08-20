import styled from '@emotion/styled';
import { ButtonSize, ButtonStyledProps } from './button.types';

const childrenStyle = (
  FontSize: number,
  PaddingY: number,
  PaddingX: number,
) => `
  font-size: ${FontSize}rem;
  padding: ${PaddingY}rem ${PaddingX}rem;
`;
const ratioSize = (Width: number, Height: number) => `
  width: ${Width}rem;
  height: ${Height}rem;
`;
const childrenMap = {
  sm: childrenStyle(0.75, 0.375, 0.75),
  md: childrenStyle(0.875, 0.5, 0.875),
  lg: childrenStyle(1, 0.5, 1),
  xl: childrenStyle(1, 0.75, 1.5),
};
const sizeMap = {
  sm: ratioSize(1.25, 1.25),
  md: ratioSize(1.25, 1.25),
  lg: ratioSize(1.5, 1.5),
  xl: ratioSize(1.5, 1.5),
};

const handleSize = (size = ButtonSize.Large) => childrenMap[size];
const handleIconSize = (size = ButtonSize.ExtraLarge) => sizeMap[size];
const handleGap = (size: ButtonSize, hasIcon: boolean) => {
  if (!hasIcon) return 0;
  return size === 'xl' || size === 'lg' ? '0.5rem;' : '0.25rem;';
};

export const ButtonStyled = styled.button<{
  styled: Required<ButtonStyledProps>;
  size: ButtonSize;
  typeBtn: string;
  hasIconBefore: boolean;
  hasIconAfter: boolean;
}>`
  color: ${({ styled }) => styled.color};
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 1px ${({ styled }) => styled.borderColor} solid;
  border-radius: ${({ styled }) => styled.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.2s ease;
  cursor: pointer;
  gap: ${({ size, hasIconAfter, hasIconBefore }) =>
    handleGap(size, hasIconAfter || hasIconBefore)};

  svg {
    fill: ${({ styled }) => styled.color};
    ${({ size }) => handleIconSize(size)};
  }

  &:hover {
    background: ${({ styled }) => styled.backgroundColorHover};
    color: ${({ styled }) => styled.colorHover};
    border-color: ${({ styled }) => styled.borderColorHover};

    svg {
      fill: ${({ styled }) => styled.colorHover};
    }
  }

  &.is-active,
  &:active {
    color: ${({ styled }) => styled.colorActive};
    border-color: ${({ styled }) => styled.borderColorActive};
    background: ${({ styled }) => styled.backgroundColorActive};
    font-weight: ${({ styled }) => styled.activeFontWeight};

    svg {
      fill: ${({ styled }) => styled.colorActive};
    }
  }

  &:disabled {
    color: ${({ styled }) => styled.colorDisabled};
    background: ${({ styled }) => styled.backgroundColorDisabled};
    border-color: ${({ styled }) => styled.borderColorDisabled};
    pointer-events: none;
    cursor: not-allowed;

    svg {
      fill: ${({ styled }) => styled.colorDisabled};
    }
  }

  &:focus-visible {
    outline: 0.125rem solid ${({ styled }) => styled.focusColor};
  }
  ${({ size }) => handleSize(size)};
`;

export const IconStyled = styled.div<{
  styled: Required<ButtonStyledProps>;
  size: ButtonSize;
}>`
  ${({ size }) => handleIconSize(size)};
`;
