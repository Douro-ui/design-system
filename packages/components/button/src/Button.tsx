import type { ButtonProps } from './button.types';
import { ButtonStyled } from './button.styles';
import { useTheme, ThemeProps } from '@douro-ui/react';
import { css } from '@emotion/css';

const selectTheme = (typeBtn: string, theme: ThemeProps) => {
  const primary = css`
    background-color: ${theme.colors.brand.primary};
    color: ${theme.colors.brand.white};
    &:hover {
      background-color: #005e99;
      color: #ffffff;
    }
    &:active,
    &:focus {
      background-color: #003a5e;
      color: #ffffff;
    }

    &:disabled {
      background-color: #e4e4e4;
    }

    svg {
      fill: #ffffff;
    }
  `;

  return primary;
};

const Button = ({
  typeBtn,
  size,
  label,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  const selectedTheme = selectTheme(typeBtn, theme);

  return (
    <ButtonStyled
      {...props}
      typeBtn={typeBtn}
      size={size}
      label={label}
      onClick={onClick}
      disabled={disabled}
      className={`${selectedTheme}`}
    >
      {label}
    </ButtonStyled>
  );
};

export default Button;
