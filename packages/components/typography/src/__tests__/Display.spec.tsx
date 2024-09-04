import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import { Display } from '../Display';

describe('< Display />', () => {
  it('should renders a display 1', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Display displayType="display1">Test Display1</Display>);

    const displayElement = screen.getByText('Test Display1');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 4.5rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H1');
  });

  it('should renders a display 3', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display displayType="display3">Test Display3</Display>);

    const displayElement = screen.getByText('Test Display3');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 2.5rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H3');
  });
});
