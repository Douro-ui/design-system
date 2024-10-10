import { screen, render, waitFor } from '../../../../../tests/test-utils';
import Avatar from '../Avatar';
import { getBadgeSizeFromAvatarSize } from '../utils/getBadgeSize';

jest.mock('../utils/getBadgeSize');

describe('<Avatar />', () => {
  it('should render a small base avatar', () => {
    render(<Avatar size="sm" fallbackText="Fallback Text"></Avatar>);

    const avatarElement = screen.getByTestId('avatar-base');

    expect(avatarElement).toBeInTheDocument();
    expect(screen.getByText('Fallback Text')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(avatarElement).toHaveStyle('font-size: 1rem');
    expect(avatarElement).toHaveStyle('width: 2.5rem; height: 2.5rem');
    expect(avatarElement).toHaveStyle('border-radius: 800px');
  });

  it('should render a large image avatar', () => {
    render(
      <Avatar
        src="https://via.placeholder.com/150"
        size="lg"
        fallbackText="DUI"
        imgProps={{ alt: 'Avatar' }}
      ></Avatar>,
    );

    const avatarElement = screen.getByTestId('avatar-image');

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveStyle('font-size: 1.5rem');
    expect(avatarElement).toHaveStyle('width: 4rem; height: 4rem');

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

  it('should throw an error if src is passed inside imgProps', () => {
    const consoleErrorMock = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const renderWithSrcInImgProps = () => {
      render(
        <Avatar
          imgProps={{ src: 'https://via.placeholder.com/150', alt: 'Avatar' }}
          fallbackText="DUI"
        />,
      );
    };

    expect(renderWithSrcInImgProps).toThrow(
      "The 'src' prop should not be passed inside 'imgProps'. Use 'src' directly in the Avatar component.",
    );
    consoleErrorMock.mockRestore();
  });

  it('should render only the first character of fallbackText when size is xxs', () => {
    render(<Avatar size="xxs" fallbackText="Fallback" />);

    expect(screen.getByText('F')).toBeInTheDocument();
  });

  it('should render the full fallbackText when size is not xxs', () => {
    render(<Avatar size="md" fallbackText="Fallback" />);

    expect(screen.getByText('Fallback')).toBeInTheDocument();
  });

  it('should render Badge when badge prop is true and call getBadgeSizeFromAvatarSize with the correct size', () => {
    const size = 'md';

    render(<Avatar size={size} badge={true} />);

    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(getBadgeSizeFromAvatarSize).toHaveBeenCalledWith(size);
  });

  it('should return correct badge size for different avatar sizes', () => {
    const mockgetBadgeSizeFromAvatarSize = jest.fn().mockReturnValue('lg');
    (getBadgeSizeFromAvatarSize as jest.Mock).mockImplementation(
      mockgetBadgeSizeFromAvatarSize,
    );

    render(<Avatar size="xl" badge={true} />);

    expect(mockgetBadgeSizeFromAvatarSize).toHaveBeenCalledWith('xl');
    expect(mockgetBadgeSizeFromAvatarSize).toHaveReturnedWith('lg');
  });

  it('should not render Badge when badge prop is false or not passed', () => {
    render(<Avatar size="md" badge={false} />);

    expect(screen.queryByTestId('badge')).not.toBeInTheDocument();
  });
});
