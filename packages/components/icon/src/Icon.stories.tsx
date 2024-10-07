import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Icon from './Icon';
import { IconProps } from './icon.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';

const meta: Meta<IconProps> = {
  title: 'Example/Icon',
  component: Icon,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, IconProps>) => (
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
    name: 'chevron-down',
    size: 'md',
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['chevron-down', 'chevron-up', 'close'],
      },
    },
    size: {
      control: { options: ['sm', 'md', 'lg'] },
    },
  },
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<IconProps>;

export const ChevronDown: Story = {
  args: {
    name: 'chevron-down',
    size: 'md',
  },
};

export const ChevronUp: Story = {
  args: {
    name: 'chevron-up',
    size: 'md',
  },
};

export const CloseIcon: Story = {
  args: {
    name: 'close',
    size: 'md',
  },
};
