import { BreakpointsType } from '../../react';
import { Breakpoints } from '../../react/src/theme/theme.constants';

export const getWindowSize = (
  breakpoints: BreakpointsType,
  windowWidth: number,
): Breakpoints => {
  if (windowWidth >= breakpoints.desktopLarge) {
    return Breakpoints.DESKTOP_LARGE;
  } else if (windowWidth >= breakpoints.desktop) {
    return Breakpoints.DESKTOP;
  } else if (windowWidth >= breakpoints.tablet) {
    return Breakpoints.TABLET;
  }
  return Breakpoints.MOBILE;
};
