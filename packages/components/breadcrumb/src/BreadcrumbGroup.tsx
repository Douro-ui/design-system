import React, { useEffect, useRef, useState } from 'react';
import {
  BreadcrumbContainer,
  BreadcrumbGroupStyled,
} from './breadcrumb.styles';
import Breadcrumb from './Breadcrumb';
import type {
  BreadcrumbGroupProps,
  BreadcrumbStyledProps,
} from './breadcrumb.types';
import { deepMerge, useTheme } from '@douro-ui/react';

const BreadcrumbGroup = ({
  breadcrumbs = [],
  separator,
  styled,
  ...props
}: BreadcrumbGroupProps): React.ReactNode => {
  const theme = useTheme();
  const [currentBreadcrumbs, setCurrentBreadcrumbs] =
    useState<string[]>(breadcrumbs);
  const [displayedBreadcrumbs, setDisplayedBreadcrumbs] =
    useState<string[]>(breadcrumbs);
  const breadcrumbRef = useRef<HTMLDivElement>(null);

  const defaultThemeValues: BreadcrumbStyledProps = {
    fontWeightActive: theme.fontWeight.BOLD,
  };

  const mergedThemeValues = deepMerge<BreadcrumbStyledProps>(
    defaultThemeValues,
    styled,
  );

  useEffect(() => {
    setCurrentBreadcrumbs(breadcrumbs);
  }, [breadcrumbs]);

  const handleBreadcrumbClick = (index: number): void => {
    setCurrentBreadcrumbs(breadcrumbs.slice(0, index + 1));
    setDisplayedBreadcrumbs(breadcrumbs.slice(0, index + 1));
  };

  useEffect(() => {
    const truncateBreadcrumbs = () => {
      if (breadcrumbRef.current) {
        const containerWidth = window.innerWidth;
        const breadcrumbElements = breadcrumbRef.current.children;

        let totalWidth = 0;
        const displayed = [];

        for (let i = 0; i < breadcrumbElements.length; i++) {
          const item = breadcrumbElements[i] as HTMLElement;
          const itemWidth = item.offsetWidth;

          if (totalWidth + itemWidth > containerWidth) {
            if (displayed.length > 0) {
              displayed.push('...');
            }
            displayed.push(breadcrumbs[breadcrumbs.length - 1]);
            break;
          }

          totalWidth += itemWidth;
          displayed.push(breadcrumbs[i]);
        }

        setDisplayedBreadcrumbs(displayed);
      }
    };

    truncateBreadcrumbs();
  }, [currentBreadcrumbs, breadcrumbs]);

  return (
    <BreadcrumbGroupStyled
      styled={mergedThemeValues as Required<BreadcrumbStyledProps>}
      aria-label="breadcrumb"
      ref={breadcrumbRef}
      {...props}
    >
      {displayedBreadcrumbs.map((breadcrumb: string, index: number) => (
        <BreadcrumbContainer key={index}>
          <Breadcrumb
            onClick={() => handleBreadcrumbClick(index)}
            className={
              index === displayedBreadcrumbs.length - 1
                ? 'breadcrumb-active'
                : ''
            }
          >
            {breadcrumb}
          </Breadcrumb>
          {index < displayedBreadcrumbs.length - 1 && separator}
        </BreadcrumbContainer>
      ))}
    </BreadcrumbGroupStyled>
  );
};

export default BreadcrumbGroup;
