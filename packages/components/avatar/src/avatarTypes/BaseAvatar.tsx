import type { AvatarProps, AvatarStyledProps } from '../avatar.types';
import { AvatarStyled } from '../avatar.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const BaseAvatar = ({
  size,
  styled,
  typeAvt = 'base',
  children,
  ...props
}: AvatarProps): React.ReactNode => {
  const theme = useTheme();

  const getBasetypeAvtDefaultThemeValues: AvatarStyledProps = {
    backgroundColor: theme.colors.brand.secondary,
    color: theme.colors.brand.white,
    borderRadius: '100px',
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.MEDIUM,
  };

  const mergedThemeValues = deepMerge<AvatarStyledProps>(
    getBasetypeAvtDefaultThemeValues,
    styled,
  );

  return (
    <AvatarStyled
      size={size}
      typeAvt={typeAvt}
      styled={mergedThemeValues as Required<AvatarStyledProps>}
      data-testid={`avatar-${typeAvt}`}
      {...props}
    >
      {children}
    </AvatarStyled>
  );
};
