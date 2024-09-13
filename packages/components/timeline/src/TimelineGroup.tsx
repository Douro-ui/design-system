import {
  TimelineGroupProps,
  TimelineProps,
  TimelineGroupStyledProps,
} from './timeline.types';
import {
  TimelineGroupCircleStyled,
  TimelineGroupContainerStyled,
  TimelineGroupContentStyled,
  TimelineGroupLineStyled,
  TimelineGroupSideStyled,
} from './timeline.styles';
import { deepMerge, useTheme, useWindowDimensions } from '@douro-ui/react';
import { ReactNode } from 'react';
import Timeline from './Timeline';

const TimelineGroup = ({
  options,
  horizontally,
  styled,
  ...props
}: TimelineGroupProps): ReactNode => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width !== undefined && width <= theme.breakpoints.tablet;

  const defaultThemeValues: TimelineGroupStyledProps = {
    backgroundColor: theme.colors.brand.white,
    borderColor: theme.colors.neutral.silver.shade90,
    borderColorHover: theme.colors.neutral.silver.shade50,
    lineColor: theme.colors.extended.blue.shade90,
    circleBackgroundColor: theme.colors.brand.white,
    circleBorderColor: theme.colors.extended.blue.shade70,
    circleBorderColorHover: theme.colors.extended.blue.shade40,
  };

  const mergedThemeValues = deepMerge<TimelineGroupStyledProps>(
    defaultThemeValues,
    styled,
  );

  const sortedOptionsByDate = [...options].sort(
    (a: TimelineProps, b: TimelineProps) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;

      return dateB - dateA;
    },
  );

  const evenItems = !isMobile
    ? sortedOptionsByDate.filter(
        (_item: TimelineProps, index: number) => index % 2 === 0,
      )
    : [];

  const oddItems = !isMobile
    ? sortedOptionsByDate.filter(
        (_item: TimelineProps, index: number) => index % 2 !== 0,
      )
    : [];

  return (
    <TimelineGroupContainerStyled
      styled={mergedThemeValues as Required<TimelineGroupStyledProps>}
      horizontally={horizontally}
      options={options}
      {...props}
    >
      <TimelineGroupLineStyled
        styled={mergedThemeValues as Required<TimelineGroupStyledProps>}
        horizontally={horizontally}
        options={options}
        {...props}
      />

      {isMobile ? (
        <TimelineGroupSideStyled
          styled={mergedThemeValues as Required<TimelineGroupStyledProps>}
          horizontally={horizontally}
          options={options}
          {...props}
        >
          {sortedOptionsByDate.map((option: TimelineProps, index: number) => (
            <TimelineGroupContentStyled
              key={`mobile-${index}`}
              styled={mergedThemeValues as Required<TimelineGroupStyledProps>}
              horizontally={horizontally}
              options={options}
              {...props}
            >
              <Timeline
                {...option}
                horizontally={horizontally}
                date={option.date}
              >
                {option.children}
              </Timeline>
              <TimelineGroupCircleStyled
                styled={mergedThemeValues as Required<TimelineGroupStyledProps>}
                horizontally={horizontally}
                options={options}
                {...props}
                className="timeline-group-circle"
              />
            </TimelineGroupContentStyled>
          ))}
        </TimelineGroupSideStyled>
      ) : (
        <>
          <TimelineGroupSideStyled
            styled={mergedThemeValues as Required<TimelineGroupStyledProps>}
            horizontally={horizontally}
            options={options}
            {...props}
          >
            {evenItems.map((option: TimelineProps, index: number) => (
              <TimelineGroupContentStyled
                key={`even-${index}`}
                styled={mergedThemeValues as Required<TimelineGroupStyledProps>}
                horizontally={horizontally}
                options={options}
                {...props}
              >
                <Timeline
                  {...option}
                  horizontally={horizontally}
                  date={option.date}
                >
                  {option.children}
                </Timeline>
                <TimelineGroupCircleStyled
                  styled={
                    mergedThemeValues as Required<TimelineGroupStyledProps>
                  }
                  left={true}
                  className="timeline-group-circle"
                  horizontally={horizontally}
                  options={options}
                  {...props}
                />
              </TimelineGroupContentStyled>
            ))}
          </TimelineGroupSideStyled>

          <TimelineGroupSideStyled
            styled={mergedThemeValues as Required<TimelineGroupStyledProps>}
            horizontally={horizontally}
            options={options}
            {...props}
          >
            {oddItems.map((option: TimelineProps, index: number) => (
              <TimelineGroupContentStyled
                key={`odd-${index}`}
                styled={mergedThemeValues as Required<TimelineGroupStyledProps>}
                horizontally={horizontally}
                options={options}
                {...props}
              >
                <TimelineGroupCircleStyled
                  styled={
                    mergedThemeValues as Required<TimelineGroupStyledProps>
                  }
                  horizontally={horizontally}
                  options={options}
                  {...props}
                  className="timeline-group-circle"
                />
                <Timeline
                  {...option}
                  horizontally={horizontally}
                  date={option.date}
                >
                  {option.children}
                </Timeline>
              </TimelineGroupContentStyled>
            ))}
          </TimelineGroupSideStyled>
        </>
      )}
    </TimelineGroupContainerStyled>
  );
};

export default TimelineGroup;
