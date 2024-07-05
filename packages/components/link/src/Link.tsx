import type { LinkProps } from './link.types';
import { LinkStyled, SpanHiddenStyled } from './link.styles';
import { useTheme } from '@douro-ui/react';
import React from 'react';

const Link = ({ underline, href, ...props }: LinkProps): React.ReactNode => {
  const theme = useTheme();

  return (
    <LinkStyled
      underline={underline}
      href={href}
      fontSize={theme.fontSize}
      styledColor={theme.colors.extended.blue.shade50}
      styledColorHover={theme.colors.extended.blue.shade40}
      styledColorActive={theme.colors.extended.blue.shade30}
      styledColorFocus={theme.colors.extended.blue.shade20}
      {...props}
    >
      <SpanHiddenStyled />
      {props.children}
    </LinkStyled>
  );
};

export default Link;
