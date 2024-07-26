import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';
import { ThemeProvider } from '@douro-ui/react';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof Link> = {
  title: 'Example/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLink: Story = {
  render: () => (
    <ThemeProvider>
      <Link
        href="https://www.google.com"
        aria-label="Link to Google"
        target={'_blank'}
      >
        Google
      </Link>
    </ThemeProvider>
  ),
};
DefaultLink.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');

  expect(link).toHaveTextContent('Google');
  expect(link).toHaveAccessibleName('Link to Google');
  expect(link).toHaveStyle('color: #2860D7');
  expect(link).toHaveStyle('font-size: 16px');
  expect(link).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  expect(link).toHaveStyle('position: static');
  expect(link).toHaveStyle('width: auto');
  expect(link).toHaveStyle('height: auto');
  expect(link).toHaveStyle('padding: 0');
  expect(link).toHaveStyle('clip: auto');
  expect(link).toHaveStyle('font-weight: 400');
  expect(link).toHaveStyle('cursor: pointer');
  expect(link).toHaveStyle('box-sizing: content-box');
  expect(link).toHaveStyle('opacity: 1');
  expect(link).toHaveStyle('pointer-events: auto');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('href', 'https://www.google.com');
  userEvent.hover(link);
  expect(link).toHaveStyle('text-decoration: none solid rgb(40, 96, 215)');
  expect(link).toBeVisible();
  expect(link).toBeEnabled();
  userEvent.click(link);
};
