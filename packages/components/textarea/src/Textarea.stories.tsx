import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Textarea from './Textarea';
import { TextareaProps } from './textarea.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { fn } from '@storybook/test';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<TextareaProps> = {
  title: 'Example/Textarea',
  component: Textarea,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, TextareaProps>) => (
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
    label: 'Description',
    maxLength: 500,
    placeholder: 'Write a description for the topic',
    disabled: false,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    maxLength: {
      control: 'number',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: fn(),
  },
} satisfies Meta<TextareaProps>;

export default meta;

type Story = StoryObj<TextareaProps>;

export const Primary: Story = {
  args: {
    label: 'Description',
    maxLength: 500,
    placeholder: 'Write a description for the topic',
    disabled: false,
  },
};
Primary.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const label = canvas.getByText('Description');
  expect(label).toBeVisible();

  const textarea = canvas.getByPlaceholderText(
    'Write a description for the topic',
  ) as HTMLTextAreaElement;

  expect(textarea).toBeInTheDocument();
  expect(textarea).toHaveAttribute('maxLength', '500');
  expect(textarea).not.toBeDisabled();

  await userEvent.type(textarea, 'This is a test on the textarea.');
  expect(textarea).toHaveValue('This is a test on the textarea.');

  await userEvent.type(
    textarea,
    'Testing max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max lengthTesting max le',
  );
  expect(textarea.value.length).toBeLessThanOrEqual(500);
};
