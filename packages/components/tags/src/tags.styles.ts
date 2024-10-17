import styled from '@emotion/styled';
import { TagsProps, TagsStyledProps } from './tags.types';

const getPadding = (
  size: 'sm' | 'lg' | 'xl' | 'md' | 'default' | undefined,
  hasIconBefore: boolean,
  hasIconAfter: boolean,
) => {
  const paddingValues = {
    lg: {
      py: '0.375rem',
      pd: '0.75rem',
      pi: '0.5rem',
    },
    xl: {
      py: '0.5rem',
      pd: '1rem',
      pi: '0.75rem',
    },
    default: {
      py: '0.25rem',
      pd: '0.5rem',
      pi: '0.375rem',
    },
  };

  if (size === 'sm') {
    const padding = hasIconBefore
      ? hasIconAfter
        ? 'padding: 0.125rem;'
        : 'padding: 0.125rem 0.25rem 0.125rem 0.125rem;'
      : hasIconAfter
        ? 'padding: 0.125rem 0.125rem 0.125rem 0.25rem;'
        : 'padding: 0.25rem;';
    return padding;
  }

  const validSize = size === 'md' || size === undefined ? 'default' : size;
  const { py, pd, pi } = paddingValues[validSize];

  const padding = hasIconBefore
    ? hasIconAfter
      ? `${py} ${pi}`
      : `${py} ${pd} ${py} ${pi}`
    : hasIconAfter
      ? `${py} ${pi} ${py} ${pd}`
      : `${py} ${pd}`;

  return `padding: ${padding};`;
};

const getSizeStyles = (
  size: 'sm' | 'lg' | 'xl' | 'md' | 'default' | undefined,
) => {
  const sizes = {
    sm: 'font-size: 0.75rem; line-height: 0.75rem; gap: 0.188rem; height: 1.25rem;',
    lg: 'font-size: 0.875rem; line-height: 1.25rem; gap: 0.563rem; height: 2rem;',
    xl: 'font-size: 1rem; line-height: 1.5rem; gap: 0.563rem; height: 2.5rem;',
    default:
      'font-size: 0.75rem; line-height: 1rem; gap: 0.313rem; height: 1.5rem;',
  };

  const validSize = size === 'md' || size === undefined ? 'default' : size;
  return sizes[validSize];
};

const handleSize = (
  size: TagsProps['size'],
  hasIconBefore: boolean,
  hasIconAfter: boolean,
) => {
  const padding = getPadding(size, hasIconBefore, hasIconAfter);
  const sizeStyles = getSizeStyles(size);
  return padding + sizeStyles;
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
