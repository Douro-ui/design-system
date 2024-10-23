import styled from '@emotion/styled';
import type {
  BreadcrumbGroupProps,
  BreadcrumbStyledProps,
} from './breadcrumb.types';

export const BreadcrumbGroupStyled = styled.nav<
  {
    styled: Required<BreadcrumbStyledProps>;
  } & BreadcrumbGroupProps
>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 4rem;
  background-color: ${({ styled }) => styled.backgroundColor};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet + 1}px) {
    &:last-child .breadcrumb-active {
      font-weight: ${({ styled }) => styled.fontWeightActive};
    }
  }
`;

export const BreadcrumbContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  position: relative;
`;

export const BreadcrumbStyled = styled.div<{
  styled: Required<BreadcrumbStyledProps>;
}>`
  color: ${({ styled }) => styled.color};
  font-size: ${({ styled }) => styled.fontSize};
  font-weight: ${({ styled }) => styled.fontWeight};
  font-family: ${({ styled }) => styled.fontFamily};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.2s ease;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: ${({ styled }) => styled.colorHover};
    text-decoration: underline;
  }

  &:focus {
    color: ${({ styled }) => styled.colorHover};
    box-shadow: 0 0 0 0.063rem ${({ styled }) => styled.borderColorFocus};
  }

  &:active {
    color: ${({ styled }) => styled.colorActive};
    text-decoration: underline;
  }
`;

export const BreadcrumbDropdown = styled.div`
  background-color: white;
  width: 7.063rem;
  height: auto;
  max-height: 10.938rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1.813rem;
  left: -0.938rem;
  box-shadow: 0 0.125rem 0.5rem 0 rgb(38 38 38 / 20%);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.313rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 0.625rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: #808080 white;
  }
`;

export const BreadcrumbDropdownRow = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
