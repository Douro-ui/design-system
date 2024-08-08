import { deepMerge, useTheme } from '@douro-ui/react';
import { BreadcrumbStyled } from './breadcrumb.styles';
import type {
  BreadcrumbProps,
  BreadcrumbStyledProps,
} from './breadcrumb.types';
import React from 'react';

const Breadcrumb = ({
  children,
  styled,
  onClick,
  ...props
}: BreadcrumbProps): React.ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: BreadcrumbStyledProps = {
    color: theme.colors.neutral.silver.shade30,
    colorHover: theme.colors.neutral.silver.shade20,
    colorActive: theme.colors.neutral.silver.shade10,
  };

  const mergedThemeValues = deepMerge<BreadcrumbStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <BreadcrumbStyled
      styled={mergedThemeValues as Required<BreadcrumbStyledProps>}
      onClick={onClick}
      {...props}
    >
      {children}
    </BreadcrumbStyled>
  );
};

export default Breadcrumb;
