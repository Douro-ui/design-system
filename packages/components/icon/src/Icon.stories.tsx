import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Icon from './Icon';
import { IconProps } from './icon.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { expect, within } from '@storybook/test';

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
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['chevron-down', 'chevron-up', 'close'],
      },
    },
  },
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<IconProps>;

export const ChevronDown: Story = {
  args: {
    name: 'chevron-down',
    styled: {
      width: '1rem',
      height: '1rem',
      fillColor: '#000',
    },
  },
};

export const ChevronUp: Story = {
  args: {
    name: 'chevron-up',
    styled: {
      width: '1rem',
      height: '1rem',
      fillColor: '#000',
    },
  },
};

export const CloseIcon: Story = {
  args: {
    name: 'close',
    styled: {
      width: '1rem',
      height: '1rem',
      fillColor: '#000',
    },
  },
};

export const StarIcon: Story = {
  args: {
    name: 'star',
    styled: {
      width: '1rem',
      height: '1rem',
      fillColor: '#000',
    },
  },
};

ChevronDown.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const element = canvas.findByTestId('icon');
  expect(element).toBeDefined();
};
ChevronUp.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const element = canvas.findByTestId('icon');
  expect(element).toBeDefined();
};
CloseIcon.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const element = canvas.findByTestId('icon');
  expect(element).toBeDefined();
};
