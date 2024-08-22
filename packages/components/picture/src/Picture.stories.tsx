import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Picture from './Picture';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { PictureProps } from './picture.types';
import { expect, within } from '@storybook/test';

const meta: Meta<typeof Picture> = {
  title: 'Example/Picture',
  component: Picture,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, PictureProps>) => (
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
    src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
    alt: 'A descriptive alt text',
    disabled: false,
  },
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<PictureProps>;

export default meta;

type Story = StoryObj<PictureProps>;

export const Image: Story = {
  args: {
    src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
    alt: 'A descriptive alt text',
  },
};

export const ImageDisabled: Story = {
  args: {
    src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
    alt: 'A descriptive alt text',
    disabled: true,
  },
};
async function testImage(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  const picture = canvas.getByRole('img');

  expect(picture).toBeVisible();

  expect(picture).toHaveAttribute(
    'src',
    'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
  );

  expect(picture).toHaveAttribute('alt', 'A descriptive alt text');
  expect(picture).toHaveStyle('display: block');
  expect(picture).toHaveStyle('position: static');
  expect(picture).toHaveStyle('box-sizing: content-box');
  expect(picture).toHaveStyle('max-height: none');
  expect(picture).toHaveStyle('height: 525px');
  expect(picture).toHaveStyle('width: 800px');
}
Image.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  testImage(canvasElement);
};
ImageDisabled.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  testImage(canvasElement);
};
