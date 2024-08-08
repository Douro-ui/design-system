import React, { useEffect, useState } from 'react';
import {
  BreadcrumbContainer,
  BreadcrumbGroupStyled,
  SeparatorStyled,
} from './breadcrumb.styles';
import Breadcrumb from './Breadcrumb';
import type {
  BreadcrumbGroupProps,
  BreadcrumbStyledProps,
} from './breadcrumb.types';
import { deepMerge, useTheme } from '@douro-ui/react';

const BreadcrumbGroup = ({
  breadcrumbs = [],
  separator = '>',
  styled,
  ...props
}: BreadcrumbGroupProps): React.ReactNode => {
  const theme = useTheme();
  const [currentBreadcrumbs, setCurrentBreadcrumbs] =
    useState<string[]>(breadcrumbs);

  useEffect(() => {
    setCurrentBreadcrumbs(breadcrumbs);
  }, [breadcrumbs]);

  const defaultThemeValues: BreadcrumbStyledProps = {
    color: theme.colors.neutral.silver.shade30,
    colorHover: theme.colors.neutral.silver.shade20,
    colorActive: theme.colors.neutral.silver.shade10,
  };

  const mergedThemeValues = deepMerge<BreadcrumbStyledProps>(
    defaultThemeValues,
    styled,
  );

  const handleBreadcrumbClick = (index: number): void => {
    setCurrentBreadcrumbs(breadcrumbs.slice(0, index + 1));
  };

  return (
    <BreadcrumbGroupStyled
      styled={mergedThemeValues as Required<BreadcrumbStyledProps>}
      aria-label="breadcrumb"
      {...props}
    >
      {currentBreadcrumbs.map((breadcrumb: string, index: number) => (
        <BreadcrumbContainer key={index}>
          <Breadcrumb onClick={() => handleBreadcrumbClick(index)}>
            {breadcrumb}
          </Breadcrumb>
          {index < currentBreadcrumbs.length - 1 && (
            <SeparatorStyled>{separator}</SeparatorStyled>
          )}
        </BreadcrumbContainer>
      ))}
    </BreadcrumbGroupStyled>
  );
};

export default BreadcrumbGroup;
