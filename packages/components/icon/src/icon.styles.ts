import styled from '@emotion/styled';
import { IconProps, IconStyledProps } from './icon.types';

const handleIconSize = (size: IconProps['size']) => {
  switch (size) {
    case 'sm':
      return '1rem';
    case 'md':
    default:
      return '1.5rem';
    case 'lg':
      return '2rem';
  }
};

export const IconWrapperStyled = styled.div`
  position: relative;
`;

export const IconStyled = styled.svg<{
  styled: Required<IconStyledProps>;
  size: IconProps['size'];
}>`
  width: ${({ size }) => handleIconSize(size)};
  height: ${({ size }) => handleIconSize(size)};
  color: ${({ styled }) => styled.color};
  fill: ${({ styled }) => styled.fillColor};
  stroke: ${({ styled }) => styled.strokeColor};
  display: inline-block;
  position: absolute;
`;
