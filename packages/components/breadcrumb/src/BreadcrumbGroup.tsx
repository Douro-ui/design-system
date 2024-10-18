import React, { useEffect, useRef, useState } from 'react';
import {
  BreadcrumbContainer,
  BreadcrumbDropdown,
  BreadcrumbDropdownRow,
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
  const [truncatedBreadcrumbs, setTruncatedBreadcrumbs] = useState<string[]>();
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

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
    if (displayedBreadcrumbs[index] === '...' && !isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setCurrentBreadcrumbs(breadcrumbs.slice(0, index + 1));
      setDisplayedBreadcrumbs(breadcrumbs.slice(0, index + 1));

      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    }
  };

  useEffect(() => {
    const truncateBreadcrumbs = () => {
      if (breadcrumbRef.current) {
        const containerWidth = window.innerWidth - 32;
        const breadcrumbElements = breadcrumbRef.current.children;

        let totalWidth =
          (breadcrumbElements[breadcrumbElements.length - 1] as HTMLElement)
            .offsetWidth +
          25 +
          8;
        const displayed = [];

        for (let i = 0; i < breadcrumbElements.length; i++) {
          const item = breadcrumbElements[i] as HTMLElement;
          const itemWidth = item.offsetWidth + 8;

          if (totalWidth + itemWidth > containerWidth) {
            if (displayed.length > 0) {
              displayed.push('...');
            }
            displayed.push(currentBreadcrumbs[currentBreadcrumbs.length - 1]);
            setTruncatedBreadcrumbs(
              currentBreadcrumbs.slice(i, currentBreadcrumbs.length - 1),
            );
            break;
          }

          totalWidth += itemWidth;
          displayed.push(currentBreadcrumbs[i]);
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

          {isDropdownOpen && index === displayedBreadcrumbs.length - 2 && (
            <BreadcrumbDropdown>
              {truncatedBreadcrumbs?.map(
                (breadcrumb: string, index2: number) => (
                  <BreadcrumbDropdownRow
                    key={index2}
                    onClick={() =>
                      handleBreadcrumbClick(
                        currentBreadcrumbs.indexOf(breadcrumb),
                      )
                    }
                  >
                    {breadcrumb}
                  </BreadcrumbDropdownRow>
                ),
              )}
            </BreadcrumbDropdown>
          )}
        </BreadcrumbContainer>
      ))}
    </BreadcrumbGroupStyled>
  );
};

export default BreadcrumbGroup;
