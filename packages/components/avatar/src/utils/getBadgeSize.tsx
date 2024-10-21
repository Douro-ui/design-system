import { AvatarProps } from '../avatar.types';

export const getBadgeSizeFromAvatarSize = (
  avatarSize: AvatarProps['size'],
): 'xs' | 'sm' | 'md' | 'lg' | 'xl' => {
  switch (avatarSize) {
    case 'xxl':
      return 'xl';
    case 'xl':
      return 'lg';
    case 'md':
    case 'sm':
      return 'sm';
    case 'xs':
    case 'xxs':
      return 'xs';
    default:
      return 'md';
  }
};
