import type { ButtonProps } from './button.types';
import { ButtonStyled } from './button.styles';
import theme from '../../../react/src/tokens/themes/theme';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'small',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => (
  <ButtonStyled
    primary={primary}
    size={size}
    {...props}
    backgroundColor={backgroundColor || theme.colors.brand.secondary}
  >
    {label}
  </ButtonStyled>
);

export default Button;
