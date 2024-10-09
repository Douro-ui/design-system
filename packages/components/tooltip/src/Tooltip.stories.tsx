import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import { TooltipProps } from './tooltip.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import Button from '@douro-ui/button';

const meta: Meta<TooltipProps> = {
  title: 'Example/Tooltip',
  component: Tooltip,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, TooltipProps>) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    position: 'top',
    childrenLabel: 'Hover me!',
    children: 'Tooltip works',
  },
} satisfies Meta<TooltipProps>;

export default meta;

type Story = StoryObj<TooltipProps>;

export const DefaultVersion: Story = {
  args: {},
};

export const Click: Story = {
  args: {
    position: 'top',
    childrenLabel: 'Click me!',
    trigger: 'click',
    openDelay: 500,
    closeDelay: 5000,
    children: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
        }}
      >
        <div>
          <p style={{ margin: 0 }}>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <Button typeBtn="primary">Click Me</Button>
        </div>
      </div>
    ),
  },
};