import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CheckboxGroup from './CheckboxGroup';
import { useState } from 'react';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Example/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const CheckboxGroupWithHooks = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (values: string[]) => {
    action('checkbox-group-changed')(values);
    setSelected(values);
  };

  return (
    <CheckboxGroup
      name="checkboxGroup"
      options={[
        { label: 'Checkbox 1', value: 'checkbox1' },
        { label: 'Checkbox 2', value: 'checkbox2' },
        { label: 'Checkbox 3', value: 'checkbox3', disabled: true },
      ]}
      selectedValues={selected}
      onChange={handleChange}
    />
  );
};

const CircleCheckboxGroupWithHooks = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (values: string[]) => {
    action('checkbox-group-changed')(values);
    setSelected(values);
  };

  return (
    <CheckboxGroup
      name="checkboxGroup"
      options={[
        { label: 'Checkbox 1', value: 'checkbox1', isCircle: true },
        { label: 'Checkbox 2', value: 'checkbox2', isCircle: true },
        {
          label: 'Checkbox 3',
          value: 'checkbox3',
          isCircle: true,
          disabled: true,
        },
      ]}
      selectedValues={selected}
      onChange={handleChange}
    />
  );
};

export const DefaultCheckboxGroup: Story = {
  render: () => <CheckboxGroupWithHooks />,
};

export const CircleCheckboxGroup: Story = {
  render: () => <CircleCheckboxGroupWithHooks />,
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

DefaultCheckboxGroup.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  testCheckboxGroup(canvasElement);
};

CircleCheckboxGroup.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  testCheckboxGroup(canvasElement);
};
