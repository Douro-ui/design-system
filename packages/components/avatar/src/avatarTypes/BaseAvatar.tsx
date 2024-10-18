import type { AvatarProps, AvatarStyledProps } from '../avatar.types';
import { AvatarStyled } from '../avatar.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';
import { getRandomColor } from '../utils/getRandomBackgroundColor';

export const BaseAvatar = ({
  size,
  styled,
  typeAvt = 'base',
  fallbackText,
  children,
  ...props
}: AvatarProps): React.ReactNode => {
  const theme = useTheme();

  const colors = getRandomColor(theme);

  const getBasetypeAvtDefaultThemeValues: AvatarStyledProps = {
    backgroundColor: styled?.backgroundColor || colors.default,
    color: theme.colors.brand.black,
    borderRadius: '800px',
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.MEDIUM,
    backgroundColorHover: styled?.backgroundColorHover || colors.hover,
    backgroundColorActive: styled?.backgroundColorActive || colors.active,
    boxShadowColor: theme.colors.brand.white,
  };

  const mergedThemeValues = deepMerge<AvatarStyledProps>(
    getBasetypeAvtDefaultThemeValues,
    styled,
  );

  const contentToDisplay = fallbackText || children || '';
  const adjustedContent =
    size === 'xxs' ? contentToDisplay.toString().charAt(0) : contentToDisplay;

  return (
    <AvatarStyled
      size={size}
      typeAvt={typeAvt}
      styled={mergedThemeValues as Required<AvatarStyledProps>}
      data-testid={`avatar-${typeAvt}`}
      {...props}
    >
      {adjustedContent}
    </AvatarStyled>
  );
};
