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
    typeTag: {
      control: {
        type: 'select',
        options: ['readonly', 'selectable', 'dismissible'],
      },
    },
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

export const DefaultTagReadonly: Story = {
  args: {
    typeTag: 'readonly',
    size: 'md',
    label: 'Label',
    disabled: false,
  },
};

export const IconTagSelectable: Story = {
  args: {
    typeTag: 'selectable',
    size: 'md',
    iconBefore: () => <Icon name="star" styled={{ fillColor: '#0B1F2F' }} />,
    label: 'Label',
    disabled: false,
  },
};

export const IconCloseTagDismissible: Story = {
  args: {
    typeTag: 'dismissible',
    size: 'md',
    iconAfter: () => <Icon name="close" styled={{ fillColor: '#0B1F2F' }} />,
    label: 'Label',
    disabled: false,
  },
};

export const BothIconTagSelectable: Story = {
  args: {
    typeTag: 'selectable',
    size: 'md',
    iconBefore: () => <Icon name="star" styled={{ fillColor: '#0B1F2F' }} />,
    iconAfter: () => <Icon name="close" styled={{ fillColor: '#0B1F2F' }} />,
    label: 'Label',
    disabled: false,
  },
};

export const DisabledTagSelectable: Story = {
  args: {
    typeTag: 'selectable',
    size: 'md',
    iconBefore: () => <Icon name="star" styled={{ fillColor: '#0B1F2F' }} />,
    label: 'Label',
    disabled: true,
  },
};
