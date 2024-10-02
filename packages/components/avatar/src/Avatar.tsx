import { AvatarProps } from './avatar.types';
import { ReactNode } from 'react';
import { BaseAvatar, ImageAvatar } from './avatarTypes';

const AvatarTypes = {
  image: ImageAvatar,
  base: BaseAvatar,
};
const Avatar = ({
  styled,
  size,
  src,
  img,
  children,
  fallbackText,
  ...props
}: AvatarProps): ReactNode => {
  const inferredType = src ? 'image' : 'base';
  const AvatarComponent = AvatarTypes[inferredType];

  return (
    <AvatarComponent
      size={size}
      styled={styled}
      src={src}
      img={img}
      fallbackText={fallbackText}
      {...props}
    >
      {inferredType === 'image' ? null : children}
    </AvatarComponent>
  );
};

export default Avatar;
