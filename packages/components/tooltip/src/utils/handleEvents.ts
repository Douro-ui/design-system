import React from 'react';
import { handleEventsProps } from '../tooltip.types';

export const handleEvents = ({
  trigger,
  showTooltip,
  hideTooltip,
  toggleTooltip,
}: handleEventsProps): React.DOMAttributes<Element> => {
  if (trigger === 'click') {
    return {
      onClick: toggleTooltip,
    };
  }

  return {
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
  };
};
