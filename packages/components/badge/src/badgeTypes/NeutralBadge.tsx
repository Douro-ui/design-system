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
    color: theme.colors.brand.primary,
    backgroundColor: theme.colors.neutral.silver.shade80,
    backgroundColorHover: theme.colors.neutral.silver.shade70,
    backgroundColorActive: theme.colors.neutral.silver.shade60,
    borderColor: theme.colors.brand.white,
    borderColorHover: theme.colors.neutral.silver.shade70,
    borderColorActive: theme.colors.neutral.silver.shade60,
    boxShadowColor: theme.colors.brand.white,
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
        hasCounter={!!count}
        size={size}
        {...props}
      >
        {count && count > 0 && size !== 'xs' && count}
      </BadgeStyled>
    </BadgeWrapperStyled>
  );
};
