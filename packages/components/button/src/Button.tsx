import type { ButtonProps } from './button.types';
import { ButtonStyled } from './button.styles';
// import theme from '../../../react/src/tokens/themes/theme';

const Button = ({
  typeBtn,
  size,
  backgroundColor,
  label,
  onClick,
  disabled,
  ...props
}: ButtonProps) => (
  <ButtonStyled
    {...props}
    typeBtn={typeBtn}
    size={size}    
    backgroundColor={backgroundColor}
    label={label}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </ButtonStyled>
);

export default Button;
