import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Video from './Video';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { VideoProps } from './video.types';

const meta: Meta<typeof Video> = {
  title: 'Example/Video',
  component: Video,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, VideoProps>) => (
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
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'poster.jpg',
    controls: true,
    autoPlay: false,
    loop: false,
    muted: false,
    disabled: false,
  },
  argTypes: {
    src: {
      control: 'text',
    },
    poster: {
      control: 'text',
    },
    controls: {
      control: 'boolean',
    },
    autoPlay: {
      control: 'boolean',
    },
    loop: {
      control: 'boolean',
    },
    muted: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<VideoProps>;

export default meta;

type Story = StoryObj<VideoProps>;

export const VideoEnabled: Story = {
  args: {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'poster.jpg',
    controls: true,
    autoPlay: false,
    loop: false,
    muted: false,
  },
};

export const VideoDisabled: Story = {
  args: {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'poster.jpg',
    controls: true,
    autoPlay: false,
    loop: false,
    muted: false,
    disabled: true,
  },
};
