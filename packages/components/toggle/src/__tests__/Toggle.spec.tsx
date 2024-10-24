import { fireEvent, render, screen } from '@testing-library/react';
import Toggle from '../Toggle';
import { ThemeProvider } from '@douro-ui/react';

describe('<Toggle />', () => {
  it('renders with toggle checked', () => {
    render(
      <ThemeProvider>
        <Toggle checked={true}>This is a toggle</Toggle>
      </ThemeProvider>,
    );

    const toggleElement = screen.getByRole('checkbox', { checked: true });

    expect(toggleElement).toBeInTheDocument();
  });

  it('renders with toggle not checked', () => {
    render(
      <ThemeProvider>
        <Toggle>This is a toggle</Toggle>
      </ThemeProvider>,
    );

    const toggleElement = screen.getByRole('checkbox', { checked: false });

    expect(toggleElement).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    render(
      <ThemeProvider>
        <Toggle disabled>This is a toggle</Toggle>
      </ThemeProvider>,
    );

    const toggleElement = screen.getByText('This is a toggle');
    const toggleContainer = toggleElement.closest('label');

    expect(toggleContainer).toHaveStyle('opacity: 0.5');
    expect(toggleContainer).toHaveStyle('cursor: not-allowed');
    expect(toggleContainer).toHaveStyle('pointer-events: none');
  });

  it('calls onToggleChange handler and checks if the toggle is checked', () => {
    const handleToggleChange = jest.fn();
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <Toggle onToggleChange={handleToggleChange} onChange={handleChange}>
          This is a toggle
        </Toggle>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText('This is a toggle'));

    const toggleElement = screen.getByRole('checkbox', { checked: true });
    expect(toggleElement).toBeInTheDocument();
  });

  it('does not call onToggleChange handler when onToggleChange is not provided', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <Toggle>This is a toggle</Toggle>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText('This is a toggle'));

    expect(handleChange).not.toHaveBeenCalledWith('This is a toggle');
  });
});
