import { renderHook, waitFor } from '../../../../../tests/test-utils';
import { useWindowDimensions } from '../useWindowDimensions';

const setWindowDimensions = (
  width: number | undefined,
  height: number | undefined,
) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  });
};

describe('useWindowDimensions', () => {
  beforeEach(() => {
    setWindowDimensions(undefined, undefined);
  });

  test('should start with undefined width and height', () => {
    const { result } = renderHook(() => useWindowDimensions());
    expect(result.current.width).toBeUndefined();
    expect(result.current.height).toBeUndefined();
  });

  test('should defined the width and height after the module creation', () => {
    setWindowDimensions(1024, 768);
    const { result } = renderHook(() => useWindowDimensions());
    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  test('should update width and height on window resize', async () => {
    const { result } = renderHook(() => useWindowDimensions());

    await waitFor(async () => {
      setWindowDimensions(1280, 720);
      window.dispatchEvent(new Event('resize'));
    });

    await waitFor(() => {
      expect(result.current.width).toBe(1280);
      expect(result.current.height).toBe(720);
    });
  });

  test('should clean up the resize listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useWindowDimensions());
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    );
  });
});
