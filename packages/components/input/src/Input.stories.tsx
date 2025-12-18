import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import Input from './Input';
import { InputProps } from './input.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { expect, fn, userEvent, within } from 'storybook/test';

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
Primary.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const label = canvas.getByText('Name');
  expect(label).toBeVisible();

  const input = canvas.getByPlaceholderText(
    'Enter your name',
  ) as HTMLTextAreaElement;

  expect(input).toBeInTheDocument();
  expect(input).toBeEnabled();
  expect(input).not.toBeDisabled();

  await userEvent.type(input, 'This is a test on the input.');
  expect(input).toHaveValue('This is a test on the input.');

  await userEvent.clear(input);
  await userEvent.type(input, 'New value');
  expect(input).toHaveValue('New value');

  expect(input).toHaveStyle('align-items: normal');
  expect(input).toHaveStyle('position: static');
  expect(input).toHaveStyle('opacity: 1');
  expect(input).toHaveStyle('pointer-events: auto');

  expect(input).toHaveStyle('padding-left: 0');
  expect(input).toHaveStyle('line-height: normal');
  expect(input).toHaveStyle('display: block');
  expect(input).toHaveStyle('margin-bottom: 0px');
};
