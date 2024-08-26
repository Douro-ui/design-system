import { TextareaProps, TextareaStyledProps } from './textarea.types';
import {
  TextareaContainerStyled,
  TextareaHolderStyled,
  TextareaLabelStyled,
  TextareaStyled,
} from './textarea.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ReactNode } from 'react';

const Textarea = ({
  label,
  maxLength,
  placeholder,
  disabled,
  styled,
  ...props
}: TextareaProps): ReactNode => {
  const theme = useTheme();

  const defaultThemeValues: TextareaStyledProps = {
    color: theme.colors.neutral.silver.shade40,
    colorActive: theme.colors.neutral.silver.shade10,
    backgroundColor: theme.colors.brand.white,
    borderColor: theme.colors.neutral.silver.shade50,
    borderColorHover: theme.colors.neutral.silver.shade30,
    borderColorActive: theme.colors.neutral.cold.shade10,
    fontSize: theme.fontSize,
  };

  const mergedThemeValues = deepMerge<TextareaStyledProps>(
    defaultThemeValues,
    styled,
  );

  return (
    <TextareaContainerStyled disabled={disabled}>
      {label && (
        <TextareaLabelStyled
          styled={mergedThemeValues as Required<TextareaStyledProps>}
        >
          {label}
        </TextareaLabelStyled>
      )}

      <TextareaHolderStyled
        styled={mergedThemeValues as Required<TextareaStyledProps>}
      >
        <TextareaStyled
          maxLength={maxLength}
          placeholder={placeholder}
          styled={mergedThemeValues as Required<TextareaStyledProps>}
          {...props}
        />
      </TextareaHolderStyled>
    </TextareaContainerStyled>
  );
};

export default Textarea;
