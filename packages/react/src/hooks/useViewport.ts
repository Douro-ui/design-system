import { useTheme, useWindowDimensions } from '.';

type Viewport = {
  isSmallDevice: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopLarge: boolean;
};

export const useViewport = (): Viewport => {
  const {
    breakpoints: { mobile, tablet, desktop, desktopLarge },
  } = useTheme();
  const { width } = useWindowDimensions();

  if (!width) {
    return {
      isSmallDevice: false,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isDesktopLarge: false,
    };
  }

  const isSmallDevice = Boolean(width && width <= mobile);
  const isMobile = Boolean(width && width > mobile && width <= tablet);
  const isTablet = Boolean(width && width > tablet && width <= desktop);
  const isDesktop = Boolean(width && width > desktop && width <= desktopLarge);
  const isDesktopLarge = Boolean(width && width > desktopLarge);

  return {
    isSmallDevice,
    isMobile,
    isTablet,
    isDesktop,
    isDesktopLarge,
  };
};
