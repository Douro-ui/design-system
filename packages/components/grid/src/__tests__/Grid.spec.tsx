import styled from '@emotion/styled';
import { render, screen } from '../../../../../tests/test-utils';
import { Grid, GridItem } from '../Grid';
import { GridStyledProps } from '../grid.types';

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

describe('<Grid />', () => {
  it('renders with all grid items', () => {
    render(
      <Grid columns={12} rows={7} gap="10px">
        <GridItem column={1} row={1} spanColumn={12} spanRow={1}>
          <ContentDemo
            styled={{
              backgroundColor: '#080708',
              height: '20px',
              color: 'white',
            }}
          >
            Menu
          </ContentDemo>
        </GridItem>
        <GridItem>
          <ContentDemo styled={{ backgroundColor: '#7765E3' }}>
            Card 1
          </ContentDemo>
        </GridItem>
        <GridItem column={7} row={3} spanColumn={6}>
          <ContentDemo styled={{ backgroundColor: '#7765E3' }}>
            Card 2
          </ContentDemo>
        </GridItem>
        <GridItem column={1} row={6} spanColumn={12}>
          <ContentDemo styled={{ backgroundColor: '#EDD3C4' }}>
            Footer
          </ContentDemo>
        </GridItem>
      </Grid>,
    );

    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByText('Menu').parentElement).toHaveStyle(
      'grid-column: 1/span 12',
    );
    expect(screen.getByText('Menu').parentElement).toHaveStyle(
      'grid-row: 1/span 1',
    );
    expect(screen.getByText('Card 1').parentElement).toHaveStyle(
      'grid-column: auto/auto',
    );
    expect(screen.getByText('Card 1').parentElement).toHaveStyle(
      'grid-row: auto/auto',
    );
  });

  it('renders default grid', () => {
    render(<Grid data-testid="grid" />);

    const grid = screen.getByTestId('grid');

    expect(grid).toBeInTheDocument();
    expect(grid).toHaveStyle('grid-template-columns: repeat(1, 1fr)');
    expect(grid).toHaveStyle('gap: 16px');
  });
});
