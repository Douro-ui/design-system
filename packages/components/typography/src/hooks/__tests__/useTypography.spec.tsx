import { renderHook } from '../../../../../../tests/test-utils';
import {
  useResponsiveDisplayTypography,
  useResponsiveHeadingTypography,
  useResponsiveBodyTypography,
} from '../useTypography';
import {
  Breakpoints,
  getWindowSize,
  useTheme,
  useWindowDimensions,
} from '@douro-ui/react';
import { getResponsiveTypography } from '../../utils';
import { mockTheme } from '../../../../../../tests/__mocks__/theme';

jest.mock('@douro-ui/react', () => ({
  Breakpoints: {
    MOBILE: 'MOBILE',
    TABLET: 'TABLET',
    DESKTOP: 'DESKTOP',
    DESKTOP_LARGE: 'DESKTOP_LARGE',
  },
  getWindowSize: jest.fn(),
  useTheme: jest.fn(() => mockTheme),
  useWindowDimensions: jest.fn(),
}));
jest.mock('../../utils', () => ({
  getResponsiveTypography: jest.fn(),
}));

const mockWindowDimensions = { width: 800 };

describe('useResponsiveDisplayTypography', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useWindowDimensions as jest.Mock).mockReturnValue(mockWindowDimensions);
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
  });

  test('should return correct typography styles for a given displayType', () => {
    (getWindowSize as jest.Mock).mockReturnValue(Breakpoints.TABLET);
    (getResponsiveTypography as jest.Mock).mockReturnValue({
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 500,
    });

    const { result } = renderHook(() =>
      useResponsiveDisplayTypography('display1'),
    );

    expect(getWindowSize).toHaveBeenCalledWith(
      mockTheme.breakpoints,
      mockWindowDimensions.width,
    );
    expect(getResponsiveTypography).toHaveBeenCalledWith(Breakpoints.TABLET, {
      displayListParam: mockTheme.typography.display.display1,
    });
    expect(result.current).toEqual({
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 500,
    });
  });
  test('should return correct typography styles for a given headingType', () => {
    (getWindowSize as jest.Mock).mockReturnValue(Breakpoints.DESKTOP);
    (getResponsiveTypography as jest.Mock).mockReturnValue({
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
    });

    const { result } = renderHook(() => useResponsiveHeadingTypography('h1'));

    expect(getWindowSize).toHaveBeenCalledWith(
      mockTheme.breakpoints,
      mockWindowDimensions.width,
    );
    expect(getResponsiveTypography).toHaveBeenCalledWith(Breakpoints.DESKTOP, {
      headingListParam: mockTheme.typography.heading.h1,
    });
    expect(result.current).toEqual({
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
    });
  });
  test('should return correct typography styles for a given bodyType', () => {
    (getWindowSize as jest.Mock).mockReturnValue(Breakpoints.DESKTOP);
    (getResponsiveTypography as jest.Mock).mockReturnValue({
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: 700,
    });

    const { result } = renderHook(() => useResponsiveBodyTypography('body1'));

    expect(getWindowSize).toHaveBeenCalledWith(
      mockTheme.breakpoints,
      mockWindowDimensions.width,
    );
    expect(getResponsiveTypography).toHaveBeenCalledWith(Breakpoints.DESKTOP, {
      bodyListParam: mockTheme.typography.body.body1,
    });
    expect(result.current).toEqual({
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: 700,
    });
  });
  test('should use MOBILE breakpoint for display, heading, and body typography if width is undefined', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({
      width: undefined,
    });
    (getWindowSize as jest.Mock).mockReturnValue(Breakpoints.MOBILE);

    (getResponsiveTypography as jest.Mock)
      .mockReturnValueOnce({
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: 400,
      })
      .mockReturnValueOnce({
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
      })
      .mockReturnValueOnce({
        fontSize: '10px',
        lineHeight: '12px',
        fontWeight: 400,
      });

    const { result: displayResult } = renderHook(() =>
      useResponsiveDisplayTypography('display1'),
    );

    const { result: headingResult } = renderHook(() =>
      useResponsiveHeadingTypography('h1'),
    );

    const { result: bodyResult } = renderHook(() =>
      useResponsiveBodyTypography('body1'),
    );

    expect(getWindowSize).not.toHaveBeenCalledWith();

    expect(getResponsiveTypography).toHaveBeenCalledWith(Breakpoints.MOBILE, {
      displayListParam: mockTheme.typography.display.display1,
    });

    expect(getResponsiveTypography).toHaveBeenCalledWith(Breakpoints.MOBILE, {
      headingListParam: mockTheme.typography.heading.h1,
    });

    expect(getResponsiveTypography).toHaveBeenCalledWith(Breakpoints.MOBILE, {
      bodyListParam: mockTheme.typography.body.body1,
    });
    expect(displayResult.current).toEqual({
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 400,
    });

    expect(headingResult.current).toEqual({
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
    });

    expect(bodyResult.current).toEqual({
      fontSize: '10px',
      lineHeight: '12px',
      fontWeight: 400,
    });
  });
});
