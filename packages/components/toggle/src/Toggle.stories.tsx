import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Toggle from './Toggle';
import { ThemeProvider } from '@douro-ui/react';

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
      <Toggle checked={checked} onToggleChange={handleToggleChange} disabled>
        This is a toggle
      </Toggle>
    </ThemeProvider>
  );
};

export const DefaultToggle: Story = {
  render: () => <ToggleWithHooks />,
};
