import Avatar from './Avatar';
import { FallbackAvatar } from './avatarTypes/FallBackAvatar';
import { AvatarGroupProps, AvatarProps } from './avatar.types';
import { AvatarGroupWrapper } from './avatar.styles';
import { ReactNode } from 'react';

const AvatarGroup = ({
  avatars,
  maxVisible = 5,
}: AvatarGroupProps): ReactNode => {
  const visibleAvatars = avatars.slice(0, maxVisible - 1);
  const remainingAvatarsCount = avatars.length - maxVisible + 1;
  const firstAvatarSize =
    visibleAvatars.length > 0 ? visibleAvatars[0].size : 'lg';

  return (
    <AvatarGroupWrapper size={firstAvatarSize}>
      {visibleAvatars.map((avatarProps: AvatarProps, index: number) => (
        <Avatar data-testid="avatar" key={index} {...avatarProps} />
      ))}
      {avatars.length > maxVisible && (
        <FallbackAvatar
          remainingAvatarsCount={remainingAvatarsCount}
          firstAvatarSize={firstAvatarSize}
        />
      )}
    </AvatarGroupWrapper>
  );
};

export default AvatarGroup;
