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

const handleIconSize = (size: TagsProps['size']) => {
  switch (size) {
    case 'sm':
    case 'md':
    case 'lg':
    default:
      return 'width: 1rem; height: 1rem;';
    case 'xl':
      return 'width: 1.5rem; height: 1.5rem;';
  }
};

export const TagsContainerStyled = styled.div<{
  styled: Required<TagsStyledProps>;
  size: TagsProps['size'];
  disabled: TagsProps['disabled'];
}>`
  background-color: 0.063rem solid ${({ styled }) => styled.backgroundColor};
  border: 0.063rem solid ${({ styled }) => styled.borderColor};
  ${({ size }) => handleSize(size)};

  &:hover {
    color: ${({ styled }) => styled.colorHover};
    border-color: ${({ styled }) => styled.borderColorHover};
  }

  &:focus {
    color: ${({ styled }) => styled.colorFocus};
    border-color: ${({ styled }) => styled.borderColorFocus};
  }

  &:active {
    color: ${({ styled }) => styled.colorActive};
    border-color: ${({ styled }) => styled.borderColorActive};
  }

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;
    `}
`;

export const IconStyled = styled.img<{
  styled: Required<TagsStyledProps>;
  size: TagsProps['size'];
}>`
  fill: ${({ styled }) => styled.iconColor};
  ${({ size }) => handleIconSize(size)};

  &:hover {
    fill: ${({ styled }) => styled.iconColorHover};
  }

  &:focus {
    fill: ${({ styled }) => styled.iconColorFocus};
  }

  &:active {
    fill: ${({ styled }) => styled.iconColorActive};
  }
`;

export const LabelStyled = styled.div<{
  styled: Required<TagsStyledProps>;
  size: TagsProps['size'];
}>`
  color: ${({ styled }) => styled.color};
  font-weight: ${({ styled }) => styled.fontWeight};

  &:hover {
    color: ${({ styled }) => styled.colorHover};
  }

  &:focus {
    color: ${({ styled }) => styled.colorFocus};
  }

  &:active {
    color: ${({ styled }) => styled.colorActive};
  }
`;
