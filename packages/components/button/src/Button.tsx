import type { ButtonProps } from './button.types';
import { ButtonStyled } from './button.styles';
import theme from '../../../react/src/tokens/themes/theme';

const Button = ({
  typeBtn,
  size,
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps) => (
  <ButtonStyled
    {...props}
    typeBtn={typeBtn}
    size={size}    
    backgroundColor={backgroundColor || theme.colors.brand.secondary}
    label={label}
    onClick={onClick}
  >
    {label}
  </ButtonStyled>
);

export default Button;
