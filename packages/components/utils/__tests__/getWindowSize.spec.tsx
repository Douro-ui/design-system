import { renderHook } from '../../../../tests/test-utils';
import { Breakpoints } from '../../../react/src/theme/theme.constants';
import { getWindowSize } from '../getWindowSize';
import theme from '../../../react/src/theme/theme';
import { useWindowDimensions } from '../../../react';

jest.mock('../../../react');
describe('getWindowSize with useWindowDimensions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return DESKTOP_LARGE when window width is greater than or equal to desktopLarge breakpoint', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: 1500 });

    const { result } = renderHook(() => getWindowSize(theme.breakpoints, 1500));

    expect(result.current).toBe(Breakpoints.DESKTOP_LARGE);
  });

  it('should return DESKTOP when window width is greater than or equal to desktop breakpoint and less than desktopLarge', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: 1000 });

    const { result } = renderHook(() => getWindowSize(theme.breakpoints, 1000));

    expect(result.current).toBe(Breakpoints.DESKTOP);
  });

  it('should return TABLET when window width is greater than or equal to tablet breakpoint and less than desktop', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: 800 });

    const { result } = renderHook(() => getWindowSize(theme.breakpoints, 800));

    expect(result.current).toBe(Breakpoints.TABLET);
  });

  it('should return MOBILE when window width is less than tablet breakpoint', () => {
    (useWindowDimensions as jest.Mock).mockReturnValue({ width: 500 });

    const { result } = renderHook(() => getWindowSize(theme.breakpoints, 500));

    expect(result.current).toBe(Breakpoints.MOBILE);
  });
});
