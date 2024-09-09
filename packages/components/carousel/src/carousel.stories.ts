import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Carousel from './Carousel';
import { expect, userEvent, within } from '@storybook/test';

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
    name: /next slide \/ item/i,
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

WithoutIndicators.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  testCarousel(canvasElement);
};
