import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Carousel from './Carousel';
import { CarouselProps } from './carousel.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { fn, userEvent, within } from '@storybook/test';
import Picture from '@douro-ui/picture';
import { Icon } from '@douro-ui/icon';

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
    leftIcon: <Icon name="chevron-up" />,
    rightIcon: <Icon name="chevron-down" />,

    slides: [
      {
        id: 'slide 1',
        children: (
          <Picture
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt="test image"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
      },
      {
        id: 'slide 2',
        children: (
          <Picture
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt="test image"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
      },
      {
        id: 'slide 3',
        children: (
          <Picture
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt="test image"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
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
            alt="test image"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
      },
      {
        id: 'slide 2',
        children: (
          <Picture
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt="test image"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
      },
      {
        id: 'slide 3',
        children: (
          <Picture
            src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
            alt="test image"
            styled={{ width: '100%', height: '100%' }}
          />
        ),
      },
    ],
  },
};

const testCarousel = async (canvasElement: HTMLElement): Promise<void> => {
  const canvas = within(canvasElement);

  const lists = canvas.getAllByRole('list');
  lists.forEach((list: HTMLElement) => {
    expect(list).toBeVisible();
  });

  const listitem = canvas.getAllByRole('listitem');
  listitem.forEach((listv: HTMLElement) => {
    expect(listv).toBeVisible();
  });

  const button = canvas.getAllByRole('button');
  button.forEach((btn: HTMLElement) => {
    expect(btn).toBeVisible();
  });

  const img = canvas.getAllByRole('img');
  img.forEach((btn: HTMLElement) => {
    expect(btn).toBeVisible();
  });

  const firstSlide = canvas.getAllByAltText('Slide 1')[0];
  expect(firstSlide).toBeVisible();

  const nextButton = canvas.getByRole('button', { name: /next/i });
  await userEvent.click(nextButton);

  const secondSlide = canvas.getByAltText('Slide 2');
  expect(secondSlide).toBeVisible();

  await userEvent.click(nextButton);

  const htmlContent = canvas.getByText('HTML Content');
  expect(htmlContent).toBeVisible();

  await userEvent.click(nextButton);

  const secondFirstSlide = canvas.getAllByAltText('Slide 1')[1];
  expect(secondFirstSlide).toBeVisible();

  const prevButtonBar = canvas.getByRole('button', { name: /previous/i });
  await userEvent.click(prevButtonBar);
  await userEvent.click(prevButtonBar);
  await userEvent.click(prevButtonBar);
  await userEvent.click(prevButtonBar);
  expect(secondFirstSlide).toBeVisible();
  expect(secondSlide).toBeVisible();
  expect(htmlContent).toBeVisible();
  expect(firstSlide).toBeVisible();

  const nextButtonBar = canvas.getByRole('button', {
    name: /next slide\/ item/i,
  });
  await userEvent.click(nextButtonBar);
  await userEvent.click(nextButtonBar);
  await userEvent.click(nextButtonBar);

  const prevButton = canvas.getByRole('button', {
    name: /previous slide \/ item/i,
  });
  await userEvent.click(prevButton);
  await userEvent.click(prevButton);
  await userEvent.click(prevButton);
};
Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  testCarousel(canvasElement);
};

AutoPlay.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  testCarousel(canvasElement);
};
