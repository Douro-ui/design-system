import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import ExpandablePanel from './ExpandablePanel';
import { ExpandablePanelProps } from './expandablePanel.types';
import Button from '@douro-ui/button';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { fn } from '@storybook/test';

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
