import { useTheme, useWindowDimensions } from './index';
import { useMemo } from 'react';
import {
  BodyType,
  DisplayType,
  HeadingType,
  TypographyStyledProps,
  TypographyType,
} from '../../../components/typography';
import { getWindowSize } from '../../../components/utils';
import { getResponsiveTypography } from '../../../components/utils';
import { Breakpoints } from '../theme/theme.constants';

export const useResponsiveDisplayTypography = (
  displayType: DisplayType,
): TypographyStyledProps => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return useMemo(() => {
    const { breakpoints } = theme;
    const currentBreakpoint =
      width != undefined
        ? getWindowSize(breakpoints, width)
        : Breakpoints.MOBILE;

    const displayTypeName: TypographyType =
      theme.typography.display[displayType];

    return getResponsiveTypography(currentBreakpoint, {
      displayListParam: displayTypeName,
    });
  }, [displayType, theme, width]);
};

export const useResponsiveHeadingTypography = (
  headingType: HeadingType,
): TypographyStyledProps => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return useMemo(() => {
    const { breakpoints } = theme;
    const currentBreakpoint =
      width !== undefined
        ? getWindowSize(breakpoints, width)
        : Breakpoints.MOBILE;

    const headingTypeName: TypographyType =
      theme.typography.heading[headingType];

    return getResponsiveTypography(currentBreakpoint, {
      headingListParam: headingTypeName,
    });
  }, [headingType, theme, width]);
};

export const useResponsiveBodyTypography = (
  bodyType: BodyType,
): TypographyStyledProps => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return useMemo(() => {
    const { breakpoints } = theme;
    const currentBreakpoint =
      width !== undefined
        ? getWindowSize(breakpoints, width)
        : Breakpoints.MOBILE;

    const bodyTypeName: TypographyType = theme.typography.body[bodyType];

    return getResponsiveTypography(currentBreakpoint, {
      bodyListParam: bodyTypeName,
    });
  }, [bodyType, theme, width]);
};
