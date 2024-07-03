import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';
import { ThemeProvider } from '@douro-ui/react';

describe('<Button />', () => {
  it('is disabled when disabled prop is passed', () => {
    render(<Button label="Button 1" typeBtn="primary" disabled />);

    expect(screen.getByText('Button 1')).toBeDisabled();
  });

  it('calls onChange handler when clicked', () => {
    const handleClick = jest.fn();

    render(<Button label="Button 1" typeBtn="primary" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Button 1'));

    expect(handleClick).toHaveBeenCalled();
  });

  it.only('is primary button when typeBtn prop is primary', () => {
    render(
      <ThemeProvider>
        <Button label="Button 1" typeBtn="primary" data-testid={'button'} />,
      </ThemeProvider>,
    );

    const button = screen.getByTestId('button');
    //
    // const computedStyle = window.getComputedStyle(button);
    // console.log('Computed Style:', computedStyle.backgroundColor);
    button.blur();

    expect(screen.getByTestId('button')).toHaveStyle({
      'background-color': '#298DCC',
    });
  });

  it('is secondary button when typeBtn prop is secondary', () => {
    render(<Button label="Button 1" typeBtn="secondary" />);

    expect(screen.getByText('Button 1')).toHaveStyle(
      'background-color: #FFFFFF',
    );
  });

  it('is error button when typeBtn prop is error', () => {
    render(<Button label="Button 1" typeBtn="error" />);

    expect(screen.getByText('Button 1')).toHaveStyle(
      'background-color: #B24747',
    );
  });

  it('sets the tabIndex correctly', () => {
    render(<Button label="Button 1" typeBtn="primary" tabIndex={0} />);

    expect(screen.getByText('Button 1')).toHaveAttribute('tabIndex', '0');
  });
});
