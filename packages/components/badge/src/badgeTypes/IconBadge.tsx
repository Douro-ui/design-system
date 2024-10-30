import { BadgeProps, BadgeStyledProps } from '../badge.types';
import {
  BadgeIconStyled,
  BadgeWrapperStyled,
  IconStyled,
} from '../badge.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

export const IconBadge = ({
  position,
  size,
  children,
  icon,
  styled,
  onClick,
  ...props
}: BadgeProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: BadgeStyledProps = {
    backgroundColor: theme.colors.neutral.silver.shade80,
    backgroundColorHover: theme.colors.extended.red.shade40,
    backgroundColorActive: theme.colors.extended.red.shade30,
    borderColor: theme.colors.brand.white,
    borderColorHover: theme.colors.extended.red.shade40,
    borderColorActive: theme.colors.extended.red.shade30,
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

      <BadgeIconStyled
        styled={mergedThemeValues as Required<BadgeStyledProps>}
        data-testid="badgeIcon"
        position={position}
        size={size}
        {...props}
      >
        {icon && size !== 'xs' && (
          <IconStyled
            data-testid={'icon'}
            size={size}
            icon
            styled={mergedThemeValues as Required<BadgeStyledProps>}
            onClick={onClick}
          >
            {icon()}
          </IconStyled>
        )}
      </BadgeIconStyled>
    </BadgeWrapperStyled>
  );
};
