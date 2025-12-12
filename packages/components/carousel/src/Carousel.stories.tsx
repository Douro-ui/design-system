import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import Carousel from './Carousel';
import { CarouselProps } from './carousel.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { expect, fn, within } from 'storybook/test';
import Picture from '@douro-ui/picture';

const meta: Meta<CarouselProps> = {
  title: 'Example/Carousel',
  component: Carousel,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, CarouselProps>) => (
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
    autoplay: false,
    visibleSlides: 2,
    showIcons: true,
    showIndicators: true,
    onClick: fn(),
    slides: [],
  },
  argTypes: {
    autoplay: {
      control: {
        type: 'boolean',
      },
    },
    autoplayInterval: {
      control: 'number',
    },
    visibleSlides: {
      control: 'number',
    },
    showIcons: {
      control: {
        type: 'boolean',
      },
    },
    showIndicators: {
      control: {
        type: 'boolean',
      },
    },
    leftIcon: {
      control: 'object',
    },
    rightIcon: {
      control: 'object',
    },
    slides: {
      control: {
        type: 'object',
      },
    },
    onClick: fn(),
  },
} satisfies Meta<CarouselProps>;

export default meta;

type Story = StoryObj<CarouselProps>;

export const Default: Story = {
  args: {
    autoplay: false,
    visibleSlides: 1,
    showIcons: true,
    showIndicators: true,
    infiniteLoop: true,
    onClick: fn(),
    leftIcon: <svg>Icon</svg>,
    rightIcon: <svg>Icon</svg>,
    slides: [
      {
        id: 'slide 1',
        children: (
          <Picture
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt="Slide 1"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
      },
      {
        id: 'slide 2',
        children: (
          <Picture
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt="Slide 2"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
      },
      {
        id: 'slide 3',
        children: <div>HTML Content</div>,
      },
    ],
  },
  render: (args: CarouselProps) => (
    <div
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '50rem',
        maxHeight: '31.25rem',
        margin: '0 auto',
      }}
    >
      <Carousel {...args} />
    </div>
  ),
};

export const AutoPlay: Story = {
  args: {
    autoplay: true,
    autoplayInterval: 1000,
    visibleSlides: 1,
    showIcons: false,
    showIndicators: true,
    infiniteLoop: true,
    onClick: fn(),
    slides: [
      {
        id: 'slide 1',
        children: (
          <Picture
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt="Slide 1"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
      },
      {
        id: 'slide 2',
        children: (
          <Picture
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt="Slide 2"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
      },
      {
        id: 'slide 3',
        children: <div>HTML Content</div>,
      },
    ],
  },
};

const testCarousel = async (canvasElement: HTMLElement): Promise<void> => {
  const canvas = within(canvasElement);

  // Check that buttons are visible
  const buttons = canvas.getAllByRole('button');
  expect(buttons.length).toBeGreaterThan(0);
  buttons.forEach((btn: HTMLElement) => {
    expect(btn).toBeVisible();
  });

  // Check that images are visible
  const images = canvas.getAllByRole('img');
  expect(images.length).toBeGreaterThan(0);
  images.forEach((img: HTMLElement) => {
    expect(img).toBeVisible();
  });

  // Verify first slide is visible (may have duplicates in infinite loop)
  const firstSlides = canvas.getAllByAltText('Slide 1');
  expect(firstSlides.length).toBeGreaterThan(0);
  expect(firstSlides[0]).toBeVisible();
};

Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await testCarousel(canvasElement);
};

AutoPlay.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await testCarousel(canvasElement);
};
