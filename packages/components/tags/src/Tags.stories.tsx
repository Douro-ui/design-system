import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Tags from './Tags';
import { TagsProps } from './tags.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { expect, userEvent, within } from '@storybook/test';

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
    iconBefore: () => <svg>Icon</svg>,
    label: 'Label',
    disabled: false,
  },
};

export const IconCloseTagDismissible: Story = {
  args: {
    typeTag: 'dismissible',
    size: 'md',
    iconAfter: () => <svg>Icon</svg>,
    label: 'Label',
    disabled: false,
  },
};

export const BothIconTagSelectable: Story = {
  args: {
    typeTag: 'selectable',
    size: 'md',
    iconBefore: () => <svg>Icon</svg>,
    iconAfter: () => <svg>Icon</svg>,
    label: 'Label',
    disabled: false,
  },
};

export const DisabledTagSelectable: Story = {
  args: {
    typeTag: 'selectable',
    size: 'md',
    iconBefore: () => <svg>Icon</svg>,
    label: 'Label',
    disabled: true,
  },
};
DefaultTagReadonly.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const tag = await canvas.findByTestId('tag');
  expect(tag).toBeVisible();
  expect(tag).toHaveTextContent('Label');
};

IconTagSelectable.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const tag = await canvas.findByTestId('tag');
  expect(tag).toBeVisible();
  expect(tag.querySelector('svg')).toBeInTheDocument();
  await userEvent.click(tag);
  expect(tag).toHaveClass('selected css-12tgjcj');
  await userEvent.click(tag);
  expect(tag).toHaveClass('css-12tgjcj');
  expect(tag).toHaveTextContent('Label');
};

IconCloseTagDismissible.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const tag = await canvas.findByTestId('tag');
  expect(tag).toBeVisible();
  expect(tag).not.toBeNull();
  expect(tag).toBeVisible();
  expect(tag.querySelector('svg')).not.toBeNull();
  expect(tag).toHaveTextContent('Label');

  const svgElement = document.querySelector('svg');
  if (svgElement) {
    await userEvent.click(svgElement);
  } else {
    throw new Error('SVG element not found');
  }
  expect(tag).not.toBeInTheDocument();
};

BothIconTagSelectable.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const tag = await canvas.findByTestId('tag');
  expect(tag).toBeVisible();
  expect(tag.querySelector('svg')).toBeInTheDocument();
  await userEvent.click(tag);
  expect(tag).toHaveClass('selected css-5xkgum');
  await userEvent.click(tag);
  expect(tag).toHaveClass('css-5xkgum');
  expect(tag).toHaveTextContent('Label');
};

DisabledTagSelectable.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const tag = await canvas.findByTestId('tag');
  expect(tag).toBeVisible();
  expect(tag).toHaveAttribute('disabled');
  expect(tag).toHaveTextContent('Label');
};
