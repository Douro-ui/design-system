import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import Toggle from '../Toggle';

describe('<Toggle />', () => {
  it('renders with toggle checked', () => {
    render(<Toggle checked={true} />);

    const toggleElement = screen.getByRole('checkbox', { checked: true });
    expect(toggleElement).toBeInTheDocument();
  });

  it('renders with toggle not checked', () => {
    render(<Toggle />);

    const toggleElement = screen.getByRole('checkbox', { checked: false });
    expect(toggleElement).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    render(<Toggle disabled label="Toggle switch" />);

    const toggleContainer = screen
      .getByLabelText('Toggle switch')
      .closest('label');

    expect(toggleContainer).toHaveStyle('cursor: not-allowed');
    expect(toggleContainer).toHaveStyle('pointer-events: none');
  });

  it('calls onToggleChange handler and checks if the toggle is checked', () => {
    const handleToggleChange = jest.fn();
    const handleChange = jest.fn();

    render(
      <Toggle
        onToggleChange={handleToggleChange}
        onChange={handleChange}
        aria-label="Toggle switch"
      />,
    );

    fireEvent.click(screen.getByRole('checkbox'));

    const toggleElement = screen.getByRole('checkbox', { checked: true });
    expect(toggleElement).toBeInTheDocument();
    expect(handleToggleChange).toHaveBeenCalled();
  });

  it('does not call onToggleChange handler when onToggleChange is not provided', () => {
    const handleChange = jest.fn();

    render(<Toggle label="Toggle switch" />);

    fireEvent.click(screen.getByLabelText('Toggle switch'));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders with an icon', () => {
    render(
      <Toggle
        checked={false}
        aria-label="Toggle switch"
        icon={() => <div>🔍</div>}
      />,
    );

    const toggleElement = screen.getByRole('checkbox');
    const iconElement = screen.getByTestId('icon');

    expect(toggleElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
