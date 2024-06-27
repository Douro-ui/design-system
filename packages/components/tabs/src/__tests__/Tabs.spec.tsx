import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from '../Tabs';

describe('<Tabs />', () => {
  it('renders a tab with correct label and attributes', () => {
    const handleChange = jest.fn();

    render(<Tabs label="Tab 1" value="tab1" onClick={handleChange} />);

    const tabElement = screen.getByText('Tab 1');

    expect(tabElement).toBeInTheDocument();
    expect(tabElement).toHaveAttribute('value', 'tab1');
    expect(tabElement).not.toHaveAttribute('disabled');
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = jest.fn();

    render(<Tabs label="Tab 1" value="tab1" onClick={handleChange} />);

    fireEvent.click(screen.getByText('Tab 1'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('does not call onChange handler when tab is disabled', () => {
    const handleChange = jest.fn();

    render(
      <Tabs
        label="Tab 1"
        value="tab1"
        onClick={handleChange}
        disabled={true}
      />,
    );

    fireEvent.click(screen.getByText('Tab 1'));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('is selected when selected prop is true', () => {
    const handleChange = jest.fn();

    render(
      <Tabs
        label="Tab 1"
        value="tab1"
        onClick={handleChange}
        selected={true}
      />,
    );

    const tabElement = screen.getByText('Tab 1');

    expect(tabElement).toHaveStyle('color: #298DCC');
    expect(tabElement).toHaveStyle('border-bottom: 2px solid #298DCC');
  });

  it('sets the tabIndex correctly', () => {
    const handleChange = jest.fn();

    render(
      <Tabs label="Tab 1" value="tab1" onClick={handleChange} tabIndex={0} />,
    );

    expect(screen.getByText('Tab 1')).toHaveAttribute('tabIndex', '0');
  });
});
