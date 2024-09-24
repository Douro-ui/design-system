import { calculatePositionProps } from '../tooltip.types';

export const calculatePosition = ({
  position,
  triggerRect,
  tooltipRect,
  isFixedBottom = false,
}: calculatePositionProps): {
  top: number;
  left: number;
} => {
  const paddingY = 16;
  let top = 0;
  let left = 0;

  if (isFixedBottom) {
    top = window.innerHeight - tooltipRect.height - paddingY;
    left = (window.innerWidth - tooltipRect.width) / 2;
    return { top, left };
  }

  switch (position) {
    case 'top':
      top = triggerRect.top - tooltipRect.height - paddingY;
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
      break;
    case 'bottom':
      top = triggerRect.bottom + paddingY;
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
      break;
    case 'left':
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.left - tooltipRect.width - paddingY;
      break;
    case 'right':
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
      left = triggerRect.right + paddingY;
      break;
    default:
      top = triggerRect.bottom + paddingY;
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
      break;
  }

  return { top, left };
};
