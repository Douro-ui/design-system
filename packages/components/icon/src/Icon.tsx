import { ReactNode } from 'react';
import { IconProps, IconStyledProps } from './icon.types';
import { IconStyled } from './icon.styles';
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
    fillColor: theme.colors.brand.black,
  };

  const mergedThemeValues = deepMerge<IconStyledProps>(
    defaultThemeValues,
    styled,
  );

  const IconComponent = icons[name];

  return (
    <IconStyled
      data-testid="icon"
      size={size}
      styled={mergedThemeValues as Required<IconStyledProps>}
      {...props}
    >
      <IconComponent />
    </IconStyled>
  );
};

export default Icon;
