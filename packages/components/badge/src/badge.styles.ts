import styled from '@emotion/styled';
import { BadgeProps, BadgeStyledProps } from './badge.types';

const handlePositionOffset = (size: BadgeProps['size']) => {
  switch (size) {
    case 'xs':
      return '0.125rem';
    case 'sm':
      return '-0.125rem';
    case 'md':
    default:
      return '-0.375rem';
    case 'lg':
      return '-0.75rem';
    case 'xl':
      return '-1.5rem';
  }
};

const handleFontSize = (size: BadgeProps['size']) => {
  switch (size) {
    case 'sm':
      return '0.75rem';
    case 'md':
    default:
      return '0.75rem';
    case 'lg':
      return '1rem';
    case 'xl':
      return '1.125rem';
  }
};

export const BadgeWrapperStyled = styled.div`
  position: relative;
`;

export const BadgeStyled = styled.div<
  {
    styled: Required<BadgeStyledProps>;
  } & BadgeProps
>`
  background-color: ${({ styled }) => styled.backgroundColor};
  border: 1px solid ${({ styled }) => styled.borderColor};
  color: ${({ styled }) => styled.color};
  font-weight: ${({ styled }) => styled.fontWeight};
  border-radius: 1000rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: ${({ size }) => handleFontSize(size)};

  ${({ position, size }) => {
    const offset = handlePositionOffset(size);
    switch (position) {
      case 'top-left':
        return `
          top: ${offset};
          left: ${offset};
        `;
      case 'bottom-right':
        return `
          bottom: ${offset};
          right: ${offset};
        `;
      case 'bottom-left':
        return `
          bottom: ${offset};
          left: ${offset};
        `;
      case 'top-right':
      default:
        return `
          top: ${offset};
          right: ${offset};
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'xs':
        return `
          width: 0.5rem;
          height: 0.5rem;
        `;
      case 'sm':
        return `
          width: 1rem;
          height: 1rem;
        `;
      case 'md':
      default:
        return `
          width: 1.5rem;
          height: 1.5rem;
        `;
      case 'lg':
        return `
          width: 2rem;
          height: 2rem;
        `;
      case 'xl':
        return `
          width: 3rem;
          height: 3rem;
        `;
    }
  }}
`;
