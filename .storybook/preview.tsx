import type { Preview, ReactRenderer } from '@storybook/react-vite';
import React from 'react';
import { ThemeProvider } from '@douro-ui/react';
import type { PartialStoryFn } from 'storybook/internal/csf';

const preview: Preview = {
  decorators: [
    (
      Story: PartialStoryFn<
        ReactRenderer,
        {
          [x: string]: unknown;
        }
      >,
    ): React.JSX.Element => (
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
