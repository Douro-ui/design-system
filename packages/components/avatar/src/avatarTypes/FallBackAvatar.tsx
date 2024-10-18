import type { AvatarFallback, AvatarStyledProps } from '../avatar.types';
import { FallbackAvatarStyled } from '../avatar.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

export const FallbackAvatar = ({
  styled,
  firstAvatarSize,
  remainingAvatarsCount,
}: AvatarFallback): ReactNode => {
  const theme = useTheme();

  const defaultStyled: AvatarStyledProps = {
    backgroundColor: theme.colors.brand.white,
    color: theme.colors.brand.black,
    borderRadius: '800px',
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.ROMAN,
  };

  const mergedThemeValues = deepMerge<AvatarStyledProps>(defaultStyled, styled);

  return (
    <FallbackAvatarStyled
      data-testid="fallback-avatar"
      styled={mergedThemeValues as Required<AvatarStyledProps>}
      size={firstAvatarSize}
    >
      <span>+{remainingAvatarsCount}</span>
    </FallbackAvatarStyled>
  );
};
