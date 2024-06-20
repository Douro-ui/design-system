import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Example/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

};

export default meta;

type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Toggle',
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    label: 'Toggle',
  },
};

export const Large: Story = {
  args: {
    label: 'Toggle',
  },
};
