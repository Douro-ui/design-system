import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import { Heading } from '../Heading';

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
});
