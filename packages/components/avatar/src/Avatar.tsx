import { AvatarProps } from './avatar.types';
import { ReactNode } from 'react';
import { BaseAvatar, ImageAvatar } from './avatarTypes';
import { AvatarBadge, AvatarWrapper } from './avatar.styles';
import Badge from '@douro-ui/badge';
import { getBadgeSizeFromAvatarSize } from './utils/getBadgeSize';

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
  hasFilter = false,
  filterTypes = 'none',
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

  const badgeSize = getBadgeSizeFromAvatarSize(size);

  return (
    <AvatarWrapper>
      <AvatarComponent
        size={size}
        styled={styled}
        src={src}
        imgProps={imgProps}
        fallbackText={adjustedFallbackText}
        hasFilter={hasFilter}
        filterTypes={hasFilter ? filterTypes : 'none'}
        {...props}
      >
        {inferredType === 'image' ? null : children}
      </AvatarComponent>
      {badge && (
        <AvatarBadge size={size}>
          <Badge data-testid="badge" size={badgeSize} {...badgeProps} />
        </AvatarBadge>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
