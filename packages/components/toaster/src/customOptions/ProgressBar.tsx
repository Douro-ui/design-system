import React from 'react';
import {
  ProgressBarProps,
  ProgressBarStyledProps,
} from './customOptions.types';
import { ProgressBarStyled } from './customOptions.styles';
import { deepMerge, useTheme } from '@douro-ui/react';

export const ProgressBar = ({
  'aria-label': ariaLabel,
  duration,
  progress,
  styled,
}: ProgressBarProps): React.JSX.Element => {
  const theme = useTheme();

  const defaultStyles: ProgressBarStyledProps = {
    backgroundColor: theme.colors.brand.black,
    borderColor: theme.colors.brand.black,
    borderRadius: '3px',
  };

  const mergedStyles = deepMerge<ProgressBarStyledProps>(defaultStyles, styled);

  return (
    <ProgressBarStyled
      data-testid="progress-bar"
      duration={duration}
      progress={progress}
      styled={mergedStyles as Required<ProgressBarStyledProps>}
      role="progressbar"
      aria-label={ariaLabel || 'Loading progress'}
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};
