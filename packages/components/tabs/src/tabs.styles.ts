import styled from '@emotion/styled';
import { TabsContainerStyledProps, TabsStyledProps } from './tabs.types';
import { css } from '@emotion/react';

export const TabsContainerStyled = styled.div<TabsContainerStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
  border-bottom: 1px ${({ styledBorder }) => styledBorder} solid;
  position: relative;
  background-color: ${({ styledBackgroundColor }) => styledBackgroundColor};
`;

const tabSelectedStyles = ({ styledSelectedColor }: TabsStyledProps) => css`
  color: ${styledSelectedColor};
  border-bottom: 2px solid ${styledSelectedColor};
  font-weight: 600;
`;

export const TabStyled = styled.div<TabsStyledProps>`
  height: 3rem;
  line-height: 1.5rem;
  color: ${({ styledColor }) => styledColor};
  text-decoration: none;
  background: none;
  border: none;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
    max-width: 0.875rem;
    fill: ${({ styledColor }) => styledColor};
  }

  ${props => props.selected && tabSelectedStyles(props)}

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
