import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioGroup from './RadioGroup';
import { ReactElement, useState } from 'react';
import { expect, userEvent, within } from '@storybook/test';
import { PartialStoryFn } from 'storybook/internal/types';
import { RadioGroupProps } from './radio.types';
import { ThemeProvider } from '@douro-ui/react';

const meta: Meta<RadioGroupProps> = {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, RadioGroupProps>): ReactElement => (
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
    disabled: false,
    options: [
      { label: 'Label 1', value: 'label1' },
      { label: 'Label 2', value: 'label2' },
      { label: 'Label 3', value: 'label3', disabled: true },
      {
        label: 'Label 4',
        value: 'label4',
        disabled: true,
        checked: true,
      },
    ],
    selectedValue: '',
    onChange: (value: string) => action('circle-group-changed')(value),
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<RadioGroupProps>;

export default meta;

type Story = StoryObj<RadioGroupProps>;

export const Default: Story = {
  args: {
    disabled: false,
    options: [
      { label: 'Circle Radio 1', value: 'label1' },
      { label: 'Circle Radio 2', value: 'label2' },
      { label: 'Circle Radio 3', value: 'label3' },
      {
        label: 'Circle Radio 4',
        value: 'label4',
      },
    ],
  },
  render: (args: RadioGroupProps) => {
    const [selected, setSelected] = useState('');

    const handleChange = (value: string) => {
      action('circle-group-changed')(value);
      setSelected(value);
    };

    return (
      <RadioGroup {...args} selectedValue={selected} onChange={handleChange} />
    );
  },
};

export const StartSelected: Story = {
  args: {
    disabled: false,
    options: [
      { label: 'Circle Radio 1', value: 'label1', size: 'md' },
      { label: 'Circle Radio 2', value: 'label2', size: 'md' },
      { label: 'Circle Radio 3', value: 'label3', size: 'md' },
      {
        label: 'Circle Radio 4',
        value: 'label4',
        size: 'md',
      },
    ],
  },
  render: (args: RadioGroupProps) => {
    const [selected, setSelected] = useState('label1');

    const handleChange = (value: string) => {
      action('circle-group-changed')(value);
      setSelected(value);
    };

    return (
      <RadioGroup {...args} selectedValue={selected} onChange={handleChange} />
    );
  },
};

export const DisabledGroup: Story = {
  args: {
    disabled: false,
    options: [
      { label: 'Circle Radio 1', value: 'label1', disabled: true, size: 'sm' },
      { label: 'Circle Radio 2', value: 'label2', disabled: true, size: 'sm' },
      { label: 'Circle Radio 3', value: 'label3', disabled: true, size: 'sm' },
      {
        label: 'Circle Radio 4',
        value: 'label4',
        disabled: true,
        size: 'sm',
      },
    ],
  },
  render: (args: RadioGroupProps) => {
    const [selected, setSelected] = useState('label1');

    const handleChange = (value: string) => {
      action('circle-group-changed')(value);
      setSelected(value);
    };

    return (
      <RadioGroup {...args} selectedValue={selected} onChange={handleChange} />
    );
  },
};

Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const radios = canvas.getAllByRole('radio');

  radios.forEach((radio: HTMLElement) => {
    expect(radio).not.toBeChecked();
  });

  expect(radios[0]).toHaveAccessibleName('Circle Radio 1');
  expect(radios[1]).toHaveAccessibleName('Circle Radio 2');
  expect(radios[2]).toHaveAccessibleName('Circle Radio 3');
  expect(radios[3]).toHaveAccessibleName('Circle Radio 4');

  await userEvent.click(radios[0]);
  expect(radios[0]).toBeChecked();
  expect(radios[1]).not.toBeChecked();
  expect(radios[2]).not.toBeChecked();
  expect(radios[3]).not.toBeChecked();

  await userEvent.click(radios[1]);
  expect(radios[0]).not.toBeChecked();
  expect(radios[1]).toBeChecked();
  expect(radios[2]).not.toBeChecked();
  expect(radios[3]).not.toBeChecked();

  await userEvent.click(radios[2]);
  expect(radios[0]).not.toBeChecked();
  expect(radios[1]).not.toBeChecked();
  expect(radios[2]).toBeChecked();
  expect(radios[3]).not.toBeChecked();

  await userEvent.click(radios[3]);
  expect(radios[0]).not.toBeChecked();
  expect(radios[1]).not.toBeChecked();
  expect(radios[2]).not.toBeChecked();
  expect(radios[3]).toBeChecked();

  radios[0].focus();
  expect(radios[0]).toHaveFocus();

  await userEvent.keyboard('[ArrowDown]');
  expect(radios[1]).toHaveFocus();

  await userEvent.keyboard('[ArrowUp]');
  expect(radios[0]).toHaveFocus();
};
