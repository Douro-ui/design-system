import { AvatarProps } from '../../avatar.types';
import { getBadgeSizeFromAvatarSize } from '../getBadgeSize';

describe('getBadgeSizeFromAvatarSize', () => {
  it('should return "xl" when avatar size is "xxl"', () => {
    const result = getBadgeSizeFromAvatarSize('xxl' as AvatarProps['size']);
    expect(result).toBe('xl');
  });

  it('should return "lg" when avatar size is "xl"', () => {
    const result = getBadgeSizeFromAvatarSize('xl' as AvatarProps['size']);
    expect(result).toBe('lg');
  });

  it('should return "md" when avatar size is "lg"', () => {
    const result = getBadgeSizeFromAvatarSize('lg' as AvatarProps['size']);
    expect(result).toBe('md');
  });

  it('should return "sm" when avatar size is "md"', () => {
    const result = getBadgeSizeFromAvatarSize('md' as AvatarProps['size']);
    expect(result).toBe('sm');
  });

  it('should return "sm" when avatar size is "sm"', () => {
    const result = getBadgeSizeFromAvatarSize('sm' as AvatarProps['size']);
    expect(result).toBe('sm');
  });

  it('should return "xs" when avatar size is "xs"', () => {
    const result = getBadgeSizeFromAvatarSize('xs' as AvatarProps['size']);
    expect(result).toBe('xs');
  });

  it('should return "xs" when avatar size is "xxs"', () => {
    const result = getBadgeSizeFromAvatarSize('xxs' as AvatarProps['size']);
    expect(result).toBe('xs');
  });

  it('should return "md" when avatar size is not specified or invalid', () => {
    const result = getBadgeSizeFromAvatarSize(
      'invalidSize' as AvatarProps['size'],
    );
    expect(result).toBe('md');
  });
});
