import { ModalHeaderProps, ModalStyledProps } from '../modal.types';
import { ModalHeaderStyled, ModalIconStyled } from '../modal.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { Close } from '@douro-ui/svg-icons';
import { ReactNode } from 'react';

export const ModalHeader = ({
  size,
  headerTitle,
  headerIcon,
  styled,
  onClose,
  ...props
}: ModalHeaderProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: ModalStyledProps = {
    color: theme.colors.neutral.silver.shade10,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight.BOLD,
    insideBorderColor: theme.colors.neutral.cold.shade90,
    backgroundColor: theme.colors.brand.white,
  };

  const mergedThemeValues = deepMerge<ModalStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <>
      <ModalHeaderStyled
        size={size}
        {...props}
        styled={mergedThemeValues as Required<ModalStyledProps>}
      >
        {headerTitle}

        <ModalIconStyled
          onClick={onClose}
          src={headerIcon != undefined ? headerIcon : Close}
          alt="Close Icon"
        />
      </ModalHeaderStyled>
    </>
  );
};
