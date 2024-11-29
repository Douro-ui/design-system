import { LinkProps, LinkStyledProps } from './link.types';
import { IconStyled, LinkStyled } from './link.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

const Link = ({
  href,
  size,
  isUnderline,
  ariaLabel,
  iconBefore,
  iconAfter,
  children,
  styled,
  isDisabled = false,
  ...props
}: LinkProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: LinkStyledProps = {
    color: theme.colors.extended.blue.shade50,
    colorHover: theme.colors.extended.blue.shade30,
    colorActive: theme.colors.extended.blue.shade50,
    colorVisited: theme.colors.extended.purple.shade50,
    colorHoverVisited: theme.colors.extended.purple.shade40,
    colorFocus: theme.colors.extended.blue.shade20,
    colorDisabled: theme.colors.neutral.cold.shade90,
    fontSize: theme.fontSize,
    fontFamily: theme.fontFamily.text,
    fontWeight: theme.fontWeight.REGULAR,
  };

  const mergedThemeValues = deepMerge<LinkStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <LinkStyled
      href={href}
      size={size}
      underline={isUnderline}
      aria-label={ariaLabel}
      hasIconBefore={!!iconBefore}
      hasIconAfter={!!iconAfter}
      aria-disabled={isDisabled}
      styled={mergedThemeValues as Required<LinkStyledProps>}
      {...props}
    >
      {iconBefore && (
        <IconStyled
          size={size}
          styled={mergedThemeValues as Required<LinkStyledProps>}
        >
          {iconBefore()}
        </IconStyled>
      )}
      {children}
      {iconAfter && (
        <IconStyled
          size={size}
          styled={mergedThemeValues as Required<LinkStyledProps>}
        >
          {iconAfter()}
        </IconStyled>
      )}
    </LinkStyled>
  );
};

export default Link;
