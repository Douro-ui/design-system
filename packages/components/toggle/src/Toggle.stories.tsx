import React, { ReactElement } from 'react';
import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import Toggle from './Toggle';
import { ThemeProvider } from '@douro-ui/react';
import { expect, userEvent, within } from '@storybook/test';
import { PartialStoryFn } from 'storybook/internal/types';
import { ToggleProps } from './toggle.types';
import { Icon } from '@douro-ui/icon';

const meta: Meta<ToggleProps> = {
  title: 'Example/Toggle',
  component: Toggle,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, ToggleProps>): ReactElement => (
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
    checked: false,
    size: 'lg',
    styled: {},
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    styled: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args: ToggleProps) => {
    const [checked, setChecked] = useState(args.checked);

    const handleToggleChange = (checkedValue: boolean) => {
      setChecked(checkedValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      action('toggle-changed')(isChecked);
    };

    return (
      <Toggle
        {...args}
        checked={checked}
        onChange={handleChange}
        onToggleChange={handleToggleChange}
        label="Toggle Label"
        title="Toggle switch"
      />
    );
  },
};

export const WithIcon: Story = {
  render: (args: ToggleProps) => {
    const [checked, setChecked] = useState(args.checked);

    const handleToggleChange = (checkedValue: boolean) => {
      setChecked(checkedValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      action('toggle-changed')(isChecked);
    };

    return (
      <Toggle
        {...args}
        checked={checked}
        onChange={handleChange}
        onToggleChange={handleToggleChange}
        label="Toggle Label"
        title="Toggle switch"
        icon={() => <Icon name="star" />}
      />
    );
  },
};

Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const toogle = canvas.getByRole('checkbox');
  expect(toogle).not.toBeChecked();
  await userEvent.click(toogle);
  expect(toogle).toBeChecked();
  expect(toogle).toHaveStyle('box-sizing: border-box');
  expect(toogle).toHaveStyle('display: inline-block');
  expect(toogle).toHaveStyle('flex-direction: row');
  expect(toogle).toHaveStyle('align-items: normal');
  expect(toogle).toHaveStyle('cursor: default');
};
