import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Carousel from './Carousel';
import { CarouselProps } from './carousel.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { fn, userEvent, within } from '@storybook/test';

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
    disabled: false,
    autoplay: false,
    visibleSlides: 2,
    showArrows: true,
    showIndicators: true,
    onClick: fn(),
    slides: [],
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    autoplay: {
      control: {
        type: 'boolean',
      },
    },
    visibleSlides: {
      control: 'number',
    },
    showArrows: {
      control: {
        type: 'boolean',
      },
    },
    showIndicators: {
      control: {
        type: 'boolean',
      },
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
    disabled: false,
    autoplay: false,
    visibleSlides: 1,
    showArrows: true,
    showIndicators: true,
    onClick: fn(),
    slides: [
      { id: 'slide 1', children: <div>Slide 1</div> },
      {
        id: 'slide 2',
        children: (
          <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
        ),
      },
      {
        id: 'slide 3',
        children: (
          <video controls>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ),
      },
    ],
  },
};
// export const Disabled: Story = {
//   args: {
//     disabled: true,
//     visibleSlides: 1,
//     autoplay: false,
//     showArrows: true,
//     showIndicators: false,
//     children: [
//       <CarouselSlide key="slide1">
//         <div style={{ backgroundColor: 'lightblue', height: '200px' }}>
//           Slide 1
//         </div>
//       </CarouselSlide>,
//       <CarouselSlide key="slide2">
//         <div style={{ backgroundColor: 'lightcoral', height: '200px' }}>
//           Slide 2
//         </div>
//       </CarouselSlide>,
//       <CarouselSlide key="slide3">
//         <div style={{ backgroundColor: 'lightgreen', height: '200px' }}>
//           Slide 3
//         </div>
//       </CarouselSlide>,
//       <CarouselSlide key="slide4">
//         <div style={{ backgroundColor: 'lightyellow', height: '200px' }}>
//           Slide 4
//         </div>
//       </CarouselSlide>,
//     ],
//   },
// };

// export const AutoPlay: Story = {
//   args: {
//     disabled: false,
//     autoplay: true,
//     autoplayInterval: 2000,
//     visibleSlides: 1,
//     showArrows: true,
//     showIndicators: true,
//     onClick: fn(),
//     children: [
//       <CarouselSlide key="slide1">
//         <div style={{ backgroundColor: 'lightblue', height: '200px' }}>
//           Slide 1
//         </div>
//       </CarouselSlide>,
//       <CarouselSlide key="slide2">
//         <img
//           src="https://via.placeholder.com/400x200"
//           alt="Placeholder"
//           style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//         />
//       </CarouselSlide>,
//       <CarouselSlide key="slide3">
//         <video
//           controls
//           style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//         >
//           <source
//             src="https://www.w3schools.com/html/mov_bbb.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </CarouselSlide>,
//       <CarouselSlide key="slide4">
//         <div style={{ backgroundColor: 'lightyellow', height: '200px' }}>
//           Slide 4
//         </div>
//       </CarouselSlide>,
//     ],
//   },
// };

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

// AutoPlay.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
//   testCarousel(canvasElement);
// };
