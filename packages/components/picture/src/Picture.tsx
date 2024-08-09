import { ImgStyledProps, PictureProps } from './picture.types';
import { ImgStyled, PictureContainerStyled } from './picture.styles';
import { deepMerge } from '@douro-ui/react';
import { ReactNode } from 'react';

const Picture = ({
  src,
  alt,
  styled,
  disabled,
  ...props
}: PictureProps): ReactNode => {
  const defaultThemeValues: ImgStyledProps = {
    width: '50%',
    height: 'auto',
  };

  const mergedThemeValues = deepMerge<ImgStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <PictureContainerStyled disabled={disabled} {...props}>
      <ImgStyled
        src={src}
        alt={alt}
        styled={mergedThemeValues as Required<ImgStyledProps>}
      />
    </PictureContainerStyled>
  );
};

export default Picture;
