import { ToasterStyledProps, ToasterProps } from '../toaster.types';
import { ToasterStyled } from '../toaster.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import React from 'react';

export const WarningToaster = ({
  styled,
  position,
  children,
  ...props
}: ToasterProps): React.ReactNode => {
  const theme = useTheme();

  const defaultWarningStyles: ToasterStyledProps = {
    color: theme.colors.brand.white,
    backgroundColor: theme.colors.extended.yellow.shade50,
    borderColor: theme.colors.extended.yellow.shade50,
    backgroundColorHover: theme.colors.extended.yellow.shade60,
    borderColorHover: theme.colors.extended.yellow.shade60,
    borderRadius: '8px',
  };

  const mergedStyles = deepMerge<ToasterStyledProps>(
    defaultWarningStyles,
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
