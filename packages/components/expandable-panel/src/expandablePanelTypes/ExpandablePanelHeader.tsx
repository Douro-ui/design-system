import {
  ExpandablePanelHeaderProps,
  ExpandablePanelStyledProps,
} from '../expandablePanel.types';
import { ExpandablePanelHeaderStyled } from '../expandablePanel.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@douro-ui/svg-icons';

export const ExpandablePanelHeader = ({
  styled,
  disabled,
  children,
  hasIcon,
  isExpanded,
  onClick,
  ...props
}: ExpandablePanelHeaderProps): ReactNode => {
  const theme = useTheme();

  const defaultEPHeaderThemeValues: ExpandablePanelStyledProps = {
    colorDisabled: theme.colors.neutral.cold.shade70,
    backgroundColorDisabled: theme.colors.neutral.cold.shade95,
    borderColorDisabled: theme.colors.neutral.cold.shade70,
    fontSize: '1.25rem',
    fontWeight: theme.fontWeight.BOLD,
    paddingX: theme.spacing.spacing16,
    paddingY: theme.spacing.spacing24,
    gap: theme.spacing.spacing16,
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
      {hasIcon && isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </ExpandablePanelHeaderStyled>
  );
};
