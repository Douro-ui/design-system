import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';
import { ThemeProvider } from '@douro-ui/react';

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
      <Link href="https://www.google.com" aria-label="Link to Google">
        Google
      </Link>
    </ThemeProvider>
  ),
};
