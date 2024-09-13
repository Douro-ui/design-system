import { TimelineProps, TimelineStyledProps } from './timeline.types';
import {
  TimelineContainerStyled,
  TimelineDateStyled,
  TimelineInfoStyled,
} from './timeline.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

const Timeline = ({
  horizontally,
  children,
  childrenDate,
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
      <TimelineInfoStyled>{children}</TimelineInfoStyled>

      <TimelineDateStyled
        styled={mergedThemeValues as Required<TimelineStyledProps>}
        horizontally={horizontally}
      >
        {childrenDate}
      </TimelineDateStyled>
    </TimelineContainerStyled>
  );
};

export default Timeline;
