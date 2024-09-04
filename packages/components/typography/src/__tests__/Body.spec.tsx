import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import { Body } from '../Body';

describe('<Body />', () => {
  it('should renders a body 1', () => {
    window.innerWidth = 1400;
    fireEvent.resize(window);
    render(<Body bodyType="body1">Test Body1</Body>);

    const bodyElement = screen.getByText('Test Body1');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveStyle('font-size: 1.125rem');
    expect(bodyElement).toHaveStyle('line-height: 150%');
    expect(bodyElement.tagName).toBe('P');
  });
});
