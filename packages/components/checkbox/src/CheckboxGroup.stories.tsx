import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CheckboxGroup from './CheckboxGroup';
import { useState } from 'react';

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
