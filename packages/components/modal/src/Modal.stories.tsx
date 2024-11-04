import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { ModalProps } from './modal.types';
import Button from '@douro-ui/button';
import { useState } from 'react';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, ModalProps>) => (
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
  },
  argTypes: {
    size: {
      control: 'text',
    },
    headerTitle: {
      control: 'text',
    },
  },
} satisfies Meta<ModalProps>;

export default meta;

type Story = StoryObj<ModalProps>;

export const SmallModalWithHeader: Story = {
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button typeBtn="secondary" size="md" onClick={() => setIsOpen(true)}>
          Open modal
        </Button>

        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          childrenFooter={
            <>
              <Button
                typeBtn="secondary"
                size="md"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button typeBtn="primary" size="md">
                Confirm
              </Button>
            </>
          }
        />
      </>
    );
  },

  args: {
    size: 'sm',
    headerTitle: 'Are you sure you want to add it?',
  },
};

export const MediumModalWithoutHeader: Story = {
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button typeBtn="secondary" size="md" onClick={() => setIsOpen(true)}>
          Open modal
        </Button>

        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          childrenFooter={
            <>
              <Button
                typeBtn="secondary"
                size="md"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button typeBtn="error" size="md">
                Delete
              </Button>
            </>
          }
        />
      </>
    );
  },

  args: {
    size: 'md',
    childrenBody: <Button typeBtn="primary">Click Me</Button>,
  },
};

export const LargeModalWithHeaderWithoutFooter: Story = {
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button typeBtn="secondary" size="md" onClick={() => setIsOpen(true)}>
          Open modal
        </Button>

        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },

  args: {
    size: 'lg',
    headerTitle: 'test',
    childrenBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. grtfgbhtgrfvfbgrtefd',
  },
};
SmallModalWithHeader.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const openButton = await canvas.findByText('Open modal');
  expect(openButton).toBeInTheDocument();
  userEvent.click(openButton);
  const headerTitle = await canvas.findByText(
    'Are you sure you want to add it?',
  );
  expect(headerTitle).toBeInTheDocument();
  const cancelButton = await canvas.findByText('Cancel');

  userEvent.click(cancelButton);
  expect(openButton).toBeVisible();
};

MediumModalWithoutHeader.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const openButton = await canvas.findByText('Open modal');
  expect(openButton).toBeInTheDocument();

  userEvent.click(openButton);

  const bodyContent = await canvas.findByText('Click Me');
  expect(bodyContent).toBeInTheDocument();

  const deleteButton = await canvas.findByText('Delete');
  userEvent.click(deleteButton);

  expect(deleteButton).toBeVisible();
};

LargeModalWithHeaderWithoutFooter.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const openButton = await canvas.findByText('Open modal');
  expect(openButton).toBeInTheDocument();

  userEvent.click(openButton);

  const headerTitle = await canvas.findByText('test');
  expect(headerTitle).toBeInTheDocument();

  const bodyContent = await canvas.findByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. grtfgbhtgrfvfbgrtefd',
  );
  expect(bodyContent).toBeInTheDocument();

  const closeButton = await canvas.findByAltText('Close Icon');
  userEvent.click(closeButton);

  expect(openButton).toBeVisible();
};
