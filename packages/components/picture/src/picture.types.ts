import { HTMLAttributes, ImgHTMLAttributes, SourceHTMLAttributes } from 'react';

export interface PictureProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  styled?: ImgStyledProps;
  disabled?: boolean;
}

export interface PictureContainerStyledProps
  extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export interface SourceProps extends SourceHTMLAttributes<HTMLSourceElement> {
  srcSet: string;
  media?: string;
}

export interface ImgStyledProps extends ImgHTMLAttributes<HTMLImageElement> {
  width?: string;
  height?: string;
}
