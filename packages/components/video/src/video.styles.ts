import styled from '@emotion/styled';
import { VideoStyledProps, VideoContainerStyledProps } from './video.types';
import { css } from '@emotion/react';

const videoDisabledStyles = () => css`
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
`;

export const VideoContainerStyled = styled.div<VideoContainerStyledProps>`
  position: relative;
  display: inline-block;
  ${(props: VideoContainerStyledProps) => props.disabled && videoDisabledStyles}
`;

export const VideoStyled = styled.video<{ styled: Required<VideoStyledProps> }>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  display: ${props => (props.src ? 'block' : 'none')};
`;
