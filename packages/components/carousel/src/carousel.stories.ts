import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Example/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showArrows: { control: 'boolean' },
    showStatus: { control: 'boolean' },
    showIndicators: { control: 'boolean' },
    showThumbs: { control: 'boolean' },
    infiniteLoop: { control: 'boolean' },
    autoPlay: { control: 'boolean' },
    interval: { control: 'number' },
  },
  args: {
    contents: [
      {
        type: 'image',
        content: {
          src: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="white" stroke="black" stroke-width="2"/></svg>',
          alt: 'Slide 1',
        },
      },
      {
        type: 'image',
        content: {
          src: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="white" stroke="black" stroke-width="2"/></svg>',
          alt: 'Slide 2',
        },
      },
      {
        type: 'html',
        content:
          '<div style="width:300px;height:300px;border:2px solid black;display:flex;align-items:center;justify-content:center;">HTML Content</div>',
      },
      {
        type: 'video',
        content: {
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          type: 'video/mp4',
        },
      },
    ],
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: false,
    interval: 3000,
    onClick: action('onClick'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AutoPlay: Story = {
  args: {
    autoPlay: true,
  },
};

export const WithoutIndicators: Story = {
  args: {
    showIndicators: false,
  },
};
