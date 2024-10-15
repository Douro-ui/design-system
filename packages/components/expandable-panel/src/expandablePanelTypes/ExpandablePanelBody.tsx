import {
  ExpandablePanelBodyProps,
  ExpandablePanelStyledProps,
} from '../expandablePanel.types';
import { ExpandablePanelBodyStyled } from '../expandablePanel.styles';
import { deepMerge, useTheme, useHeightDimension } from '@douro-ui/react';
import React from 'react';

export const ExpandablePanelBody = ({
  styled,
  isExpanded = false,
  children,
  ...props
}: ExpandablePanelBodyProps): React.ReactNode => {
  const { height, contentRef } = useHeightDimension(isExpanded);
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
    <ExpandablePanelBodyStyled
      styled={mergedThemeValues as Required<ExpandablePanelStyledProps>}
      isExpanded={isExpanded}
      height={height}
      {...props}
      ref={contentRef}
    >
      {children}
    </ExpandablePanelBodyStyled>
  );
};
