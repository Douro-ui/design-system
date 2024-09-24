import { ModalFooterProps, ModalStyledProps } from '../modal.types';
import { ModalFooterStyled } from '../modal.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

export const ModalFooter = ({
  size,
  children,
  styled,
  ...props
}: ModalFooterProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: ModalStyledProps = {
    color: theme.colors.neutral.silver.shade20,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight.REGULAR,
    insideBorderColor: theme.colors.neutral.cold.shade90,
    backgroundColor: theme.colors.brand.white,
    justifyContentFooter: 'flex-end',
  };

  const mergedThemeValues = deepMerge<ModalStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <>
      <ModalFooterStyled
        size={size}
        {...props}
        styled={mergedThemeValues as Required<ModalStyledProps>}
      >
        {children}
      </ModalFooterStyled>
    </>
  );
};
