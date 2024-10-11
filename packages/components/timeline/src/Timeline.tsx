import { TimelineProps, TimelineStyledProps } from './timeline.types';
import {
  TimelineContainerStyled,
  TimelineMainContentStyled,
  TimelineMiniContentStyled,
} from './timeline.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

const Timeline = ({
  horizontally,
  mainContent,
  miniContent,
  styled,
  ...props
}: TimelineProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: TimelineStyledProps = {
    color: theme.colors.neutral.silver.shade10,
    backgroundColor: theme.colors.brand.white,
    borderColor: theme.colors.neutral.silver.shade90,
    fontSize: theme.fontSize,
  };

  const mergedThemeValues = deepMerge<TimelineStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <TimelineContainerStyled
      styled={mergedThemeValues as Required<TimelineStyledProps>}
      className="timeline-container"
      horizontally={horizontally}
      {...props}
    >
      <TimelineMainContentStyled>{mainContent}</TimelineMainContentStyled>

      <TimelineMiniContentStyled
        styled={mergedThemeValues as Required<TimelineStyledProps>}
        horizontally={horizontally}
      >
        {miniContent}
      </TimelineMiniContentStyled>
    </TimelineContainerStyled>
  );
};

export default Timeline;
