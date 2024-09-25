import { render, screen } from '../../../../../tests/test-utils';
import Video from '../Video';

describe('<Video />', () => {
  it('renders without crashing', () => {
    render(<Video src="test.mp4" data-testid="video-container" />);

    const videoContainer = screen.getByTestId('video-container');

    expect(videoContainer).toBeInTheDocument();
  });

  it('applies default styles', () => {
    render(<Video src="test.mp4" />);

    const videoContainer = screen.getByTestId('video-container-style');

    expect(videoContainer).toHaveStyle({
      width: '100%',
      height: 'auto',
      display: 'block',
    });
  });

  it('applies custom styles', () => {
    render(<Video src="test.mp4" styled={{ width: '75%', height: '100px' }} />);

    const videoContainer = screen.getByTestId('video-container-style');

    expect(videoContainer).toHaveStyle({ width: '75%', height: '100px' });
  });

  it('applies default styles when width and height are undefined', () => {
    render(
      <Video src="test.mp4" styled={{ width: undefined, height: undefined }} />,
    );
    const videoContainer = screen.getByTestId('video-container-style');

    expect(videoContainer).toHaveStyle({
      width: '100%',
      height: 'auto',
    });
  });

  it('disables the video when disabled prop is true', () => {
    render(<Video src="test.mp4" data-testid="video-container" disabled />);

    const videoContainer = screen.getByTestId('video-container');

    expect(videoContainer).toHaveStyle({
      opacity: '0.5',
      cursor: 'not-allowed',
    });
    expect(videoContainer).toHaveStyle('pointer-events: none');
  });

  it('renders with custom attributes', () => {
    render(
      <Video
        src="test.mp4"
        data-testid="video-container"
        autoPlay
        loop
        poster="poster.jpg"
      />,
    );

    const videoContainer = screen.getByTestId('video-container');
    const videoElement = videoContainer.querySelector('video');

    expect(videoElement).toHaveAttribute('autoplay');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('poster', 'poster.jpg');
  });
});
