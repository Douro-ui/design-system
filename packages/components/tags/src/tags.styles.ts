import styled from '@emotion/styled';
import { TagsProps, TagsStyledProps } from './tags.types';

const handleSize = (
  size: TagsProps['size'],
  hasIconBefore: boolean,
  hasIconAfter: boolean,
) => {
  let padding;
  switch (size) {
    case 'sm':
      padding = hasIconBefore
        ? hasIconAfter
          ? 'padding: 0.125rem;'
          : 'padding: 0.125rem 0.25rem 0.125rem 0.125rem;'
        : hasIconAfter
          ? 'padding: 0.125rem 0.125rem 0.125rem 0.25rem;'
          : 'padding: 0.25rem;';

      return (
        padding +
        'font-size: 0.75rem; line-height: 0.75rem; gap: 0.188rem; height: 1.25rem'
      );
    case 'lg':
      padding = hasIconBefore
        ? hasIconAfter
          ? 'padding: 0.375rem 0.5rem;'
          : 'padding: 0.375rem 0.75rem 0.375rem 0.5rem;'
        : hasIconAfter
          ? 'padding: 0.375rem 0.5rem 0.375rem 0.75rem;'
          : 'padding: 0.375rem 0.75rem;';
      return (
        padding +
        'font-size: 0.875rem; line-height: 1.25rem; gap: 0.563rem; height: 2rem'
      );
    case 'xl':
      padding = hasIconBefore
        ? hasIconAfter
          ? 'padding: 0.5rem 0.75rem;'
          : 'padding: 0.5rem 1rem 0.5rem 0.75rem;'
        : hasIconAfter
          ? 'padding: 0.5rem 0.75rem 0.5rem 1rem;'
          : 'padding: 0.5rem 1rem;';
      return (
        padding +
        'font-size: 1rem; line-height: 1.5rem; gap: 0.563rem; height: 2.5rem'
      );
    default:
      padding = hasIconBefore
        ? hasIconAfter
          ? 'padding: 0.25rem 0.375rem;'
          : 'padding: 0.25rem 0.5rem 0.25rem 0.375rem;'
        : hasIconAfter
          ? 'padding: 0.25rem 0.375rem 0.25rem 0.5rem;'
          : 'padding: 0.25rem 0.5rem;';
      return (
        padding +
        'font-size: 0.75rem; line-height: 1rem; gap: 0.313rem; height: 1.5rem'
      );
  }
};

export const TagsContainerStyled = styled.div<{
  styled: Required<TagsStyledProps>;
  size: TagsProps['size'];
  disabled: TagsProps['disabled'];
  isSelectableTag?: boolean;
  hasIconBefore: boolean;
  hasIconAfter: boolean;
}>`
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 0.063rem solid ${({ styled }) => styled.borderColor};
  border-radius: ${({ styled }) => styled.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  ${({ size, hasIconBefore, hasIconAfter }) =>
    handleSize(size, hasIconBefore, hasIconAfter)};

  ${({ isSelectableTag }) =>
    isSelectableTag &&
    `
      cursor: pointer;
    `}

  &:hover {
    background-color: ${({ styled }) => styled.backgroundColorHover};
    border-color: ${({ styled }) => styled.borderColorHover};

    .label-styled {
      color: ${({ styled }) => styled.colorHover};
    }

    svg {
      fill: ${({ styled }) => styled.iconColorHover};
    }
  }

  &:focus {
    background-color: ${({ styled }) => styled.backgroundColorFocus};
    box-shadow: 0 0 0 0.125rem ${({ styled }) => styled.borderColorFocus};

    .label-styled {
      color: ${({ styled }) => styled.colorFocus};
    }

    svg {
      fill: ${({ styled }) => styled.iconColorFocus};
    }
  }

  &:active,
  &.selected {
    background-color: ${({ styled }) => styled.backgroundColorActive};
    border-color: ${({ styled }) => styled.borderColorActive};

    .label-styled {
      color: ${({ styled }) => styled.colorActive};
    }

    svg {
      fill: ${({ styled }) => styled.iconColorActive};
    }
  }

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.7;
      pointer-events: none;
    `}
`;

export const IconStyled = styled.div<{
  styled: Required<TagsStyledProps>;
  size: TagsProps['size'];
  typeTag?: TagsProps['typeTag'];
  iconAfter?: boolean;
}>`
  ${({ iconAfter }) =>
    iconAfter &&
    `
      margin-left: 0.25rem;
    `}

  ${({ iconAfter, typeTag }) =>
    iconAfter &&
    typeTag == 'dismissible' &&
    `
      cursor: pointer;
    `}

  ${({ size }) =>
    size == 'xl' &&
    `
      > div {
        width: 1.5rem;
        height: 1.5rem;
      }
    `}

  ${({ typeTag, styled }) =>
    typeTag == 'dismissible' &&
    `
        &:hover {
          background-color: ${styled.iconBackgroundColorHover};
          border-radius: 1000rem;
          cursor: pointr;
        }

        &:focus {
          background-color: ${styled.iconBackgroundColorFocus};
          box-shadow: 0 0 0 0.125rem ${styled.iconborderColorFocus};
          border-radius: ${styled.borderRadius};
        }
      `}
`;

export const LabelStyled = styled.div<{
  styled: Required<TagsStyledProps>;
  size: TagsProps['size'];
  disabled: TagsProps['disabled'];
}>`
  color: ${({ styled }) => styled.color};
  font-weight: ${({ styled }) => styled.fontWeight};
`;
