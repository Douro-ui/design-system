import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import AvatarGroup from './AvatarGroup';
import { AvatarGroupProps } from './avatar.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { ReactElement } from 'react';

const meta: Meta<AvatarGroupProps> = {
  title: 'Example/AvatarGroup',
  component: AvatarGroup,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, AvatarGroupProps>): ReactElement => (
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
        src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
      },
      {
        size: 'xxl',
        fallbackText: 'B',
      },
      {
        size: 'xxl',
        fallbackText: 'C',
        src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
      },
      {
        size: 'xxl',
        fallbackText: 'D',
      },
      {
        size: 'xxl',
        fallbackText: 'E',
        src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
      },
      {
        size: 'xxl',
        fallbackText: 'F',
      },
    ],
    maxVisible: 5,
  },
};
