import { ToasterStyledProps, ToasterProps } from '../toaster.types';
import { ToasterStyled } from '../toaster.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const InfoToaster = ({
  styled,
  position,
  children,
  ...props
}: ToasterProps): React.ReactNode => {
  const theme = useTheme();

  const defaultInfoStyles: ToasterStyledProps = {
    color: theme.colors.brand.white,
    backgroundColor: theme.colors.extended.blue.shade50,
    borderColor: theme.colors.extended.blue.shade50,
    backgroundColorHover: theme.colors.extended.blue.shade60,
    borderColorHover: theme.colors.extended.blue.shade60,
    borderRadius: '8px',
  };

  const mergedStyles = deepMerge<ToasterStyledProps>(defaultInfoStyles, styled);

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
