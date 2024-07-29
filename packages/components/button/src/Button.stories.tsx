import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './button.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { fn } from '@storybook/test';

const meta: Meta<ButtonProps> = {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, ButtonProps>) => (
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
    size: 'lg',
    disabled: false,
    typeBtn: 'primary',
    children: 'Button',
  },
  argTypes: {
    typeBtn: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'error'],
      },
    },
    size: {
      control: { options: ['sm', 'md', 'lg', 'xl'] },
    },
    disabled: {
      control: 'boolean',
    },
    onClick: fn(),
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    typeBtn: 'primary',
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    typeBtn: 'secondary',
    onClick: fn(),
  },
};

export const Tertiary: Story = {
  args: {
    typeBtn: 'tertiary',
    onClick: fn(),
  },
};

export const Error: Story = {
  args: {
    typeBtn: 'error',
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    typeBtn: 'primary',
    disabled: true,
    onClick: fn(),
  },
};
