import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from '../Tabs';
import { ThemeProvider } from '@douro-ui/react';

describe('<Tabs />', () => {
  it('renders a tab with correct label and attributes', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <Tabs label="Tab 1" value="tab1" onTabChange={handleChange} />
      </ThemeProvider>,
    );

    const tabElement = screen.getByText('Tab 1');

    expect(tabElement).toBeInTheDocument();
    expect(tabElement).toHaveAttribute('value', 'tab1');
    expect(tabElement).not.toHaveAttribute('disabled');
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <Tabs label="Tab 1" value="tab1" onTabChange={handleChange} />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText('Tab 1'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('does not call onChange handler when tab is disabled', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <Tabs label="Tab 1" value="tab1" onTabChange={handleChange} disabled />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText('Tab 1'));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('is selected when selected prop is true', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <Tabs label="Tab 1" value="tab1" onTabChange={handleChange} selected />,
      </ThemeProvider>,
    );

    const tabElement = screen.getByText('Tab 1');

    expect(tabElement).toHaveStyle('color: #2860D7');
    expect(tabElement).toHaveStyle('border-bottom: 2px solid #2860D7');
  });

  it('sets the tabIndex correctly', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <Tabs
          label="Tab 1"
          value="tab1"
          onTabChange={handleChange}
          tabIndex={0}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText('Tab 1')).toHaveAttribute('tabIndex', '0');
  });
});
