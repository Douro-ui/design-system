import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import Button from './Button';
import { ButtonProps } from './button.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { expect, userEvent, within, fn } from 'storybook/test';

const meta: Meta<ButtonProps> = {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, ButtonProps>) => (
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
    disabled: false,
    typeBtn: 'primary',
    children: 'Button',
  },
  argTypes: {
    typeBtn: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'error'],
      },
    },
    size: {
      control: { options: ['sm', 'md', 'lg', 'xl'] },
    },
    iconBefore: {
      control: 'object',
    },
    iconAfter: {
      control: 'object',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: fn(),
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    typeBtn: 'primary',
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    typeBtn: 'secondary',
    onClick: fn(),
  },
};

export const Tertiary: Story = {
  args: {
    typeBtn: 'tertiary',
    onClick: fn(),
  },
};
export const WithIconBefore: Story = {
  args: {
    typeBtn: 'primary',
    iconBefore: <svg>Icon</svg>,
    onClick: fn(),
  },
};
export const WithIconAfter: Story = {
  args: {
    typeBtn: 'primary',
    iconAfter: <svg>Icon</svg>,
    onClick: fn(),
  },
};
export const WithBothIcon: Story = {
  args: {
    typeBtn: 'primary',
    iconBefore: <svg>Icon</svg>,
    iconAfter: <svg>Icon</svg>,
    onClick: fn(),
  },
};

export const Error: Story = {
  args: {
    typeBtn: 'error',
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    typeBtn: 'primary',
    disabled: true,
    onClick: fn(),
  },
};

const checkButtonStyles = (
  button: HTMLElement,
  styles: { [key: string]: string },
): void => {
  Object.entries(styles).forEach(([property, value]: [string, string]) => {
    expect(button).toHaveStyle(`${property}: ${value}`);
  });
};

const testButton = async (
  canvasElement: HTMLElement,
  styles: { [key: string]: string },
): Promise<void> => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole('button');
  await expect(button).toHaveTextContent('Button');

  checkButtonStyles(button, styles);

  expect(button).toBeEnabled();

  userEvent.click(button);
  userEvent.hover(button);
  userEvent.tab();

  button.focus();
  expect(button).toHaveFocus();
};

Primary.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}): Promise<void> => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole('button');
  await expect(button).toHaveTextContent('Button');

  testButton(canvasElement, {
    color: '#FFF',
    'background-color': 'rgb(11, 31, 47)',
    'border-bottom-color': 'rgba(0, 0, 0, 0)',
    'box-sizing': 'border-box',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    position: 'relative',
    transition: '0.2s ease',
    cursor: 'pointer',
    'margin-right': '0px',
    width: '80.2656px',
    'max-width': 'none',
    'max-height': 'none',
    'pointer-events': 'auto',
  });
};

Secondary.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole('button');
  await expect(button).toHaveTextContent('Button');

  testButton(canvasElement, {
    color: '#0B1F2F',
    'background-color': 'rgba(0, 0, 0, 0)',
    'border-bottom-color': 'rgb(11, 31, 47)',
    'box-sizing': 'border-box',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    position: 'relative',
    transition: '0.2s ease',
    cursor: 'pointer',
    'margin-right': '0px',
    width: '80.2656px',
    'max-width': 'none',
    'max-height': 'none',
    'pointer-events': 'auto',
  });
};

Tertiary.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole('button');
  await expect(button).toHaveTextContent('Button');

  testButton(canvasElement, {
    color: '#0B1F2F',
    'background-color': 'rgba(0, 0, 0, 0)',
    'border-bottom-color': 'rgba(0, 0, 0, 0)',
    'box-sizing': 'border-box',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    position: 'relative',
    transition: '0.2s ease',
    cursor: 'pointer',
    'margin-right': '0px',
    width: '80.2656px',
    'max-width': 'none',
    'max-height': 'none',
    'pointer-events': 'auto',
  });
};

Error.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole('button');
  await expect(button).toHaveTextContent('Button');

  testButton(canvasElement, {
    color: '#FFF',
    'background-color': 'rgb(233, 22, 22)',
    'border-bottom-color': 'rgb(233, 22, 22)',
    'box-sizing': 'border-box',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    position: 'relative',
    transition: '0.2s ease',
    cursor: 'pointer',
    'margin-right': '0px',
    width: '80.2656px',
    'max-width': 'none',
    'max-height': 'none',
    'pointer-events': 'auto',
  });
};

Disabled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole('button');
  await expect(button).toHaveTextContent('Button');

  checkButtonStyles(button, {
    color: '#A2B7C3',
    'background-color': 'rgb(239, 243, 245)',
    'border-bottom-color': 'rgb(162, 183, 195)',
    'box-sizing': 'border-box',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    position: 'relative',
    transition: '0.2s ease',
    cursor: 'not-allowed',
    'margin-right': '0px',
    width: '80.2656px',
    'max-width': 'none',
    'max-height': 'none',
    'pointer-events': 'none',
  });

  await expect(button).toBeDisabled();
};
