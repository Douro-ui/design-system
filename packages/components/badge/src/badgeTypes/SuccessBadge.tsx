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
    color: theme.colors.brand.black,
    backgroundColor: theme.colors.extended.green.shade40,
    backgroundColorHover: theme.colors.extended.green.shade30,
    backgroundColorActive: theme.colors.extended.green.shade20,
    borderColor: theme.colors.brand.white,
    borderColorHover: theme.colors.extended.green.shade30,
    borderColorActive: theme.colors.extended.green.shade20,
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
