import React from 'react';
import { BreadcrumbGroupStyled, SeparatorStyled } from './breadcrumb.styles';
import {
  BreadcrumbStyledProps,
  BreadcrumbGroupProps,
} from './breadcrumb.types';
import { deepMerge, useTheme } from '@douro-ui/react';

const BreadcrumbGroup = ({
  children,
  separator = '>',
  styled,
  ...props
}: BreadcrumbGroupProps): React.ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: BreadcrumbStyledProps = {
    color: theme.colors.neutral.silver.shade50,
    colorHover: theme.colors.neutral.silver.shade40,
    colorActive: theme.colors.neutral.silver.shade30,
    backgroundColor: theme.colors.brand.white,
    backgroundColorHover: theme.colors.brand.white,
    backgroundColorActive: theme.colors.brand.white,
  };

  const mergedThemeValues = deepMerge<BreadcrumbStyledProps>(
    defaultThemeValues,
    styled,
  );

  const childrenArray: React.ReactNode[] = React.Children.toArray(children);

  return (
    <BreadcrumbGroupStyled
      styled={mergedThemeValues as Required<BreadcrumbStyledProps>}
      {...props}
    >
      {childrenArray.map((child: React.ReactNode, index: number) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && (
            <SeparatorStyled>{separator}</SeparatorStyled>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbGroupStyled>
  );
};

export default BreadcrumbGroup;
