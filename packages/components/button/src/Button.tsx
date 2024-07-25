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
  disabled,
  ...props
}: ButtonProps): React.ReactNode => {
  const ButtonComponent = buttonTypes[typeBtn];

  return (
    <ButtonComponent
      size={size}
      styled={styled}
      onClick={onClick}
      disabled={disabled}
      data-testid={`button-${typeBtn}`}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};
export default Button;
