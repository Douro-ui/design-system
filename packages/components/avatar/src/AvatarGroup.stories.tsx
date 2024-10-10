import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import AvatarGroup from './AvatarGroup';
import { AvatarGroupProps } from './avatar.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

const meta: Meta<AvatarGroupProps> = {
  title: 'Example/AvatarGroup',
  component: AvatarGroup,
  decorators: [
    (
      Story: PartialStoryFn<ReactRenderer, AvatarGroupProps>,
    ): EmotionJSX.Element => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: {
    avatars: [
      {
        size: 'xxl',
        fallbackText: 'A',
        src: 'https://robohash.org/user1',
      },
      {
        size: 'xxl',
        fallbackText: 'B',
        src: 'https://robohash.org/user2',
      },
      {
        size: 'xxl',
        fallbackText: 'C',
        src: 'https://robohash.org/user3',
      },
      {
        size: 'xxl',
        fallbackText: 'D',
        src: 'https://robohash.org/user4',
      },
      {
        size: 'xxl',
        fallbackText: 'E',
        src: 'https://robohash.org/user5',
      },
      {
        size: 'xxl',
        fallbackText: 'F',
        src: 'https://robohash.org/user6',
      },
    ],
    maxVisible: 5,
  },
};
