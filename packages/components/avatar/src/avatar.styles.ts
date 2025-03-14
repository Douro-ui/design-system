import styled from '@emotion/styled';
import { AvatarProps, AvatarStyledProps } from './avatar.types';

const handleSize = (size: AvatarProps['size']) => {
  switch (size) {
    case 'xxs':
      return 'font-size: 0.75rem; width: 1.5rem; height: 1.5rem;';
    case 'xs':
      return 'font-size: 0.875rem; width: 2rem; height: 2rem;';
    case 'sm':
      return 'font-size: 1rem; width: 2.5rem; height: 2.5rem;';
    case 'md':
      return 'font-size: 1.25rem; width: 3rem; height: 3rem;';
    case 'xl':
      return 'font-size: 2rem; width: 6rem; height: 6rem;';
    case 'xxl':
      return 'font-size: 3rem; width: 10rem; height: 10rem;';
    default:
      return 'font-size: 1.5rem; width: 4rem; height: 4rem;';
  }
};
const handleMargin = (size: AvatarProps['size']) => {
  switch (size) {
    case 'xxs':
      return '-0.50rem';
    case 'xs':
      return '-0.75rem';
    case 'sm':
      return '-1rem';
    case 'xl':
      return '-2rem';
    case 'xxl':
      return '-3rem';
    default:
      return '-1.5rem';
  }
};

const handleBoxShadow = (size: AvatarProps['size']) => {
  const insetValue = 'inset 0 0 0 ';

  switch (size) {
    case 'xxs':
    case 'xs':
    case 'sm':
      return `${insetValue}0.063rem`;
    case 'xl':
      return `${insetValue}0.188rem`;
    case 'xxl':
      return `${insetValue}0.25rem`;
    default:
      return `${insetValue}0.125rem`;
  }
};

const handleBadge = (size: AvatarProps['size']) => {
  switch (size) {
    case 'xxs':
      return 'top:-8%; right:-8%';
    case 'xs':
      return 'top:-6%; right:-6%';
    case 'sm':
      return 'top:5%; right:5%';
    case 'md':
      return 'top:5%; right:4%';
    case 'lg':
      return 'top:9%; right:9%';
    case 'xl':
      return 'top:13%; right:13%';
    case 'xxl':
      return 'top:15%; right:15%';
    default:
      return '-1.5rem';
  }
};

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const AvatarStyled = styled.div<{
  styled: Required<AvatarStyledProps>;
  size: AvatarProps['size'];
  typeAvt: string;
  imgProps?: AvatarProps['imgProps'];
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
  box-shadow: ${({ size, styled }) =>
    `${handleBoxShadow(size)} ${styled.boxShadowColor}`};
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
    transition: opacity 0.2s ease;

    &:active {
      opacity: 0.5;
    }
  }

  &:hover {
    background-color: ${({ styled }) => styled.backgroundColorHover};
  }

  &:active {
    background-color: ${({ styled }) => styled.backgroundColorActive};
  }

  ${({ size }) => handleSize(size)};
`;
export const AvatarFilter = styled.div<{ maskColor: string }>`
  position: absolute;
  border-radius: 800px;
  inset: 0;
  background-color: ${({ maskColor }) => maskColor};
  mix-blend-mode: screen;
  pointer-events: none;
  opacity: 0.6;
`;

export const AvatarBadge = styled.div<{
  size: AvatarProps['size'];
}>`
  position: absolute;
  z-index: 1000;
  ${({ size }) => handleBadge(size)};
`;
export const AvatarGroupWrapper = styled.div<{
  size: AvatarProps['size'];
}>`
  display: flex;
  align-items: center;
  position: relative;

  & > div {
    margin-right: ${({ size }) => handleMargin(size)};
  }

  & > div:last-child {
    margin-right: 0;
  }
  ${({ size }) => handleMargin(size)};
`;
export const FallbackAvatarStyled = styled.div<{
  styled: Required<AvatarStyledProps>;
  size: AvatarProps['size'];
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

  &:hover {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: ${({ styled }) => styled.backgroundColorHover};
      opacity: 0.1;
      pointer-events: none;
    }
  }

  &:active {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: ${({ styled }) => styled.backgroundColorHover};
      opacity: 0.4;
      pointer-events: none;
    }
  }
  ${({ size }) => handleSize(size)};
`;
