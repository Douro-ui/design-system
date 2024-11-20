import styled from '@emotion/styled';
import { TextareaProps, TextareaStyledProps } from './textarea.types';

const fontStyle = (fontSize: number, lineHeight: number) => `
font-size: ${fontSize}rem;
line-height: ${lineHeight}rem;
`;

const ratioSize = (
  Width: number,
  Height: number,
  paddingY: number,
  paddingX: number,
  canResize: boolean,
) => `
${
  canResize
    ? `min-width: ${Width}rem; width: auto; min-height: ${Height}rem; height: auto;`
    : `width: ${Width}rem; height: ${Height}rem;`
}
  padding: ${paddingY}rem ${paddingX}rem;
`;

const ratioPadding = (padding: number) => `
  padding-right: ${padding}rem;
`;

const fontStyleTextareaMap = {
  sm: fontStyle(0.875, 1.25),
  md: fontStyle(0.875, 1.25),
  lg: fontStyle(0.875, 1.25),
  xl: fontStyle(1, 1.5),
};

const fontStyleLabelMap = {
  sm: fontStyle(0.75, 1.125),
  md: fontStyle(0.875, 1.25),
  lg: fontStyle(1, 1.5),
  xl: fontStyle(1, 1.5),
};

const sizeMap = {
  sm: { width: 29.688, height: 3.25, paddingY: 0.375, paddingX: 0.5 },
  md: { width: 29.688, height: 4.5, paddingY: 0.5, paddingX: 0.875 },
  lg: { width: 29.688, height: 5, paddingY: 0.625, paddingX: 1 },
  xl: { width: 29.688, height: 6, paddingY: 0.75, paddingX: 1 },
};

const paddingMap = {
  sm: ratioPadding(0.25),
  md: ratioPadding(0.375),
  lg: ratioPadding(0.375),
  xl: ratioPadding(0.375),
};

const handleFontStyleTextArea = (size: TextareaProps['size'] = 'lg') =>
  fontStyleTextareaMap[size];
const handleFontStyleLabel = (size: TextareaProps['size'] = 'lg') =>
  fontStyleLabelMap[size];
const handleTextareaPadding = (size: TextareaProps['size'] = 'lg') =>
  paddingMap[size];

const handleTextareaSize = (
  size: TextareaProps['size'] = 'lg',
  canResize: boolean,
) => {
  const { width, height, paddingY, paddingX } = sizeMap[size];
  return ratioSize(width, height, paddingY, paddingX, canResize);
};

export const TextareaContainerStyled = styled.div<
  {
    styled: Required<TextareaStyledProps>;
  } & TextareaProps
>`
  border: none;
  position: relative;
  font-family: ${({ styled }) => styled.fontFamily};

  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.9;
    pointer-events: none;
  `}
`;

export const TextareaLabelStyled = styled.label<
  {
    styled: Required<TextareaStyledProps>;
  } & TextareaProps
>`
  font-weight: 700;
  border: none;
  outline: none;
  color: ${({ styled }) => styled.labelColor};
  padding-left: 0;
  line-height: initial;
  display: flex;
  margin-bottom: 0.5rem;
  ${({ size }) => handleFontStyleLabel(size)};
`;

export const RequiredFilledIcon = styled.div<{
  styled: Required<TextareaStyledProps>;
}>`
  color: ${({ styled }) => styled.colorError};
`;

export const TextareaHolderStyled = styled.div<
  {
    styled: Required<TextareaStyledProps>;
    isFilled: boolean;
    hasMaxCharacter: boolean;
  } & TextareaProps
>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  border: 1px solid
    ${({ styled, isFilled }) =>
      isFilled ? styled.borderColorFilled : styled.borderColor};
  border-radius: 0.25rem;
  ${({ size, canResize }) => handleTextareaSize(size, canResize || false)};
  box-sizing: border-box;

  &:hover {
    border-color: ${({ styled }) => styled.borderColorHover};

    textarea {
      color: ${({ styled }) => styled.colorHover};

      &::placeholder {
        color: ${({ styled }) => styled.placeholderColorHover};
      }
    }

    + div {
      color: ${({ styled, hasMaxCharacter }) =>
        !hasMaxCharacter && styled.colorHover};
    }
  }

  &:focus-within {
    border-color: ${({ styled }) => styled.borderColorFocus};

    textarea {
      color: ${({ styled }) => styled.colorFocus};
    }

    + div {
      color: ${({ styled, hasMaxCharacter }) =>
        !hasMaxCharacter && styled.colorHover};
    }
  }
`;

export const TextareaStyled = styled.textarea<
  {
    styled: Required<TextareaStyledProps>;
    isFilled: boolean;
  } & TextareaProps
>`
  border: none;
  outline: none;
  font-weight: 400;
  color: ${({ styled, isFilled }) =>
    isFilled ? styled.colorFilled : styled.color};
  width: 100%;
  height: 100%;
  padding: 0;
  ${({ size }) => handleTextareaPadding(size)};
  ${({ size }) => handleFontStyleTextArea(size)};

  ${({ canResize }) =>
    !canResize &&
    `
    resize: none;
  `}

  &::placeholder {
    top: 0;
    position: absolute;
    color: ${({ styled }) => styled.placeholderColor};
  }

  ::-webkit-scrollbar {
    width: 0.375rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c8d3d9;
    border-radius: 0.625rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #666;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: #c8d3d9 white;
  }
`;

export const CharacterCountStyled = styled.div<{
  styled: Required<TextareaStyledProps>;
  hasMaxCharacter: boolean;
  isFilled: boolean;
}>`
  color: ${({ styled }) => styled.color};
  color: ${({ styled, isFilled }) =>
    isFilled ? styled.colorFilled : styled.color};
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;

  ${({ hasMaxCharacter, styled }) =>
    hasMaxCharacter &&
    `
    color: ${styled.colorError};
  `}
`;
