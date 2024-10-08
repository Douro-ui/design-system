import { calculatePosition } from '../getPosition';
import { calculatePositionProps } from '../../tooltip.types';

describe('calculatePosition', () => {
  const triggerRect: DOMRect = {
    top: 100,
    bottom: 150,
    left: 50,
    right: 100,
    width: 50,
    height: 50,
    x: 50,
    y: 100,
    toJSON: () => ({}),
  };

  const tooltipRect: DOMRect = {
    top: 0,
    bottom: 40,
    left: 0,
    right: 80,
    width: 80,
    height: 40,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  };

  const paddingY = 16;

  it('should calculate the correct position for top', () => {
    const props: calculatePositionProps = {
      position: 'top',
      triggerRect,
      tooltipRect,
    };
    const { top, left } = calculatePosition(props);

    expect(top).toBe(triggerRect.top - tooltipRect.height - paddingY);
    expect(left).toBe(
      triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
    );
  });

  it('should calculate the correct position for bottom', () => {
    const props: calculatePositionProps = {
      position: 'bottom',
      triggerRect,
      tooltipRect,
    };
    const { top, left } = calculatePosition(props);

    expect(top).toBe(triggerRect.bottom + paddingY);
    expect(left).toBe(
      triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
    );
  });

  it('should calculate the correct position for left', () => {
    const props: calculatePositionProps = {
      position: 'left',
      triggerRect,
      tooltipRect,
    };
    const { top, left } = calculatePosition(props);

    expect(top).toBe(
      triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
    );
    expect(left).toBe(triggerRect.left - tooltipRect.width - paddingY);
  });

  it('should calculate the correct position for right', () => {
    const props: calculatePositionProps = {
      position: 'right',
      triggerRect,
      tooltipRect,
    };
    const { top, left } = calculatePosition(props);

    expect(top).toBe(
      triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
    );
    expect(left).toBe(triggerRect.right + paddingY);
  });
});
