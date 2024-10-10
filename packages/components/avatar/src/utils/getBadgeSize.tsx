import { AvatarProps } from '../avatar.types';

export const getBadgeSize = (
  avatarSize: AvatarProps['size'],
): 'xs' | 'sm' | 'md' | 'lg' | 'xl' => {
  switch (avatarSize) {
    case 'xxl':
      return 'xl';
    case 'xl':
      return 'lg';
    case 'lg':
      return 'md';
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
