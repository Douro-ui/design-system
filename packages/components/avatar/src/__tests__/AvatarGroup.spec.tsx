import { render, screen } from '../../../../../tests/test-utils';
import { AvatarProps } from '../avatar.types';
import AvatarGroup from '../AvatarGroup';

describe('<AvatarGroup />', () => {
  it('should render the correct number of avatars when below maxVisible', () => {
    const avatars: AvatarProps[] = [
      {
        size: 'sm',
        fallbackText: 'Fallback Text',
      },
      {
        size: 'md',
        src: 'https://via.placeholder.com/50',
        fallbackText: 'Fallback Text',
      },
    ];

    render(<AvatarGroup avatars={avatars} maxVisible={5} />);

    const avatarElements = screen.getAllByTestId('avatar');
    expect(avatarElements.length).toBe(2);
    expect(screen.queryByTestId('fallback-avatar')).not.toBeInTheDocument();
  });

  it('should render the fallback avatar when exceeding maxVisible', () => {
    const avatars: AvatarProps[] = [
      {
        size: 'sm',
        src: 'https://via.placeholder.com/50',
        fallbackText: 'Fallback Text',
      },
      {
        size: 'md',

        fallbackText: 'Fallback Text',
      },
      {
        size: 'lg',
        src: 'https://via.placeholder.com/50',
        fallbackText: 'Fallback Text',
      },
      {
        size: 'xl',
        fallbackText: 'Fallback Text',
      },
      {
        size: 'xxl',
        src: 'https://via.placeholder.com/50',
        fallbackText: 'Fallback Text',
      },
      {
        size: 'xxs',
        src: 'https://via.placeholder.com/50',
        fallbackText: 'Fallback Text',
      },
    ];

    render(<AvatarGroup avatars={avatars} maxVisible={5} />);

    const avatarElements = screen.getAllByTestId('avatar');
    expect(avatarElements.length).toBe(4);
    expect(screen.getByTestId('fallback-avatar')).toBeInTheDocument();
    expect(screen.getByTestId('fallback-avatar')).toHaveTextContent('+2');
  });

  it('should render the fallback avatar with the same size of the first avatar', () => {
    const avatars: AvatarProps[] = [
      {
        size: 'lg',
        src: 'https://via.placeholder.com/50',
        fallbackText: 'Fallback Text',
      },
      {
        size: 'lg',

        fallbackText: 'Fallback Text',
      },
      {
        size: 'lg',
        src: 'https://via.placeholder.com/50',
        fallbackText: 'Fallback Text',
      },
      {
        size: 'lg',
        fallbackText: 'Fallback Text',
      },
      {
        size: 'lg',
        src: 'https://via.placeholder.com/50',
        fallbackText: 'Fallback Text',
      },
      {
        size: 'lg',
        src: 'https://via.placeholder.com/50',
        fallbackText: 'Fallback Text',
      },
    ];

    render(<AvatarGroup avatars={avatars} maxVisible={5} />);

    const avatarElements = screen.getAllByTestId('avatar');
    expect(avatarElements.length).toBe(4);

    const fallbackAvatar = screen.getByTestId('fallback-avatar');
    expect(fallbackAvatar).toBeInTheDocument();
    expect(fallbackAvatar).toHaveTextContent('+2');
    expect(fallbackAvatar).toHaveStyle('width: 4rem; height: 4rem');
  });

  it('should render no avatars when the avatars array is empty', () => {
    render(<AvatarGroup avatars={[]} maxVisible={5} />);

    const avatarElements = screen.queryAllByTestId('avatar');
    expect(avatarElements.length).toBe(0);
    expect(screen.queryByTestId('fallback-avatar')).not.toBeInTheDocument();
  });
});
