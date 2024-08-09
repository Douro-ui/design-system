import {
  ExpandablePanelProps,
  ExpandablePanelStyledProps,
} from './expandablePanel.types';
import { ExpandablePanelStyled } from './expandablePanel.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import {
  ExpandablePanelBody,
  ExpandablePanelHeader,
} from './expandablePanelTypes';

const ExpandablePanel = ({
  styled,
  disabled,
  header,
  children,
  expanded,
  startExpanded,
  hasIcon = true,
  ...props
}: ExpandablePanelProps): ReactNode => {
  const theme = useTheme();
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
    color: theme.colors.extended.blue.shade50,
    width: '40rem',
    height: '100%',
  };

  const mergedThemeValues = deepMerge<ExpandablePanelStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <ExpandablePanelStyled
      styled={mergedThemeValues as Required<ExpandablePanelStyledProps>}
      {...props}
    >
      {header && (
        <ExpandablePanelHeader
          styled={styled}
          onClick={toggleExpansion}
          disabled={disabled}
          isExpanded={isExpanded}
          icon={hasIcon}
        >
          {header}
        </ExpandablePanelHeader>
      )}
      {isExpanded && (
        <ExpandablePanelBody styled={styled} isExpanded={isExpanded}>
          {children}
        </ExpandablePanelBody>
      )}
    </ExpandablePanelStyled>
  );
};

export default ExpandablePanel;
