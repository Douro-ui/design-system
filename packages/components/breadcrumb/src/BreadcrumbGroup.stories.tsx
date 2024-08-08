import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import BreadcrumbGroup from './BreadcrumbGroup';
import { ThemeProvider } from '@douro-ui/react';
import type { BreadcrumbGroupProps } from './breadcrumb.types';
import { PartialStoryFn } from 'storybook/internal/types';

const meta: Meta<typeof BreadcrumbGroup> = {
  title: 'Example/BreadcrumbGroup',
  component: BreadcrumbGroup,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, BreadcrumbGroupProps>) => (
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
    breadcrumbs: ['Home', 'Category', 'Product'],
    separator: '>',
  },
  argTypes: {
    breadcrumbs: {
      control: {
        type: 'object',
      },
    },
    separator: {
      control: 'text',
    },
  },
} satisfies Meta<BreadcrumbGroupProps>;

export default meta;

type Story = StoryObj<BreadcrumbGroupProps>;

export const BreadcrumbStory: Story = {
  args: {
    breadcrumbs: ['Home', 'Category', 'Product'],
    separator: '>',
  },
};
