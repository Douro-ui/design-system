import { AvatarProps } from './avatar.types';
import { ReactNode } from 'react';
import { BaseAvatar, ImageAvatar } from './avatarTypes';
import { AvatarBadge, AvatarWrapper } from './avatar.styles';
import Badge from '@douro-ui/badge';
import { getBadgeSize } from './utils/getBadgeSize';

const AvatarTypes = {
  image: ImageAvatar,
  base: BaseAvatar,
};
const Avatar = ({
  styled,
  size,
  src,
  imgProps,
  children,
  fallbackText,
  badge = false,
  badgeProps,
  ...props
}: AvatarProps): ReactNode => {
  if (imgProps && 'src' in imgProps) {
    throw new Error(
      "The 'src' prop should not be passed inside 'imgProps'. Use 'src' directly in the Avatar component.",
    );
  }
  const inferredType = src ? 'image' : 'base';
  const AvatarComponent = AvatarTypes[inferredType];

  const adjustedFallbackText =
    size === 'xxs' && fallbackText ? fallbackText.charAt(0) : fallbackText;

  const badgeSize = getBadgeSize(size);

  return (
    <AvatarWrapper>
      <AvatarComponent
        size={size}
        styled={styled}
        src={src}
        imgProps={imgProps}
        fallbackText={adjustedFallbackText}
        {...props}
      >
        {inferredType === 'image' ? null : children}
      </AvatarComponent>
      {badge && (
        <AvatarBadge size={size}>
          <Badge size={badgeSize} {...badgeProps} />
        </AvatarBadge>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
