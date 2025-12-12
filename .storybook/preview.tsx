import type { Preview } from '@storybook/react-vite';
import type { StoryFn } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '@douro-ui/react';

const preview: Preview = {
  decorators: [
    (Story: StoryFn): React.JSX.Element => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },

  tags: ['autodocs'],
};

export default preview;
