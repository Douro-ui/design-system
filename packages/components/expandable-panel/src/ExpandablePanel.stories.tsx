import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import ExpandablePanel from './ExpandablePanel';
import { ExpandablePanelProps } from './expandablePanel.types';
import Button, { ButtonType } from '@douro-ui/button';
import { ThemeProvider } from '@douro-ui/react';
import { expect, userEvent, within } from '@storybook/test';
import { PartialStoryFn } from 'storybook/internal/types';

const exampleItems: ExpandablePanelProps['items'] = [
  { header: 'Item 1', children: 'Content 1', startExpanded: false },
  { header: 'Item 2', children: 'Content 2', startExpanded: true },
  {
    header: 'Item 3',
    children: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button data-testid="button-primary">Click Me</Button>
        <Button data-testid="button-secondary" typeBtn={ButtonType.Secondary}>
          Click Me
        </Button>
        <Button data-testid="button-error" typeBtn={ButtonType.Error}>
          Click Me
        </Button>
        <Button disabled>Click Me</Button>
      </div>
    ),
  },
  { header: 'Disabled Item', children: 'Disabled Content', disabled: true },
];

const meta: Meta<typeof ExpandablePanel> = {
  title: 'Example/ExpandablePanel',
  component: ExpandablePanel,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, ExpandablePanelProps>) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    items: exampleItems,
    multipleOpens: false,
    preventAllClosed: false,
  },
  argTypes: {
    items: { control: 'object' },
    multipleOpens: { control: 'boolean' },
    preventAllClosed: { control: 'boolean' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<ExpandablePanelProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const checkExpandablePanelStyles = (
  element: HTMLElement,
  styles: { [key: string]: string },
): void => {
  Object.entries(styles).forEach((entry: [string, string]) => {
    const [property, value] = entry;
    expect(element).toHaveStyle(`${property}: ${value}`);
  });
};

export const Primary: Story = {
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    const button1 = await canvas.findByRole('button', { name: /Item 1/i });
    const button2 = await canvas.findByRole('button', { name: /Item 2/i });
    const button3 = await canvas.findByRole('button', { name: /Item 3/i });
    const buttonDisabled = await canvas.findByRole('button', {
      name: /Disabled Item/i,
    });

    await expect(button1).toHaveTextContent('Item 1');
    await userEvent.click(button1);
    const body1 = within(
      button1.closest('[data-testid="panel-item"]')!,
    ).getByTestId('panel-body-wrapper');
    await expect(body1).toHaveAttribute('data-expanded', 'true');
    await userEvent.click(button1);
    await expect(body1).toHaveAttribute('data-expanded', 'false');
    checkExpandablePanelStyles(button1, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
    });

    await expect(button2).toHaveTextContent('Item 2');
    await userEvent.click(button2);
    const body2 = within(
      button2.closest('[data-testid="panel-item"]')!,
    ).getByTestId('panel-body-wrapper');
    await expect(body2).toHaveAttribute('data-expanded', 'true');
    await userEvent.click(button2);
    await expect(body2).toHaveAttribute('data-expanded', 'false');

    await expect(button3).toHaveTextContent('Item 3');
    await userEvent.click(button3);

    const btnPrimary = await canvas.findAllByTestId('button-primary');
    const btnSecondary = await canvas.findByTestId('button-secondary');
    const btnError = await canvas.findByTestId('button-error');

    await expect(btnPrimary[0]).toHaveTextContent('Click Me');
    await expect(btnSecondary).toHaveTextContent('Click Me');
    await expect(btnError).toHaveTextContent('Click Me');
    await expect(btnPrimary[1]).toBeDisabled();

    await userEvent.click(btnPrimary[0]);
    await userEvent.click(btnSecondary);
    await userEvent.click(btnError);

    await expect(buttonDisabled).toHaveTextContent('Disabled Item');
    await expect(buttonDisabled).toBeDisabled();
    checkExpandablePanelStyles(buttonDisabled, {
      cursor: 'not-allowed',
    });
  },
};
