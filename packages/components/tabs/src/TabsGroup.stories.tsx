import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TabsGroup from './TabsGroup';
import { useState } from 'react';
import { ThemeProvider } from '@douro-ui/react';
import { expect, userEvent, within } from '@storybook/test';

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
DefaultTabs.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const tabs = await (canvas.findAllByText(/Tab/) as Promise<HTMLElement[]>);

  expect(tabs[0]).toHaveTextContent('Tab 1');
  expect(tabs[1]).toHaveTextContent('Tab 2');
  expect(tabs[2]).toHaveTextContent('Tab 3');

  expect(tabs[0]).toHaveStyle('color: #2860D7');
  expect(tabs[1]).toHaveStyle('color: #141B1F');
  expect(tabs[2]).toHaveStyle('color: #141B1F');

  await userEvent.click(tabs[1]);
  expect(tabs[0]).toHaveStyle('color: #141B1F');
  expect(tabs[1]).toHaveStyle('color: #2860D7');
  expect(tabs[2]).toHaveStyle('color: #141B1F');

  await userEvent.click(tabs[0]);
  expect(tabs[0]).toHaveStyle('color: #2860D7');
  expect(tabs[1]).toHaveStyle('color: #141B1F');
  expect(tabs[2]).toHaveStyle('color: #141B1F');

  expect(tabs[2]).toHaveStyle('cursor: not-allowed');
};
