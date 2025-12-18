import { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import Video from './Video';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { VideoProps } from './video.types';
import { expect, userEvent, within } from 'storybook/test';

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
    styled: {
      width: '300px',
      height: '150px',
    },
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
    styled: {
      width: '300px',
      height: '150px',
    },
  },
};
const playVideo = async ({
  canvasElement,
  isEnabled,
}: {
  canvasElement: HTMLElement;
  isEnabled: boolean;
}) => {
  const canvas = within(canvasElement);
  const videoContainer = await canvas.findByTestId('video-container-style');

  expect(videoContainer).toBeInTheDocument();
  expect(videoContainer).toHaveAttribute(
    'src',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  );
  expect(videoContainer).toHaveStyle({
    width: '300px',
    height: '150px',
    display: 'block',
  });
  expect(videoContainer).toHaveAttribute('poster', 'poster.jpg');

  if (isEnabled) {
    expect(videoContainer).toBeEnabled();
    userEvent.hover(videoContainer);
    userEvent.click(videoContainer);
  } else {
    expect(videoContainer).toHaveStyle('cursor: not-allowed');
  }
};

VideoEnabled.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  await playVideo({ canvasElement, isEnabled: true });
};

VideoDisabled.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  await playVideo({ canvasElement, isEnabled: false });
};
