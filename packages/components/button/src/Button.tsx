import type { ButtonProps } from './button.types';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  ErrorButton,
} from './buttonTypes';
import { ReactNode } from 'react';

const buttonTypes = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
  error: ErrorButton,
};

const Button = ({
  typeBtn,
  size,
  children,
  styled,
  onClick,
  onKeyDown,
  iconBefore,
  iconAfter,
  disabled,
  ...props
}: ButtonProps): ReactNode => {
  const ButtonComponent = buttonTypes[typeBtn ?? 'primary'];

  return (
    <ButtonComponent
      size={size}
      styled={styled}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      data-testid={`button-${typeBtn ?? 'primary'}`}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};
export default Button;
