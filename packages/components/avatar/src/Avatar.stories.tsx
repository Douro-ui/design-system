import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import { AvatarProps } from './avatar.types';
import { ThemeProvider } from '@douro-ui/react';
import { PartialStoryFn } from 'storybook/internal/types';
import { expect, userEvent, within } from '@storybook/test';

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
    children: 'DS',
    fallbackText: 'DS',
  },
  argTypes: {
    typeAvt: {
      control: false,
    },
    size: {
      control: { options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    },
    src: {
      control: 'text',
    },
    badge: {
      control: { type: 'boolean' },
    },
    badgeProps: {
      typeBadge: {
        control: {
          type: 'select',
          options: ['alert', 'neutral', 'success', 'warning'],
        },
      },
      count: {
        control: { type: 'number', min: 0, max: 99 },
      },
      position: {
        control: {
          type: 'select',
          options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
        },
      },
      size: {
        control: { type: 'select', options: ['sm', 'md', 'lg'] },
      },
    },
  },
} satisfies Meta<AvatarProps>;

export default meta;

type Story = StoryObj<AvatarProps>;

export const Base: Story = {
  args: {
    size: 'lg',
    children: 'DS',
  },
};

export const Image: Story = {
  args: {
    size: 'lg',
    src: 'https://robohash.org/mail@ashallendesign.co.uk',
    fallbackText: 'DS',
    imgProps: { alt: 'Avatar Image' },
  },
};

export const ImageWithError: Story = {
  args: {
    size: 'md',
    src: 'https://invalid-url.com/invalid-image.png',
    fallbackText: 'DS',
    imgProps: { alt: 'Avatar Image' },
  },
};

export const AvatarWithBadge: Story = {
  args: {
    size: 'xxl',
    fallbackText: 'DS',
    badge: true,
    badgeProps: { typeBadge: 'success', position: 'top-right', size: 'xl' },
  },
};

export const ImageAvatarWithBadge: Story = {
  args: {
    size: 'lg',
    src: 'https://robohash.org/mail@ashallendesign.co.uk',
    fallbackText: 'DS',
    imgProps: { alt: 'Avatar Image' },
    badge: true,
    badgeProps: { typeBadge: 'success', position: 'top-right', size: 'md' },
  },
};

Base.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const avatar = canvas.getByTestId('avatar-base');
  expect(avatar).toBeVisible();

  await userEvent.click(avatar);
  expect(avatar).toHaveTextContent('DS');
  expect(avatar).toHaveClass('css-wfuucg');
};

Image.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const avatar = canvas.getByTestId('avatar-image');
  expect(avatar).toBeVisible();

  const img = canvas.getByRole('img', { name: /avatar image/i });
  expect(img).toBeVisible();
  expect(img).toHaveAttribute(
    'src',
    'https://robohash.org/mail@ashallendesign.co.uk',
  );
  expect(avatar).toHaveClass('css-10la8wm');
};

ImageWithError.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const avatar = canvas.getByTestId('avatar-image');
  expect(avatar).toBeVisible();

  expect(avatar).toBeInTheDocument();
  const img = canvas.getByRole('img', { name: /avatar image/i });
  expect(img).toBeVisible();
  expect(img).toHaveAttribute(
    'src',
    'https://invalid-url.com/invalid-image.png',
  );
  expect(avatar).toHaveClass('css-10la8wm');
};
