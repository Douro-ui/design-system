import { ReactNode } from 'react';
import {
  GridElements,
  GridItemProps,
  GridProps,
  GridStyledProps,
} from './grid.types';
import {
  GridComponent,
  GridItemComponent as _GridItemComponent,
} from './grid.styles';
import { deepMerge, useTheme } from '@douro-ui/react';

export const GridItem = ({
  as = 'div',
  column,
  row,
  spanColumn,
  spanRow,
  children,
  styled,
  ...props
}: GridItemProps & GridElements): ReactNode => {
  const GridItemComponent = _GridItemComponent({ as });

  const theme = useTheme();

  const defaultThemeValues: GridStyledProps = {
    color: theme.colors.neutral.silver.shade10,
    backgroundColor: theme.colors.neutral.cold.shade70,
    height: '100px',
  };

  const mergedThemeValues = deepMerge<GridStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <GridItemComponent
      column={column}
      row={row}
      spanColumn={spanColumn}
      spanRow={spanRow}
      styled={mergedThemeValues as Required<GridStyledProps>}
      {...props}
    >
      {children}
    </GridItemComponent>
  );
};

export const Grid = ({
  columns = 1,
  rows = 1,
  gap = '16px',
  children,
  styled,
  ...rest
}: GridProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: GridStyledProps = {
    color: theme.colors.neutral.silver.shade10,
    backgroundColor: theme.colors.neutral.cold.shade70,
  };

  const mergedThemeValues = deepMerge<GridStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <GridComponent
      styled={mergedThemeValues as Required<GridStyledProps>}
      columns={columns}
      rows={rows}
      gap={gap}
      {...rest}
    >
      {children}
    </GridComponent>
  );
};
