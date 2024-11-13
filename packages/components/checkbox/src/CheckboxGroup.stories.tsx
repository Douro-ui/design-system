import { Meta, StoryObj, ReactRenderer } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CheckboxGroup from './CheckboxGroup';
import { ThemeProvider } from '@douro-ui/react';
import { useState } from 'react';
import { expect, userEvent, within } from '@storybook/test';
import { PartialStoryFn } from 'storybook/internal/types';
import { CheckboxGroupProps } from './checkbox.types';
import { ReactElement } from 'react';

const meta: Meta<CheckboxGroupProps> = {
  title: 'Example/CheckboxGroup',
  component: CheckboxGroup,
  decorators: [
    (
      Story: PartialStoryFn<ReactRenderer, CheckboxGroupProps>,
    ): ReactElement => (
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
    disabled: false,
    indeterminate: false,
    options: [
      { label: 'Checkbox 1', value: 'checkbox1' },
      { label: 'Checkbox 2', value: 'checkbox2' },
      { label: 'Checkbox 3', value: 'checkbox3' },
    ],
    selectedValues: '',
    onChange: (value: string) => action('checkbox-group-changed')(value),
  },
  argTypes: {
    size: {
      control: { options: ['sm', 'md', 'lg', 'xl'] },
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
} satisfies Meta<CheckboxGroupProps>;

export default meta;

type Story = StoryObj<CheckboxGroupProps>;

export const Default: Story = {
  args: {
    disabled: false,
    indeterminate: false,

    options: [
      { label: 'Checkbox 1', value: 'checkbox1', size: 'md' },
      { label: 'Checkbox 2', value: 'checkbox2', size: 'md' },
      { label: 'Checkbox 3', value: 'checkbox3', size: 'md' },
      { label: 'Checkbox 4', value: 'Checkbox4', size: 'md' },
    ],

    size: 'md',
  },
  render: (args: CheckboxGroupProps) => {
    const [selected, setSelected] = useState('');

    const handleChange = (value: string) => {
      action('checkbox-group-changed')(value);
      setSelected(value);
    };

    return (
      <CheckboxGroup
        {...args}
        selectedValues={selected}
        onChange={handleChange}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: false,
    indeterminate: false,
    options: [
      { label: 'Checkbox 1', value: 'checkbox1', disabled: true, size: 'md' },
      { label: 'Checkbox 2', value: 'checkbox2', disabled: true, size: 'md' },
      { label: 'Checkbox 3', value: 'checkbox3', disabled: true, size: 'md' },
      { label: 'Checkbox 4', value: 'Checkbox4', disabled: true, size: 'md' },
    ],
  },
  render: (args: CheckboxGroupProps) => {
    const [selected, setSelected] = useState('');

    const handleChange = (value: string) => {
      action('checkbox-group-changed')(value);
      setSelected(value);
    };

    return (
      <CheckboxGroup
        {...args}
        selectedValues={selected}
        onChange={handleChange}
      />
    );
  },
};

export const Indeterminate: Story = {
  args: {
    disabled: false,
    indeterminate: true,
    options: [
      {
        label: 'Checkbox 1',
        value: 'checkbox1',
        indeterminate: true,
        size: 'md',
      },
      {
        label: 'Checkbox 2',
        value: 'checkbox2',
        indeterminate: true,
        size: 'md',
      },
      {
        label: 'Checkbox 3',
        value: 'checkbox3',
        indeterminate: true,
        size: 'md',
      },
      {
        label: 'Checkbox 4',
        value: 'Checkbox4',
        indeterminate: true,
        size: 'md',
      },
    ],
  },
  render: (args: CheckboxGroupProps) => {
    const [selected, setSelected] = useState('');

    const handleChange = (value: string) => {
      action('checkbox-group-changed')(value);
      setSelected(value);
    };

    return (
      <CheckboxGroup
        {...args}
        selectedValues={selected}
        onChange={handleChange}
      />
    );
  },
};

async function testCheckboxGroup(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);

  const checkbox = canvas.getAllByRole('checkbox');

  checkbox.forEach((checkbox: HTMLElement) => {
    expect(checkbox).not.toBeChecked();
  });

  expect(checkbox[0]).toHaveAccessibleName('Checkbox 1');
  expect(checkbox[1]).toHaveAccessibleName('Checkbox 2');
  expect(checkbox[2]).toHaveAccessibleName('Checkbox 3');

  expect(checkbox[2]).toBeDisabled();

  await userEvent.click(checkbox[0]);
  expect(checkbox[0]).toBeChecked();

  expect(checkbox[1]).not.toBeChecked();
  expect(checkbox[2]).not.toBeChecked();

  await userEvent.click(checkbox[1]);
  expect(checkbox[0]).toBeChecked();
  expect(checkbox[1]).toBeChecked();
  expect(checkbox[2]).not.toBeChecked();

  await userEvent.click(checkbox[2]);
  expect(checkbox[2]).not.toBeChecked();

  checkbox[0].focus();
  expect(checkbox[0]).toHaveFocus();

  await userEvent.keyboard('[Tab]');
  await expect(checkbox[1]).toHaveFocus();

  checkbox[0].focus();
  await expect(checkbox[0]).toHaveFocus();
  await userEvent.keyboard('[Space]');

  await expect(checkbox[0]).not.toBeChecked();
  await userEvent.keyboard('[Tab]');

  await expect(checkbox[1]).toHaveFocus();
  await userEvent.keyboard('[Space]');
  await expect(checkbox[0]).not.toBeChecked();
}

Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  testCheckboxGroup(canvasElement);
};
