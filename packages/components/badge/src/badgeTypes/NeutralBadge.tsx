import { BadgeProps, BadgeStyledProps } from '../badge.types';
import { BadgeStyled, BadgeWrapperStyled } from '../badge.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

export const NeutralBadge = ({
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
    backgroundColor: theme.colors.neutral.silver.shade80,
    backgroundColorHover: theme.colors.neutral.silver.shade70,
    backgroundColorActive: theme.colors.neutral.silver.shade60,
    borderColor: theme.colors.neutral.silver.shade80,
    borderColorHover: theme.colors.neutral.silver.shade70,
    borderColorActive: theme.colors.neutral.silver.shade60,
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
