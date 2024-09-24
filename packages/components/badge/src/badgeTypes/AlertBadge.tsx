import { BadgeProps, BadgeStyledProps } from '../badge.types';
import { BadgeStyled, BadgeWrapperStyled } from '../badge.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

export const AlertBadge = ({
  count,
  position,
  size,
  children,
  styled,
  ...props
}: BadgeProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: BadgeStyledProps = {
    color: theme.colors.brand.white,
    backgroundColor: theme.colors.extended.red.shade50,
    backgroundColorHover: theme.colors.extended.red.shade40,
    backgroundColorActive: theme.colors.extended.red.shade30,
    borderColor: theme.colors.extended.red.shade50,
    borderColorHover: theme.colors.extended.red.shade40,
    borderColorActive: theme.colors.extended.red.shade30,
    fontWeight: theme.fontWeight.REGULAR,
  };

  const mergedThemeValues = deepMerge<BadgeStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <BadgeWrapperStyled>
      {children}

      <BadgeStyled
        styled={mergedThemeValues as Required<BadgeStyledProps>}
        position={position}
        size={size}
        {...props}
      >
        {count != undefined && count > 0 && size != 'xs' && count}
      </BadgeStyled>
    </BadgeWrapperStyled>
  );
};
