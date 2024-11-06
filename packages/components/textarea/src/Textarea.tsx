import { TextareaProps, TextareaStyledProps } from './textarea.types';
import {
  CharacterCountStyled,
  RequiredFilledIcon,
  TextareaContainerStyled,
  TextareaHolderStyled,
  TextareaLabelStyled,
  TextareaStyled,
} from './textarea.styles';
import { deepMerge, useTheme } from '@douro-ui/react';
import { ChangeEvent, ReactNode, useState } from 'react';

const Textarea = ({
  size = 'lg',
  label,
  maxLength,
  placeholder,
  isDisabled,
  isRequired,
  hasCharacterCount,
  canResize,
  styled,
  ...props
}: TextareaProps): ReactNode => {
  const theme = useTheme();

  const [charCount, setCharCount] = useState(0);

  const defaultThemeValues: TextareaStyledProps = {
    labelColor: theme.colors.brand.primary,
    color: theme.colors.neutral.silver.shade40,
    colorHover: theme.colors.brand.primary,
    colorFocus: theme.colors.brand.primary,
    colorFilled: theme.colors.neutral.silver.shade30,
    colorError: theme.colors.extended.red.shade50,
    placeholderColor: theme.colors.neutral.silver.shade40,
    placeholderColorHover: theme.colors.brand.primary,
    borderColor: theme.colors.neutral.silver.shade40,
    borderColorHover: theme.colors.brand.primary,
    borderColorFocus: theme.colors.brand.primary,
    borderColorFilled: theme.colors.neutral.silver.shade30,
    fontFamily: theme.fontFamily.text,
  };

  const mergedThemeValues = deepMerge<TextareaStyledProps>(
    defaultThemeValues,
    styled,
  );

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputLength = e.target.value.length;
    setCharCount(inputLength);
  };

  return (
    <TextareaContainerStyled
      isDisabled={isDisabled}
      hasCharacterCount={hasCharacterCount}
      styled={mergedThemeValues as Required<TextareaStyledProps>}
    >
      {label && (
        <TextareaLabelStyled
          size={size}
          styled={mergedThemeValues as Required<TextareaStyledProps>}
        >
          {label}
          {isRequired && (
            <RequiredFilledIcon
              styled={mergedThemeValues as Required<TextareaStyledProps>}
            >
              *
            </RequiredFilledIcon>
          )}
        </TextareaLabelStyled>
      )}

      <TextareaHolderStyled
        size={size}
        hasMaxCharacter={charCount === maxLength}
        isFilled={charCount > 0}
        canResize={canResize}
        styled={mergedThemeValues as Required<TextareaStyledProps>}
      >
        <TextareaStyled
          size={size}
          isFilled={charCount > 0}
          maxLength={maxLength}
          placeholder={placeholder}
          required={isRequired}
          canResize={canResize}
          onChange={handleInputChange}
          styled={mergedThemeValues as Required<TextareaStyledProps>}
          {...props}
        />
      </TextareaHolderStyled>

      {hasCharacterCount && (
        <CharacterCountStyled
          hasMaxCharacter={charCount === maxLength}
          isFilled={charCount > 0}
          styled={mergedThemeValues as Required<TextareaStyledProps>}
        >
          {charCount}/{maxLength}
        </CharacterCountStyled>
      )}
    </TextareaContainerStyled>
  );
};

export default Textarea;
