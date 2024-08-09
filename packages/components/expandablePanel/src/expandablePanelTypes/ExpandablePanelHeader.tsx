import {
  ExpandablePanelHeaderProps,
  ExpandablePanelStyledProps,
} from '../expandablePanel.types';
import { ExpandablePanelHeaderStyled } from '../expandablePanel.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from '@douro-ui/svg-icons';

export const ExpandablePanelHeader = ({
  styled,
  disabled,
  children,
  // icon,
  isExpanded,
  onClick,
  ...props
}: ExpandablePanelHeaderProps): ReactNode => {
  const theme = useTheme();

  const defaultEPHeaderThemeValues: ExpandablePanelStyledProps = {
    color: theme.colors.extended.blue.shade50,
    borderColor: theme.colors.brand.black,
    colorDisabled: theme.colors.neutral.cold.shade70,
    backgroundColorDisabled: theme.colors.neutral.cold.shade95,
    borderColorDisabled: theme.colors.neutral.cold.shade70,
    fontSize: '1.25rem',
    fontWeight: theme.fontWeight.BOLD,
    paddingX: theme.spaceUnit['spacing-16'],
    paddingY: theme.spaceUnit['spacing-24'],
    gap: theme.spaceUnit['spacing-16'],
    width: '100%',
  };

  const mergedThemeValues = deepMerge<ExpandablePanelStyledProps>(
    defaultEPHeaderThemeValues,
    styled,
  );

  return (
    <ExpandablePanelHeaderStyled
      styled={mergedThemeValues as Required<ExpandablePanelStyledProps>}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
      {/* {icon ? (
        <span>{icon}</span>
      ) : (
        <img
          src="https://fontawesome.com/icons/chevron-down?f=classic&s=solid"
          alt="Chevron Icon"

        />
      )} */}
      <span>
        <img
          src={isExpanded ? ChevronUp : ChevronDown}
          alt="Chevron Icon"
          style={{ width: '1rem', height: '1rem' }}
        />
      </span>{' '}
    </ExpandablePanelHeaderStyled>
  );
};
