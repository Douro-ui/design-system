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

export const BreadcrumbContainer = styled.div`
  display: flex;
`;

export const BreadcrumbStyled = styled.div<{
  styled: Required<BreadcrumbStyledProps>;
}>`
  color: ${({ styled }) => styled.color};
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
    color: ${({ styled }) => styled.colorHover};
  }

  &:active {
    color: ${({ styled }) => styled.colorActive};
  }
`;
