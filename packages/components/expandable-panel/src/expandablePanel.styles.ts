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
  cursor: pointer;
  width: ${({ styled }) => styled.width};
  padding: ${({ styled }) => styled.paddingY} ${({ styled }) => styled.paddingX};
  gap: ${({ styled }) => styled.gap};
  transition:
    background-color 150ms ease,
    color 150ms ease;

  svg {
    width: 2rem;
    fill: currentcolor;
    transition: transform 200ms ease;
  }

  &:disabled {
    color: ${({ styled }) => styled.colorDisabled};
    background-color: ${({ styled }) =>
      styled.backgroundColorDisabled || 'transparent'};
    border-color: ${({ styled }) =>
      styled.borderColorDisabled || 'transparent'};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const ExpandablePanelBodyWrapper = styled.div<{
  height: string;
}>`
  overflow: hidden;
  max-height: ${({ height }) => height};
  transition: max-height 200ms ease-in-out;
  width: 100%;
`;

export const ExpandablePanelBodyInner = styled.div<{
  styled: ExpandablePanelStyledProps;
}>`
  color: ${({ styled }) => styled.color};
  background-color: ${({ styled }) => styled.backgroundColor || 'transparent'};
  border: ${({ styled }) => styled.borderColor};
  font-size: ${({ styled }) => styled.fontSize};
  font-weight: ${({ styled }) => styled.fontWeight};
  padding: ${({ styled }) => `${styled.paddingY} ${styled.paddingX}`};
  width: ${({ styled }) => styled.width};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
