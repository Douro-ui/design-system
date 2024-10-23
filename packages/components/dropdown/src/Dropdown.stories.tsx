import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { DropdownProps } from './dropdown.types';
import { useState } from 'react';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof Dropdown> = {
  title: 'Example/Dropdown',
  component: Dropdown,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, DropdownProps>) => (
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
    options: [
      { id: '1', name: 'Cavendish Banana' },
      { id: '2', name: 'Red Banana' },
      { id: '3', name: 'Plantain Banana' },
      { id: '4', name: 'Burro Banana' },
    ],
    label: 'Role',
    placeholder: 'Placeholder',
    disabled: false,
    selectedId: undefined,
  },
  argTypes: {
    options: {
      control: 'object',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    selectedId: {
      control: 'text',
    },
  },
} satisfies Meta<DropdownProps>;

export default meta;

type Story = StoryObj<DropdownProps>;

export const DefaultDropdown: Story = {
  render: (args: DropdownProps) => {
    const [selectedId, setSelectedId] = useState<string | undefined>();

    const handleSelect = (id: string) => {
      setSelectedId(id);
    };

    return (
      <Dropdown selectedId={selectedId} onSelect={handleSelect} {...args} />
    );
  },
  args: {
    label: 'Select a Banana',
    placeholder: 'Select an option',
    disabled: false,
    options: [
      { id: '1', name: 'Cavendish Banana', disabled: true },
      { id: '2', name: 'Red Banana' },
      { id: '3', name: 'Plantain Banana' },
      { id: '4', name: 'Burro Banana' },
      { id: '5', name: 'Madeira Banana' },
      { id: '6', name: 'Yellow Banana' },
      { id: '7', name: 'Brasil Banana' },
      { id: '8', name: 'Gato Banana' },
    ],
  },
};

export const DisabledDropdown: Story = {
  render: (args: DropdownProps) => {
    const [selectedId, setSelectedId] = useState<string | undefined>();

    const handleSelect = (id: string) => {
      setSelectedId(id);
    };

    return (
      <Dropdown
        selectedId={selectedId}
        onSelect={handleSelect}
        disabled
        {...args}
      />
    );
  },
  args: {
    label: 'Select a Banana',
    placeholder: 'Select an option',
    disabled: true,
    options: [
      { id: '1', name: 'Cavendish Banana', disabled: true },
      { id: '2', name: 'Red Banana' },
      { id: '3', name: 'Plantain Banana' },
      { id: '4', name: 'Burro Banana' },
      { id: '5', name: 'Madeira Banana' },
      { id: '6', name: 'Yellow Banana' },
      { id: '7', name: 'Brasil Banana' },
      { id: '8', name: 'Gato Banana' },
    ],
  },
};

export const SelectedDropdown: Story = {
  render: (args: DropdownProps) => {
    const [selectedId, setSelectedId] = useState<string | undefined>('1');

    const handleSelect = (id: string) => {
      setSelectedId(id);
    };

    return (
      <Dropdown selectedId={selectedId} onSelect={handleSelect} {...args} />
    );
  },
  args: {
    label: 'Select a Banana',
    placeholder: 'Select an option',
    disabled: false,
    selectedId: '5',
    options: [
      { id: '1', name: 'Cavendish Banana' },
      { id: '2', name: 'Red Banana' },
      { id: '3', name: 'Plantain Banana' },
      { id: '4', name: 'Burro Banana' },
      { id: '5', name: 'Madeira Banana' },
      { id: '6', name: 'Yellow Banana' },
      { id: '7', name: 'Brasil Banana' },
      { id: '8', name: 'Gato Banana' },
    ],
  },
};
DefaultDropdown.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const dropdown = canvas.getByText('Select an option');
  expect(dropdown).toBeVisible();

  const label = canvas.getByText('Select a Banana');
  expect(label).toHaveTextContent('Select a Banana');

  userEvent.click(dropdown);

  const dropdownOpen = canvas.getByText('Cavendish Banana');
  expect(dropdownOpen).toHaveTextContent('Cavendish Banana');

  userEvent.click(dropdown);
  const newOption = canvas.getByText('Red Banana');
  userEvent.click(newOption);
  expect(newOption).toHaveTextContent('Red Banana');
};
DisabledDropdown.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const dropdown = canvas.getByText('Select an option');
  expect(dropdown).toHaveStyle('pointer-events: none');

  const dropdownOpen = canvas.getByText('Cavendish Banana');
  expect(dropdownOpen).not.toBeVisible();
};

SelectedDropdown.play = async (): Promise<void> => {
  const element = document.querySelector('#storybook-root > div > div');
  expect(element).toBeVisible();
  expect(element).toHaveTextContent('Madeira Banana');
};
