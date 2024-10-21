import styled, { StyledComponent } from '@emotion/styled';
import { GridElements, GridItemProps, GridProps } from './grid.types';

export const GridItemComponent = ({
  as,
}: GridElements): StyledComponent<GridItemProps> => {
  return styled(as || 'div')<GridItemProps>`
    grid-column: ${({ column }) => (column ? column : 'auto')} /
      ${({ spanColumn }) => (spanColumn ? `span ${spanColumn}` : 'auto')};
    grid-row: ${({ row }) => (row ? row : 'auto')} /
      ${({ spanRow }) => (spanRow ? `span ${spanRow}` : 'auto')};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      grid-column: ${({ column }) => column} / span
        ${({ spanColumn }) => spanColumn};
      grid-row: ${({ row }) => row} / span ${({ spanRow }) => spanRow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      grid-column: 1 / -1;
      grid-row: auto;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      grid-column: 1 / -1;
      grid-row: auto;
    }
  `;
};
export const GridComponent = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: ${({ gap }) => gap};
  width: 100vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;
