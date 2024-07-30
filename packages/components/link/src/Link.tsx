import { LinkProps, LinkStyledProps } from './link.types';
import { LinkStyled, SpanHiddenStyled } from './link.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

const Link = ({ underline, href, styled, ...props }: LinkProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: LinkStyledProps = {
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight.REGULAR,
    color: theme.colors.extended.blue.shade50,
    colorHover: theme.colors.extended.blue.shade40,
    colorActive: theme.colors.extended.blue.shade30,
    colorFocus: theme.colors.extended.blue.shade20,
  };

  const mergedThemeValues = deepMerge<LinkStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <LinkStyled
      underline={underline}
      href={href}
      styled={mergedThemeValues as Required<LinkStyledProps>}
      {...props}
    >
      <SpanHiddenStyled />
      {props.children}
    </LinkStyled>
  );
};

export default Link;
