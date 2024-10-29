import styled from '@emotion/styled';
import { IconStyledProps } from './icon.types';

export const IconStyled = styled.div<{
  styled: Required<IconStyledProps>;
}>`
  svg {
    width: ${({ styled }) => styled.width};
    height: ${({ styled }) => styled.height};
    fill: ${({ styled }) => styled.fillColor};
    stroke: ${({ styled }) => styled.strokeColor};
  }
`;
