import { ReactNode } from 'react';
import { IconProps, IconStyledProps } from './icon.types';
import { IconWrapperStyled, IconStyled } from './icon.styles';
import { icons } from '@douro-ui/svg-icons';
import { useTheme, deepMerge } from '@douro-ui/react';

const Icon = ({
  name,
  size = 'md',
  styled,
  ...props
}: IconProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: IconStyledProps = {
    color: theme.colors.brand.black,
    fillColor: theme.colors.brand.black,
    strokeColor: theme.colors.brand.black,
  };

  const mergedThemeValues = deepMerge<IconStyledProps>(
    defaultThemeValues,
    styled,
  );

  const IconComponent = icons[name];

  return (
    <IconWrapperStyled>
      <IconStyled
        name={name}
        size={size}
        styled={mergedThemeValues as Required<IconStyledProps>}
        viewBox="0 0 24 24"
        {...props}
      >
        <IconComponent />
      </IconStyled>
    </IconWrapperStyled>
  );
};

export default Icon;
