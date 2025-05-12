import styled from '@emotion/styled';
import { ExpandablePanelStyledProps } from './expandablePanel.types';

export const ExpandablePanelStyled = styled.div<{
  styled: Required<ExpandablePanelStyledProps>;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ styled }) => styled?.width || '100%'};
  max-width: 100%;
  box-sizing: border-box;
  border: ${({ styled }) => styled?.borderColor || 'transparent'};
  padding: ${({ styled }) => styled.paddingX} ${({ styled }) => styled.paddingY}
    ${({ styled }) => styled.paddingX} ${({ styled }) => styled.paddingY};
  gap: ${({ styled }) => styled?.gap};
  background-color: ${({ styled }) => styled?.backgroundColor || 'transparent'};
`;

export const ExpandablePanelItemStyled = styled.div<{
  styled: Required<ExpandablePanelStyledProps>;
}>`
  max-width: 100%;
  width: ${({ styled }) => styled.width};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
`;

export const ExpandablePanelHeaderStyled = styled.button<{
  styled: Required<ExpandablePanelStyledProps>;
}>`
  color: ${({ styled }) => styled.color};
  background-color: ${({ styled }) => styled.backgroundColor || 'transparent'};
  border: ${({ styled }) => styled.borderColor || 'transparent'};
  font-size: ${({ styled }) => styled.fontSize};
  font-weight: ${({ styled }) => styled.fontWeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  width: ${({ styled }) => styled.width};
  padding: ${({ styled }) => styled.paddingX} ${({ styled }) => styled.paddingY}
    ${({ styled }) => styled.paddingX} ${({ styled }) => styled.paddingY};
  gap: ${({ styled }) => styled.gap};

  svg {
    width: 2rem;
    fill: ${({ styled }) => styled.color};
    margin-right: -0.375rem;
  }

  &:disabled {
    color: ${({ styled }) => styled.colorDisabled};
    background-color: ${({ styled }) => styled.backgroundColorDisabled};
    border-color: ${({ styled }) => styled.borderColorDisabled};
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export const ExpandablePanelBodyStyled = styled.div<{
  styled: Required<ExpandablePanelStyledProps>;
  isExpanded: boolean;
  height: string;
}>`
  color: ${({ styled }) => styled.color};
  background-color: ${({ styled }) => styled.backgroundColor || 'transparent'};
  border: ${({ styled }) => styled.borderColor};
  font-size: ${({ styled }) => styled.fontSize};
  font-weight: ${({ styled }) => styled.fontWeight};
  padding: ${({ isExpanded, styled }) =>
    isExpanded ? `${styled.paddingY} ${styled.paddingX}` : '0'};
  width: ${({ styled }) => styled.width};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: ${({ height }) => height};
  overflow: hidden;
  transition: height 80ms ease-in-out;
`;
