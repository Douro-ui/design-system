import styled from '@emotion/styled';
import { ExpandablePanelStyledProps } from './expandablePanel.types';
import { ReactNode } from 'react';

export const ExpandablePanelStyled = styled.div<{
  styled: Required<ExpandablePanelStyledProps>;
}>`
  max-width: 100%;
  width: ${({ styled }) => styled.width};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
`;

export const ExpandablePanelHeaderStyled = styled.button<{
  styled: Required<ExpandablePanelStyledProps>;
  icon?: ReactNode;
}>`
  color: ${({ styled }) => styled.color};
  border: 1px ${({ styled }) => styled.borderColor} solid;
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
    margin-right: 0.5rem;
    width: 1rem;
    max-width: 2rem;
    max-height: 2rem;
    fill: ${({ styled }) => styled.color};
  }

  &:disabled {
    color: ${({ styled }) => styled.colorDisabled};
    background: ${({ styled }) => styled.backgroundColorDisabled};
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
  border: 1px ${({ styled }) => styled.borderColor} solid;
  font-size: ${({ styled }) => styled.fontSize};
  font-weight: ${({ styled }) => styled.fontWeight};
  padding: ${({ isExpanded, styled }) =>
    isExpanded ? `${styled.paddingY} ${styled.paddingX}` : '0'};
  width: ${({ styled }) => styled.width};
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  height: ${({ height }) => height};
  overflow: hidden;
  transition: height 80ms ease-in-out;
`;
