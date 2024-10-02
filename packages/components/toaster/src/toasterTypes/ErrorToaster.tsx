import { ToasterStyledProps, ToasterProps } from '../toaster.types';
import { ToasterStyled } from '../toaster.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const ErrorToaster = ({
  styled,
  position,
  children,
  ...props
}: ToasterProps): React.ReactNode => {
  const theme = useTheme();

  const defaultErrorStyles: ToasterStyledProps = {
    color: theme.colors.brand.white,
    backgroundColor: theme.colors.extended.red.shade50,
    borderColor: theme.colors.extended.red.shade50,
    backgroundColorHover: theme.colors.extended.red.shade60,
    borderColorHover: theme.colors.extended.red.shade60,
    borderRadius: '8px',
  };

  const mergedStyles = deepMerge<ToasterStyledProps>(
    defaultErrorStyles,
    styled,
  );

  return (
    <ToasterStyled
      styled={mergedStyles as Required<ToasterStyledProps>}
      position={position}
      {...props}
    >
      {children}
    </ToasterStyled>
  );
};
