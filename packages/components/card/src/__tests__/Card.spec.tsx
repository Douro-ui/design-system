import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('<Card />', () => {
  it('renders without crashing', () => {
    const { container } = render(<Card />);

    expect(container).toBeInTheDocument();
  });

  it('renders children properly', () => {
    const { getByText } = render(<Card>Card 1</Card>);

    expect(getByText('Card 1')).toBeInTheDocument();
  });

  it('applies default styles', () => {
    render(<Card>Card 1</Card>);

    expect(screen.getByText('Card 1')).toHaveStyle(
      'border: 0.063rem solid #4d4d4d',
    );
    expect(screen.getByText('Card 1')).toHaveStyle('border-radius: 0.25rem');
    expect(screen.getByText('Card 1')).toHaveStyle('background-color: #FFFFFF');
    expect(screen.getByText('Card 1')).toHaveStyle('width: 6.25rem');
    expect(screen.getByText('Card 1')).toHaveStyle('height: 6.25rem');
  });

  it('applies custom styles', () => {
    render(
      <Card borderColor="pink" borderRadius="0.5rem">
        Card 1
      </Card>,
    );

    expect(screen.getByText('Card 1')).toHaveStyle(
      'border: 0.063rem solid pink',
    );
    expect(screen.getByText('Card 1')).toHaveStyle('border-radius: 0.5rem');
    expect(screen.getByText('Card 1')).toHaveStyle('background-color: #FFFFFF');
    expect(screen.getByText('Card 1')).toHaveStyle('width: 6.25rem');
    expect(screen.getByText('Card 1')).toHaveStyle('height: 6.25rem');
  });
});
