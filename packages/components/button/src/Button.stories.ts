import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    typeBtn: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    typeBtn: 'secondary',
    label: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    typeBtn: 'tertiary',
    label: 'Button',
  },
};

export const Error: Story = {
  args: {
    typeBtn: 'error',
    label: 'Button',
  },
};
