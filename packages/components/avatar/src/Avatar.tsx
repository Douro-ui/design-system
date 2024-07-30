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
  typeAvt,
  ...props
}: AvatarProps): ReactNode => {
  const AvatarComponent = AvatarTypes[typeAvt ?? 'base'];

  return (
    <AvatarComponent
      size={size}
      styled={styled}
      src={src}
      img={img}
      fallbackText={fallbackText}
      {...props}
    >
      {typeAvt === 'image' ? null : children}
    </AvatarComponent>
  );
};

export default Avatar;
