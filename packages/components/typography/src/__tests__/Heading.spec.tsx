import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import { Heading } from '../Heading';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from '../typoTypes';

describe('< Heading />', () => {
  it('should renders a heading 1', () => {
    window.innerWidth = 900;
    fireEvent.resize(window);
    render(<Heading headingType="h1">Test Heading1</Heading>);

    const headingElement = screen.getByText('Test Heading1');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1.5rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H1');
  });

  it('should renders a heading 1 when headingType is not provided', () => {
    window.innerWidth = 900;
    fireEvent.resize(window);
    render(<Heading>Test Heading1</Heading>);

    const headingElement = screen.getByText('Test Heading1');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1.5rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H1');
  });

  it('should renders a heading 1 when headingType is not provided on Heading1', () => {
    window.innerWidth = 900;
    fireEvent.resize(window);
    render(<Heading1>Test Heading1</Heading1>);

    const headingElement = screen.getByText('Test Heading1');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1.5rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H1');
  });

  it('should renders a heading 2', () => {
    window.innerWidth = 576;
    fireEvent.resize(window);
    render(<Heading headingType="h2">Test Heading2</Heading>);

    const headingElement = screen.getByText('Test Heading2');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1.25rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H2');
  });

  it('should renders a heading 2 when headingType is not provided on Heading2', () => {
    window.innerWidth = 900;
    fireEvent.resize(window);
    render(<Heading2>Test Heading2</Heading2>);

    const headingElement = screen.getByText('Test Heading2');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1.5rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H2');
  });

  it('should renders a heading 3', () => {
    window.innerWidth = 576;
    fireEvent.resize(window);
    render(<Heading headingType="h3">Test Heading3</Heading>);

    const headingElement = screen.getByText('Test Heading3');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1.125rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H3');
  });

  it('should renders a heading 3 when headingType is not provided on Heading3', () => {
    window.innerWidth = 900;
    fireEvent.resize(window);
    render(<Heading3>Test Heading3</Heading3>);

    const headingElement = screen.getByText('Test Heading3');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1.25rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H3');
  });

  it('should renders a heading 4', () => {
    window.innerWidth = 576;
    fireEvent.resize(window);
    render(<Heading headingType="h4">Test Heading4</Heading>);

    const headingElement = screen.getByText('Test Heading4');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H4');
  });

  it('should renders a heading 4 when headingType is not provided on Heading4', () => {
    window.innerWidth = 900;
    fireEvent.resize(window);
    render(<Heading4>Test Heading4</Heading4>);

    const headingElement = screen.getByText('Test Heading4');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1.125rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H4');
  });

  it('should renders a heading 5', () => {
    window.innerWidth = 576;
    fireEvent.resize(window);
    render(<Heading headingType="h5">Test Heading5</Heading>);

    const headingElement = screen.getByText('Test Heading5');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H5');
  });

  it('should renders a heading 5 when headingType is not provided on Heading5', () => {
    window.innerWidth = 900;
    fireEvent.resize(window);
    render(<Heading5>Test Heading5</Heading5>);

    const headingElement = screen.getByText('Test Heading5');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1.125rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H5');
  });

  it('should renders a heading 6', () => {
    window.innerWidth = 576;
    fireEvent.resize(window);
    render(<Heading headingType="h6">Test Heading6</Heading>);

    const headingElement = screen.getByText('Test Heading6');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 0.875rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H6');
  });

  it('should renders a heading 6 when headingType is not provided on Heading6', () => {
    window.innerWidth = 900;
    fireEvent.resize(window);
    render(<Heading6>Test Heading6</Heading6>);

    const headingElement = screen.getByText('Test Heading6');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveStyle('font-size: 1rem');
    expect(headingElement).toHaveStyle('line-height: 120%');
    expect(headingElement.tagName).toBe('H6');
  });
});
