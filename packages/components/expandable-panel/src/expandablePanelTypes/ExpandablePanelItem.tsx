import {
  ExpandablePanelItemProps,
  ExpandablePanelStyledProps,
} from '../expandablePanel.types';
import { ExpandablePanelItemStyled } from '../expandablePanel.styles';
import { deepMerge } from '@douro-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import { ExpandablePanelBody, ExpandablePanelHeader } from './index';

export const ExpandablePanelItem = ({
  styled,
  disabled,
  header,
  children,
  expanded,
  startExpanded,
  hasIcon = true,
  ...props
}: ExpandablePanelItemProps): ReactNode => {
  const [isExpanded, setIsExpanded] = useState(startExpanded || false);

  useEffect(() => {
    if (expanded !== undefined) {
      setIsExpanded(expanded);
    }
  }, [expanded]);

  const toggleExpansion = () => {
    if (expanded === undefined) {
      setIsExpanded(!isExpanded);
    }
  };

  const defaultThemeValues: ExpandablePanelStyledProps = {
    width: '40rem',
    height: '100%',
  };

  const mergedThemeValues = deepMerge<ExpandablePanelStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <ExpandablePanelItemStyled
      styled={mergedThemeValues as Required<ExpandablePanelStyledProps>}
      {...props}
    >
      {header && (
        <ExpandablePanelHeader
          styled={mergedThemeValues}
          onClick={toggleExpansion}
          disabled={disabled}
          isExpanded={isExpanded}
          icon={hasIcon}
        >
          {header}
        </ExpandablePanelHeader>
      )}
      {isExpanded && (
        <ExpandablePanelBody styled={mergedThemeValues} isExpanded={isExpanded}>
          {children}
        </ExpandablePanelBody>
      )}
    </ExpandablePanelItemStyled>
  );
};
