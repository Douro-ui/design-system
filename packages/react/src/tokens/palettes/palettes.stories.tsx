import { Meta, StoryObj } from '@storybook/react';
import PaletteStory from './PaletteStory';

const meta: Meta = {
  title: 'Tokens/Colors',
  component: PaletteStory,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: StoryObj = {
  render: () => <PaletteStory />,
};

export const Default = Template;
