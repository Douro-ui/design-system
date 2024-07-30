import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import { AvatarProps } from './avatar.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';

const meta: Meta<AvatarProps> = {
  title: 'Example/Avatar',
  component: Avatar,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, AvatarProps>) => (
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
    size: 'lg',
    typeAvt: 'base',
    children: 'DUI',
    fallbackText: 'DUI',
    src: 'https://via.placeholder.com/150',
    img: undefined,
  },
  argTypes: {
    typeAvt: {
      control: {
        type: 'radio',
        options: ['base', 'image'],
      },
    },
    size: {
      control: { options: ['sm', 'md', 'lg', 'xl'] },
    },
    src: {
      control: 'text',
      if: { arg: 'typeAvt', eq: 'image' },
    },
    img: {
      control: 'object',
      if: { arg: 'typeAvt', eq: 'image' },
    },
  },
} satisfies Meta<AvatarProps>;

export default meta;

type Story = StoryObj<AvatarProps>;

export const Base: Story = {
  args: {
    typeAvt: 'base',
    size: 'lg',
    children: 'DUI',
  },
};

export const Image: Story = {
  args: {
    typeAvt: 'image',
    size: 'lg',
    src: 'https://via.placeholder.com/150',
    fallbackText: 'DUI',
    img: { alt: 'Avatar Image' },
  },
};

export const ImageWithError: Story = {
  args: {
    typeAvt: 'image',
    size: 'lg',
    src: 'https://invalid-url.com/invalid-image.png',
    fallbackText: 'DUI',
    img: { alt: 'Avatar Image' },
  },
};
