import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import { Display } from '../Display';
import {
  Display1,
  Display2,
  Display3,
  Display4,
  Display5,
  Display6,
} from '../typoTypes';

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

  it('should renders a display 1 when displayType is not provided', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Display>Test Display1</Display>);

    const displayElement = screen.getByText('Test Display1');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 4.5rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H1');
  });

  it('should renders a display 1 when displayType is not provided on Display1', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display1>Test Display1</Display1>);

    const displayElement = screen.getByText('Test Display1');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 3rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H1');
  });

  it('should renders a display 2', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display displayType="display2">Test Display2</Display>);

    const displayElement = screen.getByText('Test Display2');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 2.5rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H2');
  });

  it('should renders a display 2 when displayType is not provided on Display2', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display2>Test Display2</Display2>);

    const displayElement = screen.getByText('Test Display2');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 2.5rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H2');
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

  it('should renders a display 3 when displayType is not provided on Display3', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display3>Test Display3</Display3>);

    const displayElement = screen.getByText('Test Display3');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 2.5rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H3');
  });

  it('should renders a display 4', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display displayType="display4">Test Display4</Display>);

    const displayElement = screen.getByText('Test Display4');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 2rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H4');
  });

  it('should renders a display 4 when displayType is not provided on Display4', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display4>Test Display4</Display4>);

    const displayElement = screen.getByText('Test Display4');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 2rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H4');
  });

  it('should renders a display 5', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display displayType="display5">Test Display5</Display>);

    const displayElement = screen.getByText('Test Display5');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 2rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H5');
  });

  it('should renders a display 5 when displayType is not provided on Display5', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display5>Test Display5</Display5>);

    const displayElement = screen.getByText('Test Display5');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 2rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H5');
  });

  it('should renders a display 6', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display displayType="display6">Test Display6</Display>);

    const displayElement = screen.getByText('Test Display6');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 1.75rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H6');
  });

  it('should renders a display 6 when displayType is not provided on Display6', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);
    render(<Display6>Test Display6</Display6>);

    const displayElement = screen.getByText('Test Display6');

    expect(displayElement).toBeInTheDocument();
    expect(displayElement).toHaveStyle('font-size: 1.75rem');
    expect(displayElement).toHaveStyle('line-height: 120%');
    expect(displayElement.tagName).toBe('H6');
  });
});
