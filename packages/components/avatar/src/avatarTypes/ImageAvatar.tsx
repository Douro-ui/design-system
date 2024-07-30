import React, { useState } from 'react';
import { AvatarProps, AvatarStyledProps } from '../avatar.types';
import { AvatarStyled } from '../avatar.styles';
import { deepMerge, useTheme } from '@douro-ui/react';

export const ImageAvatar = ({
  size,
  src,
  typeAvt = 'image',
  img,
  styled,
  fallbackText,
  ...props
}: AvatarProps): React.ReactNode => {
  const theme = useTheme();
  const [imgError, setImgError] = useState(false);

  const getImagetypeAvtDefaultThemeValues: AvatarStyledProps = {
    backgroundColor: theme.colors.brand.tertiary,
    color: theme.colors.brand.white,
    borderRadius: '100px',
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.MEDIUM,
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
      img={img}
      data-testid={`avatar-${typeAvt}`}
      {...props}
    >
      {src && !imgError ? (
        <img
          {...img}
          src={src}
          alt={img?.alt || 'Avatar'}
          onError={handleImgError}
        />
      ) : (
        fallbackText
      )}
    </AvatarStyled>
  );
};
