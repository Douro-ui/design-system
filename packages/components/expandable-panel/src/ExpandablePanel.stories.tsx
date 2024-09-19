import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import ExpandablePanel from './ExpandablePanel';
import { ExpandablePanelProps } from './expandablePanel.types';
import Button from '@douro-ui/button';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';

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
              <Button typeBtn="primary">Click Me</Button>
              <Button typeBtn="secondary">Click Me</Button>
              <Button typeBtn="error">Click Me</Button>
              <Button typeBtn="primary" disabled>
                Click Me
              </Button>
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
