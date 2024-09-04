import { useHeightDimension } from '../useHeightDimension';
import { renderHook, waitFor } from '../../../../../tests/test-utils';
import React from 'react';

const observeMock = jest.fn();
const unobserveMock = jest.fn();
const disconnectMock = jest.fn();

global.ResizeObserver = jest.fn(() => ({
  observe: observeMock,
  unobserve: unobserveMock,
  disconnect: disconnectMock,
})) as unknown as typeof ResizeObserver;
describe('useHeightDimension', () => {
  beforeEach(() => {
    observeMock.mockClear();
    unobserveMock.mockClear();
    disconnectMock.mockClear();
  });
  it('should initialize height as 0px when isExpanded is false', () => {
    const { result } = renderHook(() => useHeightDimension(false));

    expect(result.current.height).toBe('0px');
  });

  it('should update height to contentRef.scrollHeight when isExpanded is true', async () => {
    const mockScrollHeight = 100;
    const mockDiv = document.createElement('div');
    Object.defineProperty(mockDiv, 'scrollHeight', { value: mockScrollHeight });

    const { result, rerender } = renderHook(
      ({ isExpanded }: { isExpanded: boolean }) =>
        useHeightDimension(isExpanded),
      {
        initialProps: { isExpanded: false },
      },
    );

    await waitFor(() => {
      (
        result.current
          .contentRef as React.MutableRefObject<HTMLDivElement | null>
      ).current = mockDiv;
      rerender({ isExpanded: true });
    });

    await waitFor(() => {
      observeMock.mock.calls.forEach(([target]: [HTMLDivElement]) => {
        if (target === mockDiv) {
          result.current.height = `${mockScrollHeight}px`;
        }
      });
    });

    expect(result.current.height).toBe(`${mockScrollHeight}px`);

    await waitFor(() => {
      rerender({ isExpanded: false });
    });

    expect(result.current.height).toBe('0px');
  });
});
