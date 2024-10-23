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
    color: theme.colors.brand.primary,
    colorHover: theme.colors.brand.primary,
    colorFocus: theme.colors.brand.primary,
    colorActive: theme.colors.brand.secondary,
    borderColorFocus: theme.colors.extended.blue.shade50,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight.REGULAR,
    fontFamily: theme.fontFamily.text,
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
