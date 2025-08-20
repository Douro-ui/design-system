import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Toaster from './Toaster';
import { ToasterProps } from './toaster.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import Button from '@douro-ui/button';
import { useState } from 'react';
import { ToasterProvider, useToaster } from './ToasterProvider';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<ToasterProps> = {
  title: 'Example/Toaster',
  component: Toaster,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, ToasterProps>) => (
      <ThemeProvider>
        <ToasterProvider>
          <Story />
        </ToasterProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    typeToaster: 'success',
    position: 'bottom-right',
    duration: 3000,
    children: 'Toaster message',
  },
  argTypes: {
    typeToaster: {
      control: {
        type: 'select',
        options: ['success', 'error', 'info', 'warning'],
      },
    },
    position: {
      control: {
        type: 'select',
        options: [
          'top-right',
          'top-left',
          'top-center',
          'bottom-right',
          'bottom-left',
          'bottom-center',
          'center',
        ],
      },
    },
    duration: {
      control: 'number',
    },
    onClose: { action: 'onClose' },
  },
} satisfies Meta<ToasterProps>;

export default meta;

type Story = StoryObj<ToasterProps>;

export const OnlyAToaster: Story = {
  args: {
    typeToaster: 'error',
    position: 'center',
  },
};

export const SingleToaster: Story = {
  render: (args: ToasterProps) => {
    const [toasterKey, setToasterKey] = useState<number | null>(null);

    const handleShowToaster = () => {
      setToasterKey(Date.now());
    };

    return (
      <div>
        <Button onClick={handleShowToaster}>Show Toaster</Button>
        {toasterKey !== null && <Toaster key={toasterKey} {...args} />}
      </div>
    );
  },
  args: {
    typeToaster: 'error',
    position: 'top-center',
    showCloseButton: true,
    showProgressBar: true,
  },
};

export const MultipleToasters: Story = {
  render: (args: ToasterProps) => {
    const { addToaster } = useToaster();

    const handleClick = (toasterProps: ToasterProps) => {
      addToaster({
        ...toasterProps,
        id: Date.now().toString(),
      });
    };

    return (
      <div>
        <Button
          onClick={() =>
            handleClick({
              ...args,
            })
          }
        >
          Show Success Toaster
        </Button>
      </div>
    );
  },
  args: {
    typeToaster: 'error',
    position: 'top-right',
    isInStack: true,
    showCloseButton: true,
    showProgressBar: true,
    children: 'First toaster!',
  },
};
OnlyAToaster.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const toasterElement = canvas.getByText('Toaster message');
  expect(toasterElement).toBeInTheDocument();
};
SingleToaster.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const toastShow = await canvas.findByTestId('button-primary');
  expect(toastShow).toBeVisible();

  await userEvent.click(toastShow);

  const toasterElement = canvas.getByText('Toaster message');
  expect(toasterElement).toBeInTheDocument();
};
MultipleToasters.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const toastShow = await canvas.findByTestId('button-primary');
  expect(toastShow).toBeVisible();

  await userEvent.click(toastShow);

  const toasterElement = canvas.getByText('First toaster!');
  expect(toasterElement).toBeInTheDocument();
};
