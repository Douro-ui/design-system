import styled from '@emotion/styled';
import { IconProps, IconStyledProps } from './icon.types';

const handleIconSize = (size: IconProps['size']) => {
  switch (size) {
    default:
      return '1rem';
    case 'lg':
      return '1.5rem';
  }
};

export const IconStyled = styled.div<{
  styled: Required<IconStyledProps>;
  size: IconProps['size'];
}>`
  width: ${({ size }) => handleIconSize(size)};
  height: ${({ size }) => handleIconSize(size)};

  svg {
    fill: ${({ styled }) => styled.fillColor};
    stroke: ${({ styled }) => styled.strokeColor};
  }
`;
