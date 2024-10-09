import styled from '@emotion/styled';
import { TagsProps, TagsStyledProps } from './tags.types';

const handleSize = (size: TagsProps['size']) => {
  switch (size) {
    case 'sm':
      return 'font-size: 0.75rem; padding: 0.063rem 0.188rem;';
    case 'md':
    default:
      return 'font-size: 0.75rem; padding: 0.188rem 0.438rem;';
    case 'lg':
      return 'font-size: 0.875rem; padding: 0.313rem 0.938rem;';
    case 'xl':
      return 'font-size: 1rem; padding: 0.438rem 0.938rem;';
  }
};

export const TagsContainerStyled = styled.div<{
  styled: Required<TagsStyledProps>;
  size: TagsProps['size'];
  disabled: TagsProps['disabled'];
}>`
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 0.063rem solid ${({ styled }) => styled.borderColor};
  border-radius: ${({ styled }) => styled.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  ${({ size }) => handleSize(size)};

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

  &:active {
    background-color: ${({ styled }) => styled.backgroundColorActive};
    border-color: ${({ styled }) => styled.borderColorActive};

    .label-styled {
      color: ${({ styled }) => styled.colorActive};
    }

    svg {
      fill: ${({ styled }) => styled.iconColorActive};
    }
  }

  ${({ disabled, styled }) =>
    disabled &&
    `
      background-color: ${styled.backgroundColorDisabled};
      border-color: ${styled.borderColorDisabled};
      pointer-events: none;

      .label-styled {
        color: ${styled.colorDisabled};
      }

      svg {
        fill: ${styled.iconColorDisabled};
      }
    `}
`;

export const IconStyled = styled.div<{
  styled: Required<TagsStyledProps>;
  size: TagsProps['size'];
  typeTag?: TagsProps['typeTag'];
}>`
  margin-left: 0.25rem;

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
