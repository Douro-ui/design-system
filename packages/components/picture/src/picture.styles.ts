import styled from '@emotion/styled';
import { ImgStyledProps, PictureContainerStyledProps } from './picture.types';
import { css } from '@emotion/react';

const pictureDisabledStyles = () => css`
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
`;

export const PictureContainerStyled = styled.div<PictureContainerStyledProps>`
  position: relative;
  display: inline-block;
  ${(props: PictureContainerStyledProps) =>
    props.disabled && pictureDisabledStyles}
`;

export const ImgStyled = styled.img<{ styled: Required<ImgStyledProps> }>`
  width: ${({ styled }) => styled.width || '50%'};
  height: ${({ styled }) => styled.height || 'auto'};
  display: block;
`;
