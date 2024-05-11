import styled from '@emotion/styled';
import { ButtonProps } from './button.types';

const handleSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return 'font-size: 12px; padding: 10px 16px;';
    case 'medium':
      return 'font-size: 14px; padding: 11px 20px;';
    case 'large':
      return 'font-size: 16px; padding: 12px 24px;';
    default:
      return 'font-size: 14px; padding: 11px 20px;';
  }
};

export const ButtonStyled = styled.button<Omit<ButtonProps, 'label'>>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ backgroundColor, primary }) =>
    primary
      ? `
        color: white;
        background-color: ${backgroundColor};
        box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px 1px inset;
      `
      : `
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `};

  ${({ size }) => handleSize(size)};
`;
