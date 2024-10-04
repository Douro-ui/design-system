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

export const Default: Story = {
  args: {
    size: 'md',
    icon: 'https://icon-icons.com/icons2/933/PNG/512/star_icon-icons.com_72540.png',
    iconPosition: 'left',
    hasIconClose: false,
    iconClose: '',
    label: 'Label',
    disabled: false,
  },
};
