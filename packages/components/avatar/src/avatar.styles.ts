import styled from '@emotion/styled';
import { AvatarProps, AvatarStyledProps } from './avatar.types';

const handleSize = (size: AvatarProps['size']) => {
  switch (size) {
    case 'sm':
      return 'font-size: 0.75rem; width: 2rem; height: 2rem;';
    case 'md':
      return 'font-size: 0.875rem; width: 2.5rem; height: 2.5rem;';
    case 'lg':
      return 'font-size: 1rem; width: 3rem; height: 3rem;';
    case 'xl':
      return 'font-size: 1.25rem; width: 4rem; height: 4rem;';
    default:
      return 'font-size: 1rem; width: 3rem; height: 3rem;';
  }
};

export const AvatarStyled = styled.div<{
  styled: Required<AvatarStyledProps>;
  size: AvatarProps['size'];
  typeAvt: string;
  img?: AvatarProps['img'];
}>`
  color: ${({ styled }) => styled.color};
  background-color: ${({ styled }) => styled.backgroundColor};
  border-radius: ${({ styled }) => styled.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.2s ease;
  font-family: ${({ styled }) => styled.fontFamily};
  font-weight: ${({ styled }) => styled.fontWeight};
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
    width: 1rem;
    max-width: 2rem;
    max-height: 2rem;
    fill: ${({ styled }) => styled.color};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    z-index: 100;
  }

  &:hover {
    transform: scale(1.1);
  }
  ${({ size }) => handleSize(size)};
`;
