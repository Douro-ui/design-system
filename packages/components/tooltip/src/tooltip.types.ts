import React from 'react';

export interface TooltipStyledProps {
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  colorHover?: string;
  colorFocus?: string;
  colorActive?: string;
  fontSize?: string;
  fontWeight?: number;
}

export interface TooltipProps {
  styled?: TooltipStyledProps;
  label?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  childrenLabel?: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
  isFixedBottom?: boolean;
  trigger?: 'hover' | 'click';
}

export interface calculatePositionProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  isFixedBottom?: boolean;
  triggerRect: DOMRect;
  tooltipRect: DOMRect;
}

export interface handleEventsProps {
  trigger: 'hover' | 'click';
  showTooltip: () => void;
  hideTooltip: () => void;
  toggleTooltip: () => void;
}

export interface UseTooltipVisibilityProps {
  visible: boolean;
  showTooltip: () => void;
  hideTooltip: () => void;
  toggleTooltip: () => void;
}
