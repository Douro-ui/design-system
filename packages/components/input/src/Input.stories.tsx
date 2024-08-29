import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Input from './Input';
import { InputProps } from './input.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { fn } from '@storybook/test';

const meta: Meta<InputProps> = {
  title: 'Example/Input',
  component: Input,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, InputProps>) => (
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
    label: 'Name',
    placeholder: 'Enter your name here',
    disabled: false,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: fn(),
  },
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<InputProps>;

export const Primary: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    disabled: false,
  },
};
