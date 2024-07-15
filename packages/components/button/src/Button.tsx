import type { ButtonProps } from './button.types';
import { ButtonStyled } from './button.styles';

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
    backgroundColor={backgroundColor}
    {...props}
  >
    {label}
  </ButtonStyled>
);

export default Button;
