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
// import { Tooltip } from '@douro-ui/tooltip';
import { deepMerge, useTheme, useWindowDimensions } from '@douro-ui/react';

const BreadcrumbGroup = ({
  breadcrumbs = [],
  separator = '>',
  iconMobile = '<',
  lastVisibleBreadcrumbs = 3,
  styled,
  ...props
}: BreadcrumbGroupProps): React.ReactNode => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  const isMobile = width !== undefined && width <= theme.breakpoints.tablet;
  const [currentBreadcrumbs, setCurrentBreadcrumbs] =
    useState<string[]>(breadcrumbs);
  const [displayedBreadcrumbs, setDisplayedBreadcrumbs] =
    useState<string[]>(breadcrumbs);
  const [truncatedBreadcrumbs, setTruncatedBreadcrumbs] = useState<string[]>();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const breadcrumbRef = useRef<HTMLDivElement>(null);

  const defaultThemeValues: BreadcrumbStyledProps = {
    fontWeightActive: theme.fontWeight.BOLD,
    backgroundColor: theme.colors.brand.white,
  };

  const mergedThemeValues = deepMerge<BreadcrumbStyledProps>(
    defaultThemeValues,
    styled,
  );

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      breadcrumbRef.current &&
      !breadcrumbRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setCurrentBreadcrumbs(breadcrumbs);
  }, [breadcrumbs]);

  const handleBreadcrumbClick = (
    indexDisplayed: number,
    indexCurrent?: number,
  ): void => {
    if (displayedBreadcrumbs[indexDisplayed] === '...') {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      if (isMobile) {
        setCurrentBreadcrumbs(breadcrumbs.slice(0, indexDisplayed + 1));
        setDisplayedBreadcrumbs(
          breadcrumbs.slice(indexDisplayed - 1, indexDisplayed),
        );
      } else {
        setCurrentBreadcrumbs(breadcrumbs.slice(0, indexCurrent! + 1));
        setDisplayedBreadcrumbs(breadcrumbs.slice(0, indexCurrent! + 1));
      }

      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    }
  };

  const truncateBreadcrumbs = () => {
    if (breadcrumbRef.current) {
      const containerWidth = window.innerWidth - 128;
      const breadcrumbElements = breadcrumbRef.current.children;

      let totalWidth = 25;
      const displayed = [];
      const lastBreadcrumbs = [];

      if (breadcrumbElements.length <= lastVisibleBreadcrumbs) {
        lastVisibleBreadcrumbs = 1;
      }

      for (let i = 1; i <= lastVisibleBreadcrumbs; i++) {
        const index = breadcrumbElements.length - i;

        if (index >= 0) {
          totalWidth +=
            (breadcrumbElements[index] as HTMLElement).offsetWidth + 8;
          lastBreadcrumbs.push(breadcrumbElements[index]);
        }
      }

      for (
        let i = 0;
        i < breadcrumbElements.length - lastVisibleBreadcrumbs;
        i++
      ) {
        const item = breadcrumbElements[i] as HTMLElement;
        const itemWidth = item.offsetWidth + 8;

        if (totalWidth + itemWidth > containerWidth) {
          if (displayed.length > 0) {
            displayed.push('...');
          }

          setTruncatedBreadcrumbs(
            currentBreadcrumbs.slice(
              i,
              currentBreadcrumbs.length - lastVisibleBreadcrumbs,
            ),
          );
          break;
        }

        totalWidth += itemWidth;
        displayed.push(currentBreadcrumbs[i]);
      }

      for (let i = lastVisibleBreadcrumbs; i > 0; i--) {
        const index = breadcrumbElements.length - i;
        displayed.push(currentBreadcrumbs[index]);
      }

      setDisplayedBreadcrumbs(displayed);
    }
  };

  useEffect(() => {
    if (isMobile) {
      const lastBreadcrumbs = currentBreadcrumbs.slice(-2, -1);
      setDisplayedBreadcrumbs(lastBreadcrumbs);
    } else {
      truncateBreadcrumbs();
    }
  }, [currentBreadcrumbs, breadcrumbs, isMobile]);

  return (
    <BreadcrumbGroupStyled
      styled={mergedThemeValues as Required<BreadcrumbStyledProps>}
      aria-label="breadcrumb"
      ref={breadcrumbRef}
      {...props}
    >
      {displayedBreadcrumbs.map((breadcrumb: string, index: number) => {
        // const truncatedBreadcrumb =
        //   breadcrumb.length > 50 ? `${breadcrumb.slice(0, 50)}...` : null;
        const truncatedBreadcrumb =
          breadcrumb?.length > 50
            ? `${breadcrumb.slice(0, 50)}...`
            : breadcrumb;

        return (
          <BreadcrumbContainer key={index}>
            {isMobile && iconMobile}

            <Breadcrumb
              onClick={() =>
                isMobile
                  ? handleBreadcrumbClick(
                      currentBreadcrumbs.indexOf(breadcrumb),
                    )
                  : handleBreadcrumbClick(
                      index,
                      currentBreadcrumbs.indexOf(breadcrumb),
                    )
              }
              className={
                index === displayedBreadcrumbs.length - 1
                  ? 'breadcrumb-active'
                  : ''
              }
            >
              {/* {truncatedBreadcrumb
                ? <Tooltip childrenLabel={truncatedBreadcrumb} trigger="click" position="top">
                    {breadcrumb}
                  </Tooltip>
                : breadcrumb } */}
              {truncatedBreadcrumb}
            </Breadcrumb>
            {!isMobile && index < displayedBreadcrumbs.length - 1 && separator}

            {isDropdownOpen && displayedBreadcrumbs[index] === '...' && (
              <BreadcrumbDropdown>
                {truncatedBreadcrumbs?.map(
                  (breadcrumb: string, index2: number) => (
                    <BreadcrumbDropdownRow
                      key={index2}
                      onClick={() =>
                        handleBreadcrumbClick(
                          index2,
                          currentBreadcrumbs.indexOf(breadcrumb),
                        )
                      }
                    >
                      {breadcrumb.length > 50
                        ? `${breadcrumb.slice(0, 50)}...`
                        : breadcrumb}
                    </BreadcrumbDropdownRow>
                  ),
                )}
              </BreadcrumbDropdown>
            )}
          </BreadcrumbContainer>
        );
      })}
    </BreadcrumbGroupStyled>
  );
};

export default BreadcrumbGroup;
