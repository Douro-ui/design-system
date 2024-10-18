import { fireEvent, render, screen } from '@testing-library/react';
import TabsGroup from '../TabsGroup';
import { ThemeProvider } from '@douro-ui/react';

describe('<TabsGroup />', () => {
  const options = [
    { label: 'Tab 1', value: 'tab1', tabIndex: 0 },
    { label: 'Tab 2', value: 'tab2' },
    { label: 'Tab 3', value: 'tab3', disabled: true },
  ];

  it('renders correctly with all options', () => {
    render(
      <ThemeProvider>
        <TabsGroup options={options} />
      </ThemeProvider>,
    );

    options.forEach((option: { label: string }) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('calls onChange handler with correct value when tab is clicked', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <TabsGroup options={options} onChange={handleChange} />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText('Tab 1'));

    expect(handleChange).toHaveBeenCalledWith('tab1');
  });

  it('does not call onChange handler when onChange is not provided', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <TabsGroup options={options} />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText('Tab 1'));

    expect(handleChange).not.toHaveBeenCalledWith('tab1');
  });

  it('does not call onChange handler when disabled tab is clicked', () => {
    const handleChange = jest.fn();

    render(
      <ThemeProvider>
        <TabsGroup options={options} onChange={handleChange} />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText('Tab 3'));

    expect(handleChange).not.toHaveBeenCalledWith('tab3');
  });

  it('it renders a tab selected', () => {
    render(
      <ThemeProvider>
        <TabsGroup options={options} selectedValue="tab1" />
      </ThemeProvider>,
    );

    const tabElement = screen.getByText('Tab 1');

    expect(tabElement).toHaveStyle('color: #2860D7');
    expect(tabElement).toHaveStyle('border-bottom: 2px solid #2860D7');
  });

  it('sets the tabIndex correctly', () => {
    render(
      <ThemeProvider>
        <TabsGroup options={options} />
      </ThemeProvider>,
    );

    expect(screen.getByText('Tab 1')).toHaveAttribute('tabIndex', '0');
  });
});
