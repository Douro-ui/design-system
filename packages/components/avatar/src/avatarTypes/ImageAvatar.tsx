import React, { useState } from 'react';
import { AvatarProps, AvatarStyledProps } from '../avatar.types';
import { AvatarStyled } from '../avatar.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { getRandomColor } from '../utils/getRandomBackgroundColor';

export const ImageAvatar = ({
  size,
  src,
  typeAvt = 'image',
  imgProps,
  styled,
  fallbackText,
  ...props
}: AvatarProps): React.ReactNode => {
  const theme = useTheme();
  const [imgError, setImgError] = useState(false);
  const randomColors = getRandomColor(theme);

  const getImagetypeAvtDefaultThemeValues: AvatarStyledProps = {
    backgroundColor: styled?.backgroundColor || randomColors.default,
    color: theme.colors.brand.black,
    borderRadius: '800px',
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.MEDIUM,
    backgroundColorHover: styled?.backgroundColorHover || randomColors.hover,
    backgroundColorActive: styled?.backgroundColorActive || randomColors.active,
  };

  const mergedThemeValues = deepMerge<AvatarStyledProps>(
    getImagetypeAvtDefaultThemeValues,
    styled,
  );

  const handleImgError = () => {
    setImgError(true);
  };

  return (
    <AvatarStyled
      size={size}
      styled={mergedThemeValues as Required<AvatarStyledProps>}
      typeAvt={typeAvt}
      imgProps={imgProps}
      data-testid={`avatar-${typeAvt}`}
      {...props}
    >
      {src && !imgError ? (
        <img
          {...imgProps}
          src={src}
          alt={imgProps?.alt || 'Avatar'}
          onError={handleImgError}
        />
      ) : (
        fallbackText
      )}
    </AvatarStyled>
  );
};
