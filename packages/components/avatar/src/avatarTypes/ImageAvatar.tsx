import React, { useState } from 'react';
import { AvatarProps, AvatarStyledProps } from '../avatar.types';
import { AvatarFilter, AvatarStyled } from '../avatar.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { getRandomColor } from '../utils/getRandomBackgroundColor';
import { getFilterColor } from '../utils/getFilter';

export const ImageAvatar = ({
  size,
  src,
  typeAvt = 'image',
  imgProps,
  styled,
  hasFilter = false,
  filterTypes = 'none',
  fallbackText,
  ...props
}: AvatarProps): React.ReactNode => {
  const theme = useTheme();
  const [imgError, setImgError] = useState(false);

  const hasValidImage = !!src && !imgError;

  const colors = hasValidImage
    ? getFilterColor(theme, hasValidImage, hasFilter, filterTypes)
    : getRandomColor(theme);

  const getImagetypeAvtDefaultThemeValues: AvatarStyledProps = {
    backgroundColor: styled?.backgroundColor || colors.default,
    color: theme.colors.brand.primary,
    borderRadius: '800px',
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.MEDIUM,
    backgroundColorHover: styled?.backgroundColorHover || colors.hover,
    backgroundColorActive: styled?.backgroundColorActive || colors.active,
  };

  const mergedThemeValues = deepMerge<AvatarStyledProps>(
    getImagetypeAvtDefaultThemeValues,
    styled,
  );

  const handleImgError = () => {
    setImgError(true);
  };

  const maskColor = hasFilter ? colors.default : 'transparent';
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
        <>
          <img
            {...imgProps}
            src={src}
            alt={imgProps?.alt || 'Avatar'}
            onError={handleImgError}
          />
          {hasFilter && <AvatarFilter maskColor={maskColor} />}
        </>
      ) : (
        fallbackText
      )}
    </AvatarStyled>
  );
};
