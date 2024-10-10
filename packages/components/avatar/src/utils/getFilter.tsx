import { Theme } from '@douro-ui/react';

export const getFilterColor = (
  theme: Theme,
  hasValidImage: boolean,
  hasFilter: boolean,
  filterTypes: 'none' | 'green' | 'blue' | 'blueNavy',
): { default: string; hover: string; active: string } => {
  const hoverColor = theme.colors.brand.white;
  const activeColor = theme.colors.brand.white;

  if (hasValidImage && hasFilter && filterTypes !== 'none') {
    const colors = {
      green: theme.colors.brand.tertiary,
      blue: theme.colors.brand.secondary,
      blueNavy: theme.colors.brand.primary,
    };

    return {
      default: colors[filterTypes] || theme.colors.brand.white,
      hover: hoverColor,
      active: activeColor,
    };
  }

  return {
    default: theme.colors.brand.white,
    hover: hoverColor,
    active: activeColor,
  };
};
