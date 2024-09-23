import { BadgeProps, BadgeStyledProps } from '../badge.types';
import { BadgeStyled, BadgeWrapperStyled } from '../badge.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

export const SuccessBadge = ({
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
    backgroundColor: theme.colors.extended.green.shade40,
    backgroundColorHover: theme.colors.extended.green.shade30,
    backgroundColorActive: theme.colors.extended.green.shade20,
    borderColor: theme.colors.extended.green.shade40,
    borderColorHover: theme.colors.extended.green.shade30,
    borderColorActive: theme.colors.extended.green.shade20,
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
