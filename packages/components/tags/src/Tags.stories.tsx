import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Tags from './Tags';
import { TagsProps } from './tags.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { Icon } from '@douro-ui/icon';

const meta: Meta<TagsProps> = {
  title: 'Example/Tags',
  component: Tags,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, TagsProps>) => (
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
    size: 'md',
    label: 'Label',
    disabled: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    iconBefore: {
      control: 'object',
    },
    iconAfter: {
      control: 'object',
    },
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<TagsProps>;

export default meta;

type Story = StoryObj<TagsProps>;

export const DefaultTag: Story = {
  args: {
    size: 'md',
    label: 'Label',
    disabled: false,
  },
};

export const IconTag: Story = {
  args: {
    size: 'md',
    iconBefore: () => <Icon name="star" />,
    label: 'Label',
    disabled: false,
  },
};

export const IconCloseTag: Story = {
  args: {
    size: 'md',
    iconAfter: () => <Icon name="close" />,
    label: 'Label',
    disabled: false,
  },
};

export const BothIconTag: Story = {
  args: {
    size: 'md',
    iconBefore: () => <Icon name="star" />,
    iconAfter: () => <Icon name="close" />,
    label: 'Label',
    disabled: false,
  },
};

export const DisabledTag: Story = {
  args: {
    size: 'md',
    iconBefore: () => <Icon name="star" />,
    label: 'Label',
    disabled: true,
  },
};
