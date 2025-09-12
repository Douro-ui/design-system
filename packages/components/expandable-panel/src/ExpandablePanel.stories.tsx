import type { Meta, StoryObj } from '@storybook/react';
import ExpandablePanel from './ExpandablePanel';
import { ExpandablePanelProps } from './expandablePanel.types';
import Button, { ButtonType } from '@douro-ui/button';
import { ThemeProvider } from '@douro-ui/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';

const meta: Meta<typeof ExpandablePanel> = {
  title: 'Example/ExpandablePanel',
  component: ExpandablePanel,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const ExpandablePanelWithHooks = () => {
  const items: ExpandablePanelProps['items'] = [
    { header: 'Item 1', children: 'Content 1', startExpanded: false },
    { header: 'Item 2', children: 'Content 2', startExpanded: true },
    {
      header: 'Item 3',
      children: (
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <p>Content 3</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button data-testid="button-primary">Click Me</Button>
            <Button
              data-testid="button-secondary"
              typeBtn={ButtonType.Secondary}
            >
              Click Me
            </Button>
            <Button data-testid="button-error" typeBtn={ButtonType.Error}>
              Click Me
            </Button>
            <Button disabled>Click Me</Button>
          </div>
        </div>
      ),
    },
    {
      header: 'Disabled Item',
      children: 'Disabled Content',
      startExpanded: false,
      disabled: true,
    },
  ];

  const [panelItems] = useState(items);

  return (
    <ThemeProvider>
      <ExpandablePanel
        items={panelItems}
        multipleOpens={false}
        preventAllClosed={false}
      />
    </ThemeProvider>
  );
};
async function testExpandablePanel(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);

  const button1 = await canvas.findByRole('button', { name: /Item 1/i });
  const panel1 = button1.closest('[data-testid="panel-item"]') as HTMLElement;
  const body1 = within(panel1).getByTestId('panel-body-wrapper');

  expect(body1).toHaveAttribute('height', '0px');
  expect(body1).toHaveAttribute('data-expanded', 'false');

  await userEvent.click(button1);
  expect(body1).not.toHaveAttribute('height', '0px');
  expect(body1).toHaveAttribute('data-expanded', 'true');

  await userEvent.click(button1);
  expect(body1).toHaveAttribute('height', '0px');
  expect(body1).toHaveAttribute('data-expanded', 'false');

  const buttonDisabled = await canvas.findByRole('button', {
    name: /Disabled Item/i,
  });
  expect(buttonDisabled).toBeDisabled();

  const btnPrimary = await canvas.findAllByTestId('button-primary');
  expect(btnPrimary[0]).toHaveTextContent('Click Me');

  const btnSecondary = await canvas.findByTestId('button-secondary');
  expect(btnSecondary).toHaveTextContent('Click Me');

  const btnError = await canvas.findByTestId('button-error');
  expect(btnError).toHaveTextContent('Click Me');
}

export const Primary: Story = {
  render: () => <ExpandablePanelWithHooks />,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await testExpandablePanel(canvasElement);
  },
};
