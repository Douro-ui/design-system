import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TabsGroup from './TabsGroup';
import { useState } from 'react';
import { ThemeProvider } from '@douro-ui/react';

const meta: Meta<typeof TabsGroup> = {
  title: 'Example/TabsGroup',
  component: TabsGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const TabsGroupWithHooks = () => {
  const [selected, setSelected] = useState<string>('tab1');

  const handleChange = (value: string) => {
    action('tab-changed')(value);
    setSelected(value);
  };

  return (
    <ThemeProvider>
      <TabsGroup
        options={[
          { label: 'Tab 1', value: 'tab1' },
          { label: 'Tab 2', value: 'tab2' },
          { label: 'Tab 3', value: 'tab3', disabled: true },
        ]}
        selectedValue={selected}
        onChange={handleChange}
      />
    </ThemeProvider>
  );
};

export const DefaultTabs: Story = {
  render: () => <TabsGroupWithHooks />,
};
