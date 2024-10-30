import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Link from './Link';
import { ThemeProvider } from '@douro-ui/react';
import { expect, userEvent, within } from '@storybook/test';
import { PartialStoryFn } from 'storybook/internal/types';
import { LinkProps } from './link.types';
import { Icon } from '@douro-ui/icon';
import { ReactElement } from 'react';

const meta: Meta<LinkProps> = {
  title: 'Example/Link',
  component: Link,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, LinkProps>): ReactElement => (
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
    isDisabled: false,
    href: 'https://metyis.com/',
    ariaLabel: 'Link to Metyis',
    children: 'Metyis',
    size: 'lg',
    styled: {},
  },
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
    },
    isUnderline: {
      control: 'boolean',
    },
    styled: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  args: {
    href: 'https://metyis.com/',
    ariaLabel: 'Link to Metyis',
    size: 'lg',
    isUnderline: true,
    children: 'Metyis',
    target: '_blank',
    iconBefore: () => <Icon name="star" />,
    iconAfter: () => <Icon name="star" />,
  },
};

export const Line: Story = {
  args: {
    href: 'https://metyis.com/',
    ariaLabel: 'Link to Metyis',
    size: 'lg',
    children: 'Metyis',
    target: '_blank',
  },
};
Line.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');

  expect(link).toHaveTextContent('Metyis');
  expect(link).toHaveAccessibleName('Link to Metyis');
  expect(link).toHaveStyle('color: #2860D7');
  expect(link).toHaveStyle('font-size: 16px');
  expect(link).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  expect(link).toHaveStyle('position: static');
  expect(link).toHaveStyle('padding: 0');
  expect(link).toHaveStyle('clip: auto');
  expect(link).toHaveStyle('font-weight: 400');
  expect(link).toHaveStyle('cursor: pointer');
  expect(link).toHaveStyle('box-sizing: content-box');
  expect(link).toHaveStyle('opacity: 1');
  expect(link).toHaveStyle('pointer-events: auto');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('href', 'https://metyis.com/');
  userEvent.hover(link);
  expect(link).toHaveStyle('text-decoration: none solid rgb(40, 96, 215)');
  expect(link).toBeVisible();
  expect(link).toBeEnabled();
  userEvent.click(link);
};
