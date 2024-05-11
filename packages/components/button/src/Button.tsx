import type { ButtonProps } from './button.types';
import { ButtonStyled } from './button.styles';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'large',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => (
  <ButtonStyled
    primary={primary}
    size={size}
    {...props}
    backgroundColor={backgroundColor}
  >
    {label}
  </ButtonStyled>
);

export default Button;