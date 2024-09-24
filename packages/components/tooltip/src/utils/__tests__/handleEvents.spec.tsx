import React from 'react';
import { handleEvents } from '../handleEvents';
import { handleEventsProps } from '../../tooltip.types';

describe('handleEvents', () => {
  let showTooltip: jest.Mock;
  let hideTooltip: jest.Mock;
  let toggleTooltip: jest.Mock;

  beforeEach(() => {
    showTooltip = jest.fn();
    hideTooltip = jest.fn();
    toggleTooltip = jest.fn();
  });

  it('should return onMouseEnter and onMouseLeave for hover trigger', () => {
    const trigger = 'hover';
    const props: handleEventsProps = {
      trigger,
      showTooltip,
      hideTooltip,
      toggleTooltip,
    };
    const events = handleEvents(props);

    expect(events).toHaveProperty('onMouseEnter');
    expect(events).toHaveProperty('onMouseLeave');

    events.onMouseEnter?.({} as React.MouseEvent);
    expect(showTooltip).toHaveBeenCalled();

    events.onMouseLeave?.({} as React.MouseEvent);
    expect(hideTooltip).toHaveBeenCalled();
  });

  it('should return onClick for click trigger', () => {
    const trigger = 'click';
    const props: handleEventsProps = {
      trigger,
      showTooltip,
      hideTooltip,
      toggleTooltip,
    };
    const events = handleEvents(props);

    expect(events).toHaveProperty('onClick');

    events.onClick?.({} as React.MouseEvent);
    expect(toggleTooltip).toHaveBeenCalled();
  });
});
