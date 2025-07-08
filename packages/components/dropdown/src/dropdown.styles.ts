import styled from '@emotion/styled';
import { DropdownProps, DropdownStyledProps } from './dropdown.types';

export const DropdownWrapperStyled = styled.div<{ isDisabled: boolean }>`
  position: relative;
  display: inline-block;

  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.6;
    pointer-events: none;
  `}
`;

export const DropdownLabelStyled = styled.label<{
  styled: Required<DropdownStyledProps>;
}>`
  font-size: ${({ styled }) => styled.fontSizeLabel};
  font-weight: ${({ styled }) => styled.fontWeightLabel};
  margin: 0 0.5rem 0.5rem;
  display: block;
  color: ${({ styled }) => styled.color};
`;

export const DropdownTriggerStyled = styled.div<
  {
    styled: Required<DropdownStyledProps>;
  } & DropdownProps
>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border: 0.063rem solid ${({ styled }) => styled.borderColor};
  background-color: ${({ styled }) => styled.backgroundColor};
  border-radius: ${({ styled }) => styled.borderRadius};
  gap: 0.5rem;
  color: ${({ styled }) => styled.color};

  &:hover {
    border-color: ${({ styled }) => styled.borderColorHover};
  }

  &:active {
    border-color: ${({ styled }) => styled.borderColorActive};
  }

  span {
    transform: rotate(-90deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 15rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet + 1}px) {
    width: ${({ styled }) => styled.width};
  }
`;

export const DropdownListStyled = styled.ul<
  {
    styled: Required<DropdownStyledProps>;
    isOpen: boolean;
  } & DropdownProps
>`
  list-style: none;
  margin: 0;
  padding: 0.5rem 0.75rem;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 0.063rem solid ${({ styled }) => styled.borderColor};
  border-radius: 0.25rem;
  max-height: ${({ isOpen }) => (isOpen ? '12.5rem' : '0')};
  overflow-y: auto;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${({ styled }) => styled.borderColorHover};
  }

  &:active {
    border-color: ${({ styled }) => styled.borderColorActive};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 15rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet + 1}px) {
    width: ${({ styled }) => styled.width};
  }
`;

export const DropdownItemStyled = styled.li<{
  styled: Required<DropdownStyledProps>;
  isSelected: boolean;
  isDisabled: boolean;
}>`
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background-color: ${({ styled, isSelected }) =>
    isSelected ? styled.backgroundColorItemActive : styled.backgroundColorItem};
  border-radius: ${({ styled }) => styled.borderRadius};
  font-weight: ${({ styled, isSelected }) =>
    isSelected ? styled.fontWeightActive : styled.fontWeight};

  &:hover {
    background-color: ${({ styled }) => styled.backgroundColorItemHover};
  }

  &:hover span {
    font-weight: ${({ styled }) => styled.fontWeightHover};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export const DropdownItemTextStyled = styled.span<{
  styled: Required<DropdownStyledProps>;
  isSelected: boolean;
}>`
  font-size: ${({ styled }) => styled.fontSize};
  font-weight: ${({ styled, isSelected }) =>
    isSelected ? styled.fontWeightHover : styled.fontWeight};
  color: ${({ styled }) => styled.color};
`;
