import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Toggle from './Toggle';
import { ThemeProvider } from '@douro-ui/react';
import { expect, userEvent, within } from '@storybook/test';

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

const ToggleWithHooks = () => {
  const [checked, setChecked] = useState(false);

  const handleToggleChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <ThemeProvider>
      <Toggle checked={checked} onToggleChange={handleToggleChange}>
        This is a toggle
      </Toggle>
    </ThemeProvider>
  );
};

export const DefaultToggle: Story = {
  render: () => <ToggleWithHooks />,
};

DefaultToggle.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const toogle = canvas.getByRole('checkbox');
  expect(toogle).toHaveAccessibleName('This is a toggle');
  expect(toogle).not.toBeChecked();
  await userEvent.click(toogle);
  expect(toogle).toBeChecked();
  expect(toogle).toHaveStyle('box-sizing: border-box');
  expect(toogle).toHaveStyle('display: inline-block');
  expect(toogle).toHaveStyle('flex-direction: row');
  expect(toogle).toHaveStyle('align-items: normal');
  expect(toogle).toHaveStyle('cursor: default');
};
