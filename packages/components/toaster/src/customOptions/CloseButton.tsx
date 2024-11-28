import React from 'react';
import {
  CloseButtonProps,
  CloseButtonStyledProps,
} from './customOptions.types';
import { deepMerge, useTheme } from '@douro-ui/react';
import { CloseButtonStyled } from './customOptions.styles';

export const CloseButton = ({
  onClick,
  styled,
}: CloseButtonProps): React.JSX.Element => {
  const theme = useTheme();
  const defaultStyles: CloseButtonStyledProps = {
    color: theme.colors.brand.primary,
  };

  const mergedStyles = deepMerge<CloseButtonStyledProps>(defaultStyles, styled);

  return (
    <CloseButtonStyled
      onClick={onClick}
      styled={mergedStyles as Required<CloseButtonStyledProps>}
      aria-label="Close toaster"
    >
      <svg aria-hidden="true" viewBox="0 0 14 14">
        <path
          fillRule="evenodd"
          d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
        />
      </svg>
    </CloseButtonStyled>
  );
};
