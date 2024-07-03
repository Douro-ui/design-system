import styled from '@emotion/styled';
import { ButtonProps } from './button.types';
import { css } from '@emotion/react';

/* stylelint-disable */

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
  transition: 0.2s ease;

  svg {
    margin-right: 8px;
    width: 16px;
    max-width: 32px;
    max-height: 32px;
  }

  &:disabled {
    pointer-events: none;
  }

  ${({ size }) => handleSize(size)};

  ${props =>
    props.typeBtn === 'secondary' &&
    css`
      background-color: #ffffff;
      color: #484848;
      border: 1px solid #bcbcbc;

      &:hover {
        border-color: #767676;
      }

      &:active,
      &:focus {
        border-color: #2d2d2d;
        color: #2d2d2d;
      }

      &:disabled {
        border-color: #bcbcbc;
        color: #bcbcbc;
      }

      svg {
        fill: #2d2d2d;
      }

      &.blue {
        border-color: #298dcc;
        color: #298dcc;
      }
    `}

  ${props =>
    props.typeBtn === 'tertiary' &&
    css`
      background-color: #ffffff;
      color: #484848;
      border: 1px solid #ffffff;

      &.active {
        font-weight: 600;
        border-color: #2d2d2d;
      }

      &.icon {
        background-color: transparent;
        border: none;
        margin-left: 26px;
        padding: 0;
      }

      &:disabled {
        color: #bcbcbc;
      }
    `}

    ${props =>
    props.typeBtn === 'error' &&
    css`
      background-color: #b24747;
      color: #ffffff;

      &:hover {
        background-color: #802626;
      }

      &:active,
      &:focus {
        background-color: #661414;
      }

      &:disabled {
        background-color: #e4e4e4;
      }
    `}
`;
