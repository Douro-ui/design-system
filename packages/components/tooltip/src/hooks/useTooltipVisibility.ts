import { useEffect, useRef, useState } from 'react';
import { UseTooltipVisibilityProps } from '../tooltip.types';

export const useTooltipVisibility = (
  delay: number,
  duration?: number,
): UseTooltipVisibilityProps => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const durationTimeoutRef = useRef<number | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (delay) {
      timeoutRef.current = window.setTimeout(() => {
        setVisible(true);
      }, delay);
    } else {
      setVisible(true);
    }

    if (duration && duration > 0) {
      durationTimeoutRef.current = window.setTimeout(() => {
        setVisible(false);
      }, delay + duration);
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (durationTimeoutRef.current) {
      clearTimeout(durationTimeoutRef.current);
      durationTimeoutRef.current = null;
    }

    setVisible(false);
  };

  const toggleTooltip = () => {
    if (visible) {
      hideTooltip();
    } else {
      showTooltip();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { visible, showTooltip, hideTooltip, toggleTooltip };
};
