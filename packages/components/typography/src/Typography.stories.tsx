import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { Body } from './Body';
import { Display } from './Display';
import { Heading } from './Heading';
import { TypographyProps } from './typography.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';

const meta: Meta<TypographyProps> = {
  title: 'Example/Typography',
  component: Display,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, TypographyProps>) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    argTypes: {
      displayType: {
        control: {
          type: 'select',
          options: [
            'display1',
            'display2',
            'display3',
            'display4',
            'display5',
            'display6',
          ],
        },
      },
      headingType: {
        control: {
          type: 'select',
          options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        },
      },
      bodyType: {
        control: {
          type: 'select',
          options: ['body1', 'body2', 'body3', 'body4', 'body5', 'body6'],
        },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<TypographyProps>;

export default meta;

type Story = StoryObj<TypographyProps>;

export const DisplayComponent: Story = {
  args: {
    displayType: 'display1',
    children: 'Display Content',
  },
  argTypes: {
    displayType: {
      control: {
        type: 'select',
        options: [
          'display1',
          'display2',
          'display3',
          'display4',
          'display5',
          'display6',
        ],
      },
    },
  },
  render: (args: TypographyProps) => <Display {...args} />,
};

export const HeadingComponent: Story = {
  args: {
    headingType: 'h1',
    children: 'Heading Content',
  },
  argTypes: {
    headingType: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
  },
  render: (args: TypographyProps) => <Heading {...args} />,
};

export const BodyComponent: Story = {
  args: {
    bodyType: 'body1',
    children: 'Body Content',
  },
  argTypes: {
    bodyType: {
      control: {
        type: 'select',
        options: ['body1', 'body2', 'body3', 'body4', 'body5', 'body6'],
      },
    },
  },
  render: (args: TypographyProps) => <Body {...args} />,
};