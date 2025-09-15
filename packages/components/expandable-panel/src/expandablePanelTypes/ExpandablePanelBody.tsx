import {
  ExpandablePanelBodyProps,
  ExpandablePanelStyledProps,
} from '../expandablePanel.types';
import {
  ExpandablePanelBodyInner,
  ExpandablePanelBodyWrapper,
} from '../expandablePanel.styles';
import { deepMerge, useTheme, useHeightDimension } from '@douro-ui/react';
import React, { useEffect, useState } from 'react';

export const ExpandablePanelBody = ({
  styled,
  isExpanded = false,
  children,
}: ExpandablePanelBodyProps): React.ReactNode => {
  const { contentRef } = useHeightDimension(isExpanded);

  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setMaxHeight('0px');
      }
    }
  }, [isExpanded, children]);
  const theme = useTheme();

  const defaultEPBodyThemeValues: ExpandablePanelStyledProps = {
    fontSize: '1rem',
    fontWeight: theme.fontWeight.REGULAR,
    paddingY: theme.spacing.spacing16,
    paddingX: theme.spacing.spacing24,
    width: '100%',
  };

  const mergedThemeValues = deepMerge<ExpandablePanelStyledProps>(
    defaultEPBodyThemeValues,
    styled,
  );

  return (
    <ExpandablePanelBodyWrapper
      height={maxHeight}
      ref={contentRef}
      data-testid="panel-body-wrapper"
      data-expanded={isExpanded ? 'true' : 'false'}
    >
      <ExpandablePanelBodyInner styled={mergedThemeValues}>
        {children}
      </ExpandablePanelBodyInner>
    </ExpandablePanelBodyWrapper>
  );
};
