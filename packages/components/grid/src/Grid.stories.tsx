import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@douro-ui/react';
import { GridProps, GridStyledProps } from './grid.types';
import { PartialStoryFn } from 'storybook/internal/types';
import { Grid, GridItem } from './Grid';
import styled from '@emotion/styled';
import { expect, within } from '@storybook/test';

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
const checkGridStyles = (
  button: HTMLElement,
  styles: { [key: string]: string },
): void => {
  Object.entries(styles).forEach(([property, value]: [string, string]) => {
    expect(button).toHaveStyle(`${property}: ${value}`);
  });
};

const testGrid = async (
  canvasElement: HTMLElement,
  styles: { [key: string]: string },
): Promise<void> => {
  checkGridStyles(canvasElement, styles);
};

GridResponsive.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}): Promise<void> => {
  const canvas = within(canvasElement);

  const menu = canvas.getByText('Menu');

  testGrid(menu, {
    color: '#ffffff',
    backgroundColor: '#080708',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '1612px',
    height: '20px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const hero = canvas.getByText('Hero');

  testGrid(hero, {
    color: '#000000',
    backgroundColor: '#C8ADC0',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '1612px',
    height: '38px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const card = canvas.getByText('Card 1');

  testGrid(card, {
    color: '#ffffff',
    backgroundColor: '#6152cc',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '801px',
    height: '40px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const card2 = canvas.getByText('Card 2');

  testGrid(card2, {
    color: '#ffffff',
    backgroundColor: '#6152cc',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '801px',
    height: '40px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const biggerCard3 = canvas.getByText('Bigger Card 3');

  testGrid(biggerCard3, {
    color: '#ffffff',
    backgroundColor: '#3B60E4',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '1071.33px',
    height: '80px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const smallerCard4 = canvas.getByText('Smaller Card 4');

  testGrid(smallerCard4, {
    color: '#ffffff',
    backgroundColor: '#3B60E4',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '530.672px',
    height: '80px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const banner = canvas.getByText('Banner');

  testGrid(banner, {
    color: '#000000',
    backgroundColor: '#C8ADC0',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '1612px',
    height: '38px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const footer = canvas.getByText('Footer');

  testGrid(footer, {
    color: '#000000',
    backgroundColor: '#EDD3C4',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '1612px',
    height: '38px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const smallFooter = canvas.getByText('Small footer');

  testGrid(smallFooter, {
    color: '#ffffff',
    backgroundColor: '#080708',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '1612px',
    height: '20px',
    maxWidth: 'none',
    maxHeight: 'none',
  });
};

GridCardType.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}): Promise<void> => {
  const canvas = within(canvasElement);
  const menu = canvas.getByText('Menu');

  testGrid(menu, {
    color: 'rgb(255, 255, 255)',
    backgroundColor: '#080708',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '1612px',
    height: '20px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const hero = canvas.getByText('Hero');

  testGrid(hero, {
    color: 'rgb(0, 0, 0)',
    backgroundColor: '#C8ADC0',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '1612px',
    height: '38px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const card = canvas.getByText('Card');

  testGrid(card, {
    color: 'rgb(0, 0, 0)',
    backgroundColor: '#C8ADC0',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '801px',
    height: '134px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const card2 = canvas.getByText('Card 2');

  testGrid(card2, {
    color: 'rgb(0, 0, 0)',
    backgroundColor: '#C8ADC0',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '801px',
    height: '38px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const card3 = canvas.getByText('Card 3');

  testGrid(card3, {
    color: 'rgb(0, 0, 0)',
    backgroundColor: '#C8ADC0',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '801px',
    height: '38px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const card4 = canvas.getByText('Card 4');

  testGrid(card4, {
    color: 'rgb(0, 0, 0)',
    backgroundColor: '#C8ADC0',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '801px',
    height: '38px',
    maxWidth: 'none',
    maxHeight: 'none',
  });

  const card5 = canvas.getByText('Card 5');

  testGrid(card5, {
    color: 'rgb(0, 0, 0)',
    backgroundColor: '#C8ADC0',
    display: 'flex',
    alignItems: 'center',
    position: 'static',
    cursor: 'auto',
    marginRight: '0px',
    width: '1612px',
    height: '38px',
    maxWidth: 'none',
    maxHeight: 'none',
  });
};
