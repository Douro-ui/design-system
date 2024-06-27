import styled from '@emotion/styled';
import { ButtonProps } from './button.types';
// import theme from '../../../react/src/tokens/themes/theme';
import { css } from '@emotion/react';

const handleSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'extra-small':
      return 'font-size: 12px;';
    case 'small':
      return 'font-size: 14px;';
    case 'medium':
      return 'font-size: 14px; padding: 9px 16px;';
    case 'large':
      return 'font-size: 16px; padding: 10px 24px;';
    default:
      return 'font-size: 14px; padding: 9px 16px;';
  }
};

export const ButtonStyled = styled.button<ButtonProps>`
  font-weight: 700;
  outline: none;
  border: none;
  box-shadow: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 16px;
  line-height: 140%;
  position: relative;
  transition: .2s ease;

  svg {
    margin-right: 8px;
    width: 16px;
    max-width: 32px;
    max-height: 32px;
  }
  
  &:disabled{
    pointer-events: none;
  }

  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}

  ${({ size }) => handleSize(size)};

  ${(props) =>
    props.typeBtn === 'primary' &&
    css`
      background-color: #298DCC;
      color: #FFFFFF;

      &:hover {
        background-color: #005E99;
        color: #FFFFFF;
      }

      &:active,
      &:focus {
        background-color: #003A5E;
        color: #FFFFFF;
      }

      &:disabled {
        background-color: #E4E4E4;
      }

      svg {
        fill: #FFFFFF;
      }
    `}

  ${(props) =>
    props.typeBtn === 'secondary' &&
    css`
      background-color: #FFFFFF;
      color: #484848;
      border: 1px solid #BCBCBC;

      &:hover {
        border-color: #767676;
      }

      &:active,
      &:focus {
        border-color: #2D2D2D;
        color: #2D2D2D;
      }

      &:disabled {
        border-color: #BCBCBC;
        color: #BCBCBC;
      }

      svg {
        fill: #2D2D2D;
      }

      &.blue {
        border-color: #298DCC;
        color: #298DCC;
      }
    `}

  ${(props) =>
    props.typeBtn === 'tertiary' &&
    css`
      background-color: #FFFFFF;
      color: #484848;
      border: 1px solid #FFFFFF;

      &.active {
        font-weight: 600;
        border-color: #2D2D2D;
      }

      &.icon {
        background-color: transparent;
        border: none;
        margin-left: 26px;
        padding: 0;
      }
    `}

    ${(props) =>
      props.typeBtn === 'error' &&
      css`
        background-color: #B24747;
        color: #FFFFFF;

        &:hover {
          background-color: #802626;
        }

        &:active,
        &:focus {
          background-color: #661414;
        }

        &:disabled {
          background-color: #E4E4E4;
        }
      `}
`;