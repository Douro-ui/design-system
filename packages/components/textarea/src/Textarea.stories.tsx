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
    size: 'lg',
    label: 'Description',
    maxLength: 500,
    placeholder: 'Write a description for the topic',
    isDisabled: false,
    isRequired: true,
    hasCharacterCount: true,
    canResize: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    label: {
      control: 'text',
    },
    maxLength: {
      control: 'number',
    },
    placeholder: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
    },
    hasCharacterCount: {
      control: 'boolean',
    },
    canResize: {
      control: 'boolean',
    },
    onClick: fn(),
  },
} satisfies Meta<TextareaProps>;

export default meta;

type Story = StoryObj<TextareaProps>;

export const SmallTextareaRequiredResize: Story = {
  args: {
    size: 'sm',
    label: 'Description',
    maxLength: 500,
    placeholder: 'Write a description for the topic',
    isDisabled: false,
    isRequired: true,
    hasCharacterCount: false,
    canResize: true,
  },
};

export const MediumTextareaCounter: Story = {
  args: {
    size: 'md',
    label: 'Description',
    maxLength: 100,
    placeholder: 'Write a description for the topic',
    isDisabled: false,
    isRequired: false,
    hasCharacterCount: true,
  },
};

export const LargeTextareaDisabled: Story = {
  args: {
    size: 'lg',
    label: 'Description',
    maxLength: 500,
    placeholder: 'Write a description for the topic',
    isDisabled: true,
    isRequired: true,
    hasCharacterCount: true,
  },
};

export const XLargeTextareaRequiredCounter: Story = {
  args: {
    size: 'xl',
    label: 'Description',
    maxLength: 500,
    placeholder: 'Write a description for the topic',
    isDisabled: false,
    isRequired: true,
    hasCharacterCount: true,
  },
};
XLargeTextareaRequiredCounter.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
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
