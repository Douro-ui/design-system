import {
  ExpandablePanelBodyProps,
  ExpandablePanelStyledProps,
} from '../expandablePanel.types';
import { ExpandablePanelBodyStyled } from '../expandablePanel.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const ExpandablePanelBody = ({
  styled,
  children,
  ...props
}: ExpandablePanelBodyProps): React.ReactNode => {
  const theme = useTheme();

  const defaultEPBodyThemeValues: ExpandablePanelStyledProps = {
    color: theme.colors.extended.blue.shade50,
    borderColor: theme.colors.brand.black,
    fontSize: '1rem',
    fontWeight: theme.fontWeight.REGULAR,
    paddingX: theme.spaceUnit['spacing-16'],
    paddingY: theme.spaceUnit['spacing-24'],
    width: '100%',
  };

  const mergedThemeValues = deepMerge<ExpandablePanelStyledProps>(
    defaultEPBodyThemeValues,
    styled,
  );

  return (
    <ExpandablePanelBodyStyled
      styled={mergedThemeValues as Required<ExpandablePanelStyledProps>}
      {...props}
    >
      {children}
    </ExpandablePanelBodyStyled>
  );
};
