import { HTMLAttributes, SourceHTMLAttributes } from 'react';

export interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  styled?: VideoStyledProps;
  disabled?: boolean;
}

export interface VideoContainerStyledProps
  extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export interface SourceProps extends SourceHTMLAttributes<HTMLSourceElement> {
  srcSet: string;
  media?: string;
}

export interface VideoStyledProps extends HTMLAttributes<HTMLVideoElement> {
  width?: string;
  height?: string;
}
