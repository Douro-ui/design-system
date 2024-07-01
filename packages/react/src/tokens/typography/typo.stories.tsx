import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TypographyStory from './TypoStory';

const meta: Meta = {
  title: 'Tokens/Typography',
  component: TypographyStory,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: StoryObj = {
  render: () => <TypographyStory />,
};

export const Default = Template;
