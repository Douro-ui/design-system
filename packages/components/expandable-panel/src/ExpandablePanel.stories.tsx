import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import ExpandablePanel from './ExpandablePanel';
import { ExpandablePanelProps } from './expandablePanel.types';
import Button, { ButtonType } from '@douro-ui/button';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { expect, userEvent, within } from '@storybook/test';

const exampleItems = [
  {
    header: 'Item 1',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    startExpanded: false,
  },
  {
    header: 'Item 2',
    children: 'Nulla blandit lectus sit amet purus ultricies.',
    startExpanded: true,
  },
  {
    header: 'Item 3',
    children: 'Nulla blandit lectus sit amet purus ultricies.',
    startExpanded: false,
  },
];

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
    items: exampleItems,
  },
  argTypes: {
    items: { control: 'object' },
  },
} satisfies Meta<ExpandablePanelProps>;

export default meta;

type Story = StoryObj<ExpandablePanelProps>;

export const Primary: Story = {
  args: {
    items: [
      {
        header: 'Primary Item 1',
        children:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in. ',
        startExpanded: false,
      },
      {
        header: 'Primary Item 2',
        children:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in. ',
        startExpanded: true,
      },
      {
        header: 'Item 3',
        children: (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <div>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                blandit lectus sit amet purus ultricies, a pharetra lorem
                lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum
                nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras
                scelerisque, nibh id dignissim porta, massa lectus fermentum
                nulla, non maximus urna ipsum at massa. Nulla venenatis quam
                ligula, sit amet convallis sem fringilla in.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button>Click Me</Button>
              <Button typeBtn={ButtonType.Secondary}>Click Me</Button>
              <Button typeBtn={ButtonType.Error}>Click Me</Button>
              <Button disabled>Click Me</Button>
            </div>
          </div>
        ),
      },
      {
        header: 'Disabled Item ',
        children:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in. ',
        startExpanded: false,
        disabled: true,
      },
    ],
    preventAllClosed: false,
    multipleOpens: false,
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

  const buttons = await canvas.findAllByRole('button');
  const [firstButton, secondButton, thirdButton, forthButton] = buttons;
  await expect(firstButton).toHaveTextContent('Primary Item 1');

  await userEvent.click(firstButton);
  const { getByText } = within(document.body);
  const body = getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in.',
  );
  await expect(body).toBeVisible();

  await userEvent.click(firstButton);
  await expect(body).not.toBeVisible();

  testExpandablePanel(firstButton, {
    color: 'rgb(0, 0, 0)',
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    cursor: 'pointer',
    marginRight: '0px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  await expect(secondButton).toHaveTextContent('Primary Item 2');

  await userEvent.click(secondButton);
  const body2 = getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in.',
  );
  await expect(body2).toBeVisible();

  await userEvent.click(secondButton);
  await expect(body2).not.toBeVisible();

  testExpandablePanel(secondButton, {
    color: 'rgb(0, 0, 0)',
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    cursor: 'pointer',
    marginRight: '0px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  await expect(thirdButton).toHaveTextContent('Item 3');

  await userEvent.click(thirdButton);
  const body3 = getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit lectus sit amet purus ultricies, a pharetra lorem lacinia. Sed odio dui, sodales ut risus et, tincidunt vestibulum nunc. Morbi quis lobortis dui. Ut a tempus erat. Cras scelerisque, nibh id dignissim porta, massa lectus fermentum nulla, non maximus urna ipsum at massa. Nulla venenatis quam ligula, sit amet convallis sem fringilla in.',
  );
  await expect(body3).toBeVisible();

  await userEvent.click(thirdButton);
  await expect(body3).not.toBeVisible();

  await userEvent.click(thirdButton);

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

  testExpandablePanel(thirdButton, {
    color: 'rgb(0, 0, 0)',
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    cursor: 'pointer',
    marginRight: '0px',
    maxWidth: 'none',
    maxHeight: 'none',
  });
  await expect(forthButton).toHaveTextContent('Disabled Item');

  await expect(forthButton).toBeDisabled();

  testExpandablePanel(forthButton, {
    color: 'rgb(162, 183, 195)',
    fontSize: '20px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    cursor: 'not-allowed',
    marginRight: '0px',
    maxWidth: 'none',
    maxHeight: 'none',
  });
};
