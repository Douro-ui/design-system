import type { ButtonProps } from './button.types';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  ErrorButton,
} from './buttonTypes';
import React from 'react';

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
  iconBefore,
  iconAfter,
  disabled,
  ...props
}: ButtonProps): React.ReactNode => {
  const ButtonComponent = buttonTypes[typeBtn ?? 'primary'];

  return (
    <ButtonComponent
      size={size}
      styled={styled}
      onClick={onClick}
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
