import { renderHook, waitFor } from '../../../../../../tests/test-utils';
import { useTooltipVisibility } from '../useTooltipVisibility';

jest.useFakeTimers();

const clearTimeoutMock = jest.spyOn(global, 'clearTimeout');

describe('useTooltipVisibility', () => {
  afterEach(() => {
    jest.clearAllTimers();
    clearTimeoutMock.mockClear();
  });

  it('should show tooltip immediately if delay is 0', async () => {
    const delay = 0;
    const { result } = renderHook(() => useTooltipVisibility(delay));

    waitFor(() => {
      result.current.showTooltip();
    });

    jest.advanceTimersByTime(delay);

    await waitFor(() => {
      expect(result.current.visible).toBe(true);
    });
  });

  it('should show tooltip after the specified delay', async () => {
    const delay = 500;
    const { result } = renderHook(() => useTooltipVisibility(delay));

    waitFor(() => {
      result.current.showTooltip();
    });

    expect(result.current.visible).toBe(false);

    jest.advanceTimersByTime(delay);

    await waitFor(() => {
      expect(result.current.visible).toBe(true);
    });
  });

  it('should hide tooltip and clear timeout if hideTooltip is called before delay', () => {
    const delay = 500;
    const { result } = renderHook(() => useTooltipVisibility(delay));

    waitFor(() => {
      result.current.showTooltip();
    });

    expect(result.current.visible).toBe(false);

    waitFor(() => {
      result.current.hideTooltip();
    });

    waitFor(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(result.current.visible).toBe(false);
  });

  it('should hide tooltip automatically after the specified duration', async () => {
    const delay = 0;
    const duration = 1000;
    const { result } = renderHook(() => useTooltipVisibility(delay, duration));

    waitFor(() => {
      result.current.showTooltip();
    });

    await waitFor(() => {
      expect(result.current.visible).toBe(true);
    });

    jest.advanceTimersByTime(duration);

    await waitFor(() => {
      expect(result.current.visible).toBe(false);
    });
  });

  it('should not hide tooltip automatically if duration is 0', async () => {
    const delay = 0;
    const duration = 0;
    const { result } = renderHook(() => useTooltipVisibility(delay, duration));

    waitFor(() => {
      result.current.showTooltip();
    });

    await waitFor(() => {
      expect(result.current.visible).toBe(true);
    });

    jest.advanceTimersByTime(5000);

    await waitFor(() => {
      expect(result.current.visible).toBe(true);
    });
  });

  it('should toggle tooltip visibility when toggleTooltip is called', async () => {
    const delay = 0;
    const { result } = renderHook(() => useTooltipVisibility(delay));

    expect(result.current.visible).toBe(false);

    waitFor(() => {
      result.current.toggleTooltip();
    });

    await waitFor(() => {
      expect(result.current.visible).toBe(true);
    });

    waitFor(() => {
      result.current.toggleTooltip();
    });

    await waitFor(() => {
      expect(result.current.visible).toBe(false);
    });
  });
});
