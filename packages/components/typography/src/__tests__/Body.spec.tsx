import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import { Body } from '../Body';
import {
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  Body6,
  Body7,
  Body8,
} from '../typoTypes';

describe('<Body />', () => {
  it('should renders a body 1', () => {
    window.innerWidth = 576;
    fireEvent.resize(window);
    render(<Body bodyType="body1">Test Body1</Body>);

    const bodyElement = screen.getByText('Test Body1');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement).toHaveStyle('font-weight: 500');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 1 when bodyType is not provided', () => {
    window.innerWidth = 700;
    fireEvent.resize(window);

    render(<Body>Test Body1</Body>);

    const bodyElement = screen.getByText('Test Body1');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement).toHaveStyle('font-weight: 500');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 1 when bodyType is not provided on Body1', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);

    render(<Body1>Test Body1</Body1>);

    const bodyElement = screen.getByText('Test Body1');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1.125rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement).toHaveStyle('font-weight: 500');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 2', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body bodyType="body2">Test Body2</Body>);

    const bodyElement = screen.getByText('Test Body2');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1.125rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 2 when bodyType is not provided on Body2', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body2>Test Body2</Body2>);

    const bodyElement = screen.getByText('Test Body2');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1.125rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 3', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body bodyType="body3">Test Body3</Body>);

    const bodyElement = screen.getByText('Test Body3');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 3 when bodyType is not provided on Body3', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body3>Test Body3</Body3>);

    const bodyElement = screen.getByText('Test Body3');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 4', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body bodyType="body4">Test Body4</Body>);

    const bodyElement = screen.getByText('Test Body4');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 4 when bodyType is not provided on Body4', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body4>Test Body4</Body4>);

    const bodyElement = screen.getByText('Test Body4');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 5', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body bodyType="body5">Test Body5</Body>);

    const bodyElement = screen.getByText('Test Body5');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 0.875rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 5 when bodyType is not provided on Body5', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body5>Test Body5</Body5>);

    const bodyElement = screen.getByText('Test Body5');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 0.875rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 6', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body bodyType="body6">Test Body6</Body>);

    const bodyElement = screen.getByText('Test Body6');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 0.875rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 6 when bodyType is not provided on Body6', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body6>Test Body6</Body6>);

    const bodyElement = screen.getByText('Test Body6');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 0.875rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 7', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body bodyType="body7">Test Body7</Body>);

    const bodyElement = screen.getByText('Test Body7');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 0.75rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 7 when bodyType is not provided on Body7', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body7>Test Body7</Body7>);

    const bodyElement = screen.getByText('Test Body7');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 0.75rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 8', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body bodyType="body8">Test Body8</Body>);

    const bodyElement = screen.getByText('Test Body8');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 0.75rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });

  it('should renders a body 8 when bodyType is not provided on Body8', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body8>Test Body8</Body8>);

    const bodyElement = screen.getByText('Test Body8');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 0.75rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });
});
