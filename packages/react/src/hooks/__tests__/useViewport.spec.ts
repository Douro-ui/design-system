import { renderHook } from '../../../../../tests/test-utils';
import { useViewport } from '../useViewport';
import { useTheme, useWindowDimensions } from '..';

jest.mock('..', () => ({
  useTheme: jest.fn(),
  useWindowDimensions: jest.fn(),
}));

describe('useViewport Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockTheme = {
    breakpoints: {
      mobile: 480,
      tablet: 768,
      desktop: 1024,
      desktopLarge: 1440,
    },
  };

  it('should return all false when width is undefined', () => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: undefined });

    const { result } = renderHook(() => useViewport());

    expect(result.current).toEqual({
      isSmallDevice: false,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isDesktopLarge: false,
    });
  });

  it('should return isSmallDevice as true for width <= mobile', () => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: 400 });

    const { result } = renderHook(() => useViewport());

    expect(result.current).toEqual({
      isSmallDevice: true,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isDesktopLarge: false,
    });
  });

  it('should return isMobile as true for width between mobile and tablet', () => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: 600 });

    const { result } = renderHook(() => useViewport());

    expect(result.current).toEqual({
      isSmallDevice: false,
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      isDesktopLarge: false,
    });
  });

  it('should return isTablet as true for width between tablet and desktop', () => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: 900 });

    const { result } = renderHook(() => useViewport());

    expect(result.current).toEqual({
      isSmallDevice: false,
      isMobile: false,
      isTablet: true,
      isDesktop: false,
      isDesktopLarge: false,
    });
  });

  it('should return isDesktop as true for width between desktop and desktopLarge', () => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: 1200 });

    const { result } = renderHook(() => useViewport());

    expect(result.current).toEqual({
      isSmallDevice: false,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isDesktopLarge: false,
    });
  });

  it('should return isDesktopLarge as true for width >= desktopLarge', () => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: 1500 });

    const { result } = renderHook(() => useViewport());

    expect(result.current).toEqual({
      isSmallDevice: false,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isDesktopLarge: true,
    });
  });
});
