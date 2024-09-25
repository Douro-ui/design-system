import { render, screen } from '../../../../../tests/test-utils';
import Picture from '../Picture';

describe('<Picture />', () => {
  it('renders without crashing', () => {
    render(<Picture src="test.jpg" alt="test image" />);

    const imgElement = screen.getByAltText('test image');

    expect(imgElement).toBeInTheDocument();
  });

  it('applies default styles', () => {
    render(<Picture src="test.jpg" alt="test image" />);

    const imgElement = screen.getByAltText('test image');

    expect(imgElement).toHaveStyle({
      width: '50%',
      height: 'auto',
      display: 'block',
    });
  });

  it('applies custom styles', () => {
    render(
      <Picture
        src="test.jpg"
        alt="test image"
        styled={{ width: '75%', height: '100px' }}
      />,
    );

    const imgElement = screen.getByAltText('test image');

    expect(imgElement).toHaveStyle({
      width: '75%',
      height: '100px',
    });
  });

  it.only('disables picture container when disabled prop is passed', () => {
    render(<Picture src="test.jpg" alt="test image" disabled />);

    const containerElement = screen.getByRole('img').parentElement;
    expect(containerElement).toHaveStyle({
      opacity: '0.5',
      cursor: 'not-allowed',
      'pointer-events': 'none',
    });
  });
});
