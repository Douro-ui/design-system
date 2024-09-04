import { render, screen } from '../../../../../tests/test-utils';
import Video from '../Video';

describe('<Video />', () => {
  it('renders without crashing', () => {
    render(<Video src="test.mp4" data-testid="video-container" />);

    const videoContainer = screen.getByTestId('video-container');

    expect(videoContainer).toBeInTheDocument();
  });

  it('disables the video when disabled prop is true', () => {
    render(<Video src="test.mp4" data-testid="video-container" disabled />);

    const videoContainer = screen.getByTestId('video-container');

    expect(videoContainer).toHaveStyle({ opacity: '0.5' });
    expect(videoContainer).toHaveStyle({ cursor: 'not-allowed' });
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
