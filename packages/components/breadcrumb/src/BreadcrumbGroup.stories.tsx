import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import BreadcrumbGroup from './BreadcrumbGroup';
import { ThemeProvider } from '@douro-ui/react';
import type { BreadcrumbGroupProps } from './breadcrumb.types';
import { PartialStoryFn } from 'storybook/internal/types';
import { expect, userEvent, within } from '@storybook/test';

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

BreadcrumbStory.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const breadcrumb = canvas.getByLabelText('breadcrumb');

  expect(breadcrumb).toHaveTextContent('Home>Category>Product');
  expect(breadcrumb).toHaveStyle('pointer-events: auto');
  expect(breadcrumb).toHaveStyle('align-items: center');
  expect(breadcrumb).toHaveStyle('justify-content: normal');
  expect(breadcrumb).toHaveStyle('position: static');
  expect(breadcrumb).toHaveStyle('cursor: auto');
  expect(breadcrumb).toHaveStyle('display: flex');
  expect(breadcrumb).toHaveStyle('margin-right: 0px');
  expect(breadcrumb).toHaveStyle('width: 197.609px');
  expect(breadcrumb).toHaveStyle('max-width: none');
  expect(breadcrumb).toHaveStyle('margin-right: 0px');
  expect(breadcrumb).toHaveStyle('max-width: none');

  const category = canvas.getByText('Category');
  const home = canvas.getByText('Home');
  userEvent.click(category);
  expect(breadcrumb).toHaveTextContent('Home>Category');
  userEvent.click(home);
  expect(home).toHaveTextContent('Home');
};
