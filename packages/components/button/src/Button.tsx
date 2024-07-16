import type { ButtonProps } from './button.types';
import { ButtonStyled } from './button.styles';
import React from 'react';
import { useTheme } from '@douro-ui/react';

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'small',
  backgroundColor,
  label,
  ...props
}: ButtonProps): React.ReactNode => {
  const theme = useTheme();
  return (
    <ButtonStyled
      primary={primary}
      size={size}
      {...props}
      backgroundColor={backgroundColor || theme.colors.neutral.cold.shade10}
    >
      {label}
    </ButtonStyled>
  );
};

export default Button;
