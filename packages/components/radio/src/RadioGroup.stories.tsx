import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioGroup from './RadioGroup';
import { useState } from 'react';

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
