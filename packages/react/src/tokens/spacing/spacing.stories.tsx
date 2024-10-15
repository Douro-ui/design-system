import { Meta, StoryObj } from '@storybook/react';
import SpacingStory from './SpacingStory.styles';

const meta: Meta = {
  title: 'Tokens/Spacing',
  component: SpacingStory,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: StoryObj = {
  render: () => <SpacingStory />,
};

export const Default = Template;
