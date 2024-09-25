import { render, screen } from '../../../../../tests/test-utils';
import Badge from '../Badge';

describe('<Badge />', () => {
  it('should render the children within the Badge component', () => {
    render(
      <Badge typeBadge="alert" size="md">
        Alert Badge
      </Badge>,
    );

    expect(screen.getByText('Alert Badge')).toBeInTheDocument();
  });

  it('should render the count if provided', () => {
    render(
      <Badge count={5} size="md">
        Alert Badge
      </Badge>,
    );

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should render an AlertBadge', () => {
    render(<Badge typeBadge="alert" count={3} size="lg" />);

    const badge = screen.getByText('3');

    expect(badge).toHaveStyle('background-color: #e91616');
    expect(badge).toHaveStyle('font-size: 1rem');
  });

  it('should render a NeutralBadge', () => {
    render(
      <Badge typeBadge="neutral" count={3} position="bottom-left" size="sm" />,
    );

    const badge = screen.getByText('3');

    expect(badge).toHaveStyle('background-color: #cccccc');
    expect(badge).toHaveStyle('font-size: 0.75rem');
    expect(badge).toHaveStyle('bottom: -0.125rem');
    expect(badge).toHaveStyle('left: -0.125rem');
  });

  it('should render a SuccessBadge with the provided position', () => {
    render(
      <Badge typeBadge="success" count={3} position="bottom-right" size="md" />,
    );

    const badge = screen.getByText('3');

    expect(badge).toHaveStyle('background-color: #2f9d77');
    expect(badge).toHaveStyle('font-size: 0.75rem');
    expect(badge).toHaveStyle('bottom: -0.375rem');
    expect(badge).toHaveStyle('right: -0.375rem');
  });

  it('should render a WarningBadge with the provided position', () => {
    render(
      <Badge typeBadge="warning" count={3} position="top-right" size="xl" />,
    );

    const badge = screen.getByText('3');

    expect(badge).toHaveStyle('background-color: #ffcf66');
    expect(badge).toHaveStyle('font-size: 1.125rem');
    expect(badge).toHaveStyle('top: -1.5rem');
    expect(badge).toHaveStyle('right: -1.5rem');
  });

  it('should apply position styles based on the provided position', () => {
    render(<Badge typeBadge="alert" count={3} position="top-left" size="md" />);

    const badge = screen.getByText('3');

    expect(badge).toHaveStyle('top: -0.375rem');
    expect(badge).toHaveStyle('left: -0.375rem');
  });

  it('should not display the count if size is "xs"', () => {
    render(<Badge typeBadge="alert" count={3} size="xs" />);

    expect(screen.queryByText('3')).not.toBeInTheDocument();
  });
});
