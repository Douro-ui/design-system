import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioGroup from './RadioGroup';
import { useState } from 'react';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof RadioGroup> = {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const RadioGroupWithHooks = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (value: string) => {
    action('circle-group-changed')(value);
    setSelected(value);
  };

  return (
    <RadioGroup
      name="circleRadioGroup"
      options={[
        { label: 'Circle Radio 1', value: 'circle1' },
        { label: 'Circle Radio 2', value: 'circle2' },
        { label: 'Circle Radio 3', value: 'circle3', disabled: true },
      ]}
      selectedValue={selected}
      onChange={handleChange}
    />
  );
};

export const CircleGroup: Story = {
  render: () => <RadioGroupWithHooks />,
};
CircleGroup.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const radios = canvas.getAllByRole('radio');

  radios.forEach((radio: HTMLElement) => {
    expect(radio).not.toBeChecked();
  });

  expect(radios[0]).toHaveAccessibleName('Circle Radio 1');
  expect(radios[1]).toHaveAccessibleName('Circle Radio 2');
  expect(radios[2]).toHaveAccessibleName('Circle Radio 3');

  expect(radios[2]).toBeDisabled();

  await userEvent.click(radios[0]);
  expect(radios[0]).toBeChecked();
  expect(radios[1]).not.toBeChecked();
  expect(radios[2]).not.toBeChecked();

  await userEvent.click(radios[1]);
  expect(radios[0]).not.toBeChecked();
  expect(radios[1]).toBeChecked();
  expect(radios[2]).not.toBeChecked();

  await userEvent.click(radios[2]);
  expect(radios[2]).not.toBeChecked();

  radios[0].focus();
  expect(radios[0]).toHaveFocus();

  await userEvent.keyboard('[ArrowDown]');
  expect(radios[1]).toHaveFocus();

  await userEvent.keyboard('[ArrowUp]');
  expect(radios[0]).toHaveFocus();
};
