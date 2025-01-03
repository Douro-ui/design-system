import { ReactNode } from 'react';
import { IconProps, IconStyledProps } from './icon.types';
import { IconStyled } from './icon.styles';
import { icons } from '@douro-ui/svg-icons';
import { deepMerge } from '@douro-ui/react';

const Icon = ({ name, styled, ...props }: IconProps): ReactNode => {
  const defaultThemeValues: IconStyledProps = {};

  const mergedThemeValues = deepMerge<IconStyledProps>(
    defaultThemeValues,
    styled,
  );

  const IconComponent = icons[name];

  return (
    <IconStyled
      styled={mergedThemeValues as Required<IconStyledProps>}
      {...props}
    >
      <IconComponent />
    </IconStyled>
  );
};

export default Icon;
