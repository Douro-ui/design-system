import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@douro-ui/react';
import { GridProps, GridStyledProps } from './grid.types';
import { PartialStoryFn } from 'storybook/internal/types';
import { Grid, GridItem } from './Grid';
import styled from '@emotion/styled';

const meta: Meta<GridProps> = {
  title: 'Example/Grid',
  component: Grid,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer, GridProps>) => (
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
    columns: 12,
    rows: 7,
    gap: '10px',
  },
  argTypes: {
    columns: {
      control: 'number',
    },
    rows: {
      control: 'number',
    },
    gap: {
      control: 'text',
    },
  },
} satisfies Meta<GridProps>;

export default meta;

type Story = StoryObj<GridProps>;

const ContentDemo = styled.div<{
  styled: GridStyledProps;
}>`
  background-color: ${({ styled }: { styled: GridStyledProps }) =>
    styled.backgroundColor};
  color: ${({ styled }: { styled: GridStyledProps }) => styled.color};
  height: ${({ styled }: { styled: GridStyledProps }) =>
    styled.height || 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 0.625rem;
  box-sizing: border-box;
`;

export const GridResponsive: Story = {
  args: {
    columns: 12,
    rows: 7,
    gap: '10px',
  },
  render: (args: GridProps) => (
    <Grid {...args}>
      <GridItem column={1} row={1} spanColumn={12} spanRow={1}>
        <ContentDemo
          styled={{
            backgroundColor: '#080708',
            color: '#ffffff',
            height: '20px',
          }}
        >
          Menu
        </ContentDemo>
      </GridItem>
      <GridItem column={1} row={2} spanColumn={12}>
        <ContentDemo styled={{ backgroundColor: '#C8ADC0', color: '#000000' }}>
          Hero
        </ContentDemo>
      </GridItem>
      <GridItem column={1} row={3} spanColumn={6}>
        <ContentDemo
          styled={{
            backgroundColor: '#6152cc',
            color: '#ffffff',
            height: '40px',
          }}
        >
          Card 1
        </ContentDemo>
      </GridItem>
      <GridItem column={7} row={3} spanColumn={6}>
        <ContentDemo
          styled={{
            backgroundColor: '#6152cc',
            color: '#ffffff',
            height: '40px',
          }}
        >
          Card 2
        </ContentDemo>
      </GridItem>
      <GridItem column={1} row={4} spanColumn={8}>
        <ContentDemo
          styled={{
            backgroundColor: '#3B60E4',
            color: '#ffffff',
            height: '80px',
          }}
        >
          Bigger Card 3
        </ContentDemo>
      </GridItem>
      <GridItem column={9} row={4} spanRow={4} spanColumn={4}>
        <ContentDemo
          styled={{
            backgroundColor: '#3B60E4',
            color: '#ffffff',
            height: '80px',
          }}
        >
          Smaller Card 4
        </ContentDemo>
      </GridItem>
      <GridItem column={1} row={5} spanColumn={12}>
        <ContentDemo styled={{ backgroundColor: '#C8ADC0', color: '#000000' }}>
          Banner
        </ContentDemo>
      </GridItem>
      <GridItem column={1} row={6} spanColumn={12}>
        <ContentDemo styled={{ backgroundColor: '#EDD3C4', color: '#000000' }}>
          Footer
        </ContentDemo>
      </GridItem>
      <GridItem column={1} row={7} spanColumn={12}>
        <ContentDemo
          styled={{
            backgroundColor: '#080708',
            color: '#ffffff',
            height: '20px',
          }}
        >
          Small footer
        </ContentDemo>
      </GridItem>
    </Grid>
  ),
};

export const GridCardType: Story = {
  args: {
    columns: 12,
    rows: 7,
    gap: '10px',
  },
  render: (args: GridProps) => (
    <Grid {...args}>
      <GridItem column={1} row={1} spanColumn={12} spanRow={1}>
        <ContentDemo
          styled={{
            backgroundColor: '#080708',
            color: 'white',
            height: '20px',
          }}
        >
          Menu
        </ContentDemo>
      </GridItem>
      <GridItem column={1} row={2} spanColumn={12}>
        <ContentDemo styled={{ backgroundColor: '#C8ADC0' }}>Hero</ContentDemo>
      </GridItem>
      <GridItem column={1} row={3} spanRow={4} spanColumn={6}>
        <ContentDemo styled={{ backgroundColor: '#C8ADC0', height: '134px' }}>
          Card
        </ContentDemo>
      </GridItem>
      <GridItem column={7} row={3} spanColumn={6}>
        <ContentDemo styled={{ backgroundColor: '#C8ADC0' }}>
          Card 2
        </ContentDemo>
      </GridItem>
      <GridItem column={7} row={4} spanColumn={6}>
        <ContentDemo styled={{ backgroundColor: '#C8ADC0' }}>
          Card 3
        </ContentDemo>
      </GridItem>
      <GridItem column={7} row={5} spanColumn={6}>
        <ContentDemo styled={{ backgroundColor: '#C8ADC0' }}>
          Card 4
        </ContentDemo>
      </GridItem>
      <GridItem column={1} row={6} spanColumn={12}>
        <ContentDemo styled={{ backgroundColor: '#C8ADC0' }}>
          Card 5
        </ContentDemo>
      </GridItem>
    </Grid>
  ),
};
