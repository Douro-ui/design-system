import { VideoStyledProps, VideoProps } from './video.types';
import { VideoStyled, VideoContainerStyled } from './video.styles';
import { deepMerge } from '@douro-ui/react';
import { ReactNode } from 'react';

const Video = ({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  styled,
  disabled,
  ...props
}: VideoProps): ReactNode => {
  const defaultThemeValues: VideoStyledProps = {
    width: '100%',
    height: 'auto',
  };

  const mergedThemeValues = deepMerge<VideoStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <VideoContainerStyled disabled={disabled} {...props}>
      <VideoStyled
        controls={controls}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        data-testid="video-container-style"
        styled={mergedThemeValues as Required<VideoStyledProps>}
      />
    </VideoContainerStyled>
  );
};

export default Video;
