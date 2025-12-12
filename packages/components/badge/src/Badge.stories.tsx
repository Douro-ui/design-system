import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import Badge from './Badge';
import { BadgeProps } from './badge.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import Avatar from '@douro-ui/avatar';

const meta: Meta<BadgeProps> = {
  title: 'Example/Badge',
  component: Badge,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, BadgeProps>) => (
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
    typeBadge: 'alert',
    position: 'top-right',
    size: 'md',
  },
  argTypes: {
    typeBadge: {
      control: {
        type: 'select',
        options: ['alert', 'neutral', 'success', 'warning', 'icon'],
      },
    },
    count: {
      control: 'number',
    },
    position: {
      control: 'text',
    },
    size: {
      control: { options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    },
  },
} satisfies Meta<BadgeProps>;

export default meta;

type Story = StoryObj<BadgeProps>;

export const IconBadge: Story = {
  args: {
    typeBadge: 'icon',
    position: 'top-right',
    size: 'lg',
    icon: () => <svg>Icon</svg>,
    children: (
      <Avatar typeAvt="base" size="lg">
        DUI
      </Avatar>
    ),
  },
};

export const Alert: Story = {
  args: {
    typeBadge: 'alert',
    count: 5,
    position: 'top-right',
    size: 'xs',
    children: (
      <Avatar typeAvt="base" size="lg">
        DUI
      </Avatar>
    ),
  },
};

export const Neutral: Story = {
  args: {
    typeBadge: 'neutral',
    count: 5,
    position: 'top-left',
    size: 'sm',
    children: (
      <Avatar typeAvt="base" size="lg">
        DUI
      </Avatar>
    ),
  },
};

export const Success: Story = {
  args: {
    typeBadge: 'success',
    count: 5,
    position: 'bottom-left',
    size: 'md',
    children: (
      <Avatar typeAvt="base" size="lg">
        DUI
      </Avatar>
    ),
  },
};

export const Warning: Story = {
  args: {
    typeBadge: 'warning',
    count: 5,
    position: 'bottom-right',
    size: 'lg',
    children: (
      <Avatar typeAvt="base" size="lg">
        DUI
      </Avatar>
    ),
  },
};
