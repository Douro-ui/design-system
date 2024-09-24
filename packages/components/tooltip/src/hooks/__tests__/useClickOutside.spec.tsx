import { renderHook } from '../../../../../../tests/test-utils';
import { useClickOutside } from '../useClickOutside';
import { fireEvent } from '@testing-library/react';

describe('useClickOutside', () => {
  let ref: { current: HTMLDivElement };

  beforeAll(() => {
    ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);
  });

  afterAll(() => {
    document.body.removeChild(ref.current);
  });

  it('should trigger the handler when clicking outside the element', () => {
    const handler = jest.fn();

    renderHook(() => useClickOutside(ref, handler));

    fireEvent.mouseDown(document.body);

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should not trigger the handler when clicking inside the element', () => {
    const handler = jest.fn();

    renderHook(() => useClickOutside(ref, handler));

    fireEvent.mouseDown(ref.current);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should clean up event listeners on unmount', () => {
    const handler = jest.fn();

    const { unmount } = renderHook(() => useClickOutside(ref, handler));

    fireEvent.mouseDown(document.body);
    expect(handler).toHaveBeenCalledTimes(1);

    handler.mockReset();
    unmount();

    fireEvent.mouseDown(document.body);

    expect(handler).not.toHaveBeenCalled();
  });
});
