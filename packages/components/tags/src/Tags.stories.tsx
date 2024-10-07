import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Tags from './Tags';
import { TagsProps } from './tags.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';

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
    icon: 'icon.svg',
    iconPosition: 'left',
    hasIconClose: false,
    iconClose: '',
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
    icon: {
      control: 'text',
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    hasIconClose: {
      control: 'boolean',
    },
    iconClose: {
      control: 'text',
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
    hasIconClose: false,
    label: 'Label',
    disabled: false,
  },
};

export const IconTag: Story = {
  args: {
    size: 'md',
    hasIcon: true,
    icon: 'https://icon-icons.com/icons2/933/PNG/512/star_icon-icons.com_72540.png',
    iconPosition: 'left',
    hasIconClose: false,
    label: 'Label',
    disabled: false,
  },
};

export const IconCloseTag: Story = {
  args: {
    size: 'md',
    hasIconClose: true,
    label: 'Label',
    disabled: false,
  },
};

export const BothIconTag: Story = {
  args: {
    size: 'md',
    hasIcon: true,
    icon: 'https://icon-icons.com/icons2/37/PNG/512/compass_earth_4177.png',
    iconPosition: 'left',
    hasIconClose: true,
    label: 'Label',
    disabled: false,
  },
};

export const DisabledTag: Story = {
  args: {
    size: 'md',
    hasIcon: true,
    icon: 'https://icon-icons.com/icons2/933/PNG/512/star_icon-icons.com_72540.png',
    iconPosition: 'left',
    hasIconClose: false,
    label: 'Label',
    disabled: true,
  },
};
