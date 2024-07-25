import styled from '@emotion/styled';
import { ButtonProps } from './button.types';

const handleSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return 'font-size: 0.75rem; padding: 0.375rem 0.75rem;';
    case 'md':
      return 'font-size: 0.875rem; padding: 0.5rem 0.875rem;';
    case 'lg':
      return 'font-size: 1rem; padding: 0.5rem 1rem;';
    case 'xl':
      return 'font-size: 1rem; padding: 0.75rem 1.5rem;';
    default:
      return 'font-size: 1rem; padding: 0.5rem 1rem;';
  }
};

export const ButtonStyled = styled.button<ButtonProps>`
  color: ${({ styled }) => styled.color};
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 1px ${({ styled }) => styled.borderColor} solid;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.2s ease;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
    width: 1rem;
    max-width: 2rem;
    max-height: 2rem;
    fill: ${({ styled }) => styled.color};
  }

  &:hover {
    background: ${({ styled }) => styled.backgroundColorHover};
    color: ${({ styled }) => styled.colorHover};
    border-color: ${({ styled }) => styled.borderColorHover};
  }

  &:active {
    color: ${({ styled }) => styled.colorActive};
    border-color: ${({ styled }) => styled.borderColorActive};
    background: ${({ styled }) => styled.backgroundColorActive};
  }

  &:disabled {
    color: ${({ styled }) => styled.colorDisabled};
    background: ${({ styled }) => styled.backgroundColorDisabled};
    border-color: ${({ styled }) => styled.borderColorDisabled};
    pointer-events: none;
    cursor: not-allowed;
  }
  ${({ size }) => handleSize(size)};
`;
