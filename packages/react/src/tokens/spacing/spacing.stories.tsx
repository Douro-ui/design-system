import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Block, Container, Label } from './SpacingStory.styles';
import theme from '../../theme/theme';

const SpacingStory: React.FC = () => {
  const spacingKeys = Object.keys(
    theme.spacing,
  ) as (keyof typeof theme.spacing)[];

  return (
    <Container>
      {spacingKeys.map((spacingKey: keyof typeof theme.spacing) => (
        <Block key={spacingKey} spacing={theme.spacing[spacingKey]}>
          <Label spacing={spacingKey}>{spacingKey.split('spacing')}</Label>
        </Block>
      ))}
    </Container>
  );
};

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
