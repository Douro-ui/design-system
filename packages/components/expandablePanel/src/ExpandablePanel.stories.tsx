import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import ExpandablePanel from './ExpandablePanel';
import { ExpandablePanelProps } from './expandablePanel.types';
import Button from '@douro-ui/button';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { fn } from '@storybook/test';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<ExpandablePanelProps> = {
  title: 'Example/ExpandablePanel',
  component: ExpandablePanel,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, ExpandablePanelProps>) => (
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
    header: 'Expandable Panel Header',
    children: 'Expandable Panel Body Content',
    disabled: false,
    startExpanded: false,
    hasIcon: true,
    onClick: fn(),
  },
  argTypes: {
    startExpanded: {
      control: 'boolean',
    },
    expanded: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    hasIcon: {
      control: 'boolean',
    },
    onClick: fn(),
  },
} satisfies Meta<ExpandablePanelProps>;

export default meta;

type Story = StoryObj<ExpandablePanelProps>;

export const Primary: Story = {
  args: {
    header: 'Expandable Panel Header',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in. ',

    onClick: fn(),
    disabled: false,
    startExpanded: false,
  },
};

export const StartExpanded: Story = {
  args: {
    header: 'Expandable Panel Header',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in. ',
    onClick: fn(),
    disabled: false,
    startExpanded: true,
  },
};

export const WithButton: Story = {
  args: {
    header: 'Expandable Panel Header',
    children: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button typeBtn="primary">Click Me</Button>
        <Button typeBtn="secondary">Click Me</Button>
        <Button typeBtn="error">Click Me</Button>
        <Button typeBtn="primary" disabled>
          Click Me
        </Button>
      </div>
    ),
    onClick: fn(),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    header: 'Expandable Panel Header',
    children: 'Expandable Panel Body Content',
    onClick: fn(),
    disabled: true,
  },
};
const checkExpandablePanelStyles = (
  button: HTMLElement,
  styles: { [key: string]: string },
): void => {
  Object.entries(styles).forEach(([property, value]: [string, string]) => {
    expect(button).toHaveStyle(`${property}: ${value}`);
  });
};

const testExpandablePanel = async (
  canvasElement: HTMLElement,
  styles: { [key: string]: string },
): Promise<void> => {
  checkExpandablePanelStyles(canvasElement, styles);
};

Primary.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}): Promise<void> => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole('button');
  await expect(button).toHaveTextContent('Expandable Panel Header');

  await userEvent.click(button);
  const { getByText } = within(document.body);
  const body = getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in.',
  );
  await expect(body).toBeVisible();

  await userEvent.click(button);
  await expect(body).not.toBeVisible();

  testExpandablePanel(button, {
    color: '#2860D7',
    border: '1px #000 solid',
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    cursor: 'pointer',
    marginRight: '0px',
    width: '640px',
    maxWidth: 'none',
    maxHeight: 'none',
  });
};
StartExpanded.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}): Promise<void> => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole('button');
  await expect(button).toHaveTextContent('Expandable Panel Header');
  const { getByText } = within(document.body);
  const body = getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in.',
  );

  await expect(body).toBeVisible();

  await userEvent.click(button);
  await expect(body).not.toBeVisible();

  testExpandablePanel(button, {
    color: '#2860D7',
    border: '1px #000 solid',
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    cursor: 'pointer',
    marginRight: '0px',
    width: '640px',
    maxWidth: 'none',
    maxHeight: 'none',
  });
};
WithButton.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}): Promise<void> => {
  const canvas = within(canvasElement);

  const button = await canvas.findAllByRole('button');
  await expect(button[0]).toHaveTextContent('Expandable Panel Header');

  await userEvent.click(button[0]);

  const buttonPrimary: HTMLElement[] =
    await canvas.findAllByTestId('button-primary');
  const buttonIds: string[] = ['button-secondary', 'button-error'];
  const expectedText: string = 'Click Me';

  buttonPrimary.forEach(async (button: HTMLElement) => {
    await expect(button).toHaveTextContent(expectedText);
  });
  userEvent.click(buttonPrimary[0]);
  expect(buttonPrimary[1]).toBeDisabled();

  for (const id of buttonIds) {
    const button: HTMLElement = await canvas.findByTestId(id);
    await expect(button).toHaveTextContent(expectedText);
    userEvent.click(button);
  }

  testExpandablePanel(button[0], {
    color: '#2860D7',
    border: '1px #000 solid',
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    cursor: 'pointer',
    marginRight: '0px',
    width: '640px',
    maxWidth: 'none',
    maxHeight: 'none',
  });
};

Disabled.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}): Promise<void> => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole('button');
  await expect(button).toHaveTextContent('Expandable Panel Header');

  await expect(button).toBeDisabled();

  testExpandablePanel(button, {
    color: 'rgb(162, 183, 195)',
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    cursor: 'not-allowed',
    marginRight: '0px',
    width: '640px',
    maxWidth: 'none',
    maxHeight: 'none',
  });
};
