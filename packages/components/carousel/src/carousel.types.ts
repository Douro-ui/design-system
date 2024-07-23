import React from 'react';
export interface Image {
  type: 'image';
  content: {
    src: string;
    alt: string;
  };
}

export interface Video {
  type: 'video';
  content: {
    src: string;
    type: string;
  };
}

export interface HTMLContent {
  type: 'html';
  content: string;
}

export interface TextContent {
  type: 'text';
  content: string;
}

export interface CustomComponent {
  type: 'component';
  content: React.ReactNode;
}

export type Content =
  | Image
  | Video
  | HTMLContent
  | TextContent
  | CustomComponent;

export interface CarouselProps {
  contents: Content[];
  showArrows?: boolean;
  showStatus?: boolean;
  showIndicators?: boolean;
  showThumbs?: boolean;
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  onClick?: () => void;
}
