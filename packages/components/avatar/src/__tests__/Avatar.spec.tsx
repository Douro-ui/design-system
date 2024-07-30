import { screen, render } from '../../../../../tests/test-utils';
import Avatar from '../Avatar';

describe('<Avatar />', () => {
  it('should render a base avatar', () => {
    render(
      <Avatar typeAvt="base" size="md">
        DUI
      </Avatar>,
    );

    const avatarElement = screen.getByTestId('avatar-base');

    expect(avatarElement).toBeInTheDocument();
    expect(screen.getByText('DUI')).toBeInTheDocument();
    expect(avatarElement).toHaveStyle('font-size: 0.875rem');
    expect(avatarElement).toHaveStyle('width: 2.5rem; height: 2.5rem');
  });

  it('should render an image avatar', () => {
    render(
      <Avatar
        typeAvt="image"
        src="https://via.placeholder.com/150"
        fallbackText="DUI"
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

  it('should render an image avatar with fallback text when src is empty', () => {
    render(
      <Avatar typeAvt="image" size="xl" src="" fallbackText="DUI"></Avatar>,
    );

    const avatarElement = screen.getByTestId('avatar-image');

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveStyle('font-size: 1.25rem');
    expect(avatarElement).toHaveStyle('width: 4rem; height: 4rem');
    expect(screen.getByText('DUI')).toBeInTheDocument();
  });
});
