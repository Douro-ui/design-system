import { screen, render, waitFor } from '../../../../../tests/test-utils';
import Avatar from '../Avatar';

describe('<Avatar />', () => {
  it('should render a small base avatar', () => {
    render(<Avatar size="sm">DUI</Avatar>);

    const avatarElement = screen.getByTestId('avatar-base');

    expect(avatarElement).toBeInTheDocument();
    expect(screen.getByText('DUI')).toBeInTheDocument();
    expect(avatarElement).toHaveStyle('font-size: 0.75rem');
    expect(avatarElement).toHaveStyle('width: 2rem; height: 2rem');
  });
  it('should render a medium base avatar', () => {
    render(<Avatar size="md">DUI</Avatar>);

    const avatarElement = screen.getByTestId('avatar-base');

    expect(avatarElement).toBeInTheDocument();
    expect(screen.getByText('DUI')).toBeInTheDocument();
    expect(avatarElement).toHaveStyle('font-size: 0.875rem');
    expect(avatarElement).toHaveStyle('width: 2.5rem; height: 2.5rem');
  });
  it('should render a large image avatar', () => {
    render(
      <Avatar
        src="https://via.placeholder.com/150"
        size="lg"
        fallbackText="DUI"
        img={{ alt: 'Avatar' }}
      ></Avatar>,
    );

    const avatarElement = screen.getByTestId('avatar-image');

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveStyle('font-size: 1rem');
    expect(avatarElement).toHaveStyle('width: 3rem; height: 3rem');

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute(
      'src',
      'https://via.placeholder.com/150',
    );
    expect(imgElement).toHaveAttribute('alt', 'Avatar');
  });
  it('should render an extra large image avatar', async () => {
    render(<Avatar size="xl" src="invalid-url" fallbackText="DUI"></Avatar>);

    const avatarElement = screen.getByTestId('avatar-image');
    const imgElement = screen.getByRole('img');

    waitFor(() => {
      imgElement.dispatchEvent(new Event('error'));
    });
    await screen.findByText('DUI');

    waitFor(() => {
      expect(avatarElement).toBeInTheDocument();
      expect(avatarElement).toHaveStyle('font-size: 1.25rem');
      expect(avatarElement).toHaveStyle('width: 4rem; height: 4rem');
      expect(screen.getByText('DUI')).toBeInTheDocument();
    });
  });
});
