import styled from '@emotion/styled';
import type { BreadcrumbStyledProps } from './breadcrumb.types';

export const BreadcrumbGroupStyled = styled.nav<{
  styled: Required<BreadcrumbStyledProps>;
}>`
  display: flex;
  align-items: center;
`;

export const SeparatorStyled = styled.span`
  margin: 0 0.5rem;
`;

export const BreadcrumbStyled = styled.div<{
  styled: Required<BreadcrumbStyledProps>;
}>`
  color: ${({ styled }) => styled.color};
  background-color: ${({ styled }) => styled.backgroundColor};
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
  }

  &:active {
    color: ${({ styled }) => styled.colorActive};
    background: ${({ styled }) => styled.backgroundColorActive};
  }
`;
