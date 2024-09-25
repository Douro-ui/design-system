import { renderHook, waitFor } from '../../../../../../tests/test-utils';
import { useToaster } from '../useToaster';

jest.useFakeTimers();

describe('useToaster', () => {
  it('should be visible by default and close after the duration', async () => {
    const { result } = renderHook(() => useToaster({ duration: 3000 }));
    expect(result.current.visible).toBe(true);
    await waitFor(
      () => {
        expect(result.current.visible).toBe(false);
      },
      { timeout: 3500 },
    );
  });

  it('should set progress based on duration', async () => {
    const { result } = renderHook(() => useToaster({ duration: 3000 }));
    expect(result.current.progress).toBe(100);

    await waitFor(
      () => {
        expect(result.current.progress).toBeLessThan(100);
        expect(result.current.progress).toBeGreaterThan(0);
      },
      { timeout: 3000 },
    );

    await waitFor(
      () => {
        expect(result.current.progress).toBeCloseTo(0, 5);
      },
      { timeout: 3000 },
    );
  });

  it('should close immediately when closeToaster is called', async () => {
    const onClose = jest.fn();
    const { result } = renderHook(() =>
      useToaster({ duration: 3000, onClose }),
    );
    waitFor(() => {
      result.current.closeToaster();
    });
    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(result.current.visible).toBe(true);
    });
  });

  it('should reset visibility and progress if duration is 0', async () => {
    const { result } = renderHook(() => useToaster({ duration: 0 }));
    await waitFor(() => {
      expect(result.current.visible).toBe(true);
      expect(result.current.progress).toBe(100);
    });
  });

  it('should clear timers on unmount', async () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

    const { unmount } = renderHook(() => useToaster({ duration: 3000 }));
    unmount();

    await waitFor(
      () => {
        expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
        expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
      },
      { timeout: 1000 },
    );

    clearIntervalSpy.mockRestore();
    clearTimeoutSpy.mockRestore();
  });

  it('should set isHovered to true and clear timers on mouse enter', async () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

    const { result } = renderHook(() => useToaster({ duration: 3000 }));

    expect(result.current.isHovered).toBe(false);

    waitFor(() => {
      result.current.handleMouseEnter();
    });

    await waitFor(() => {
      expect(result.current.isHovered).toBe(true);
    });

    expect(clearIntervalSpy).toHaveBeenCalled();
    expect(clearTimeoutSpy).toHaveBeenCalled();

    clearIntervalSpy.mockRestore();
    clearTimeoutSpy.mockRestore();
  });

  it('should set isHovered to false and start timer on mouse leave', async () => {
    const { result } = renderHook(() => useToaster({ duration: 3000 }));

    waitFor(() => {
      result.current.handleMouseEnter();
    });

    await waitFor(() => {
      expect(result.current.isHovered).toBe(true);
    });

    waitFor(() => {
      result.current.handleMouseLeave();
    });

    await waitFor(
      () => {
        expect(result.current.isHovered).toBe(false);
      },
      { timeout: 1000 },
    );

    await waitFor(
      () => {
        expect(result.current.progress).toBeLessThan(100);
      },
      { timeout: 1000 },
    );
  });
});
