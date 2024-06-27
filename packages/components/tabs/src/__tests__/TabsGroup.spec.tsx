import { fireEvent, render, screen } from '@testing-library/react';
import TabsGroup from '../TabsGroup';

describe('<TabsGroup />', () => {
  const options = [
    { label: 'Tab 1', value: 'tab1', tabIndex: 0 },
    { label: 'Tab 2', value: 'tab2' },
    { label: 'Tab 3', value: 'tab3', disabled: true },
  ];

  it('renders correctly with all options', () => {
    render(<TabsGroup options={options} />);

    options.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('calls onChange handler with correct value when tab is clicked', () => {
    const handleChange = jest.fn();

    render(<TabsGroup options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByText('Tab 1'));

    expect(handleChange).toHaveBeenCalledWith('tab1');
  });

  it('does not call onChange handler when disabled tab is clicked', () => {
    const handleChange = jest.fn();

    render(<TabsGroup options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByText('Tab 3'));

    expect(handleChange).not.toHaveBeenCalledWith('tab3');
  });

  it('it renders a tab selected', () => {
    render(<TabsGroup options={options} selectedValue='tab1' />);

    const tabElement = screen.getByText('Tab 1');

    expect(tabElement).toHaveStyle('color: #298DCC');
    expect(tabElement).toHaveStyle('border-bottom: 2px solid #298DCC');
  });

  it('sets the tabIndex correctly', () => {
    render(<TabsGroup options={options} />);

    expect(screen.getByText('Tab 1')).toHaveAttribute('tabIndex', '0');
  });
});
