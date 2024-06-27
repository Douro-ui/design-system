import styled from '@emotion/styled';
import { TabsStyledProps } from './tabs.types';

export const TabsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px #e4e4e4 solid;
  position: relative;
  background-color: #ffffff;
`;

export const TabStyled = styled.div<TabsStyledProps>`
  height: 48px;
  line-height: 1.5rem;
  color: #767676;
  text-decoration: none;
  background: none;
  border: none;
  padding-left: 32px;
  padding-right: 32px;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 8px;
    max-width: 14px;
    fill: #767676;
  }

  ${props =>
    props.selected &&
    `
      color: #298DCC;
      border-bottom: 2px solid #298DCC;
      font-weight: 600;

      svg {
        fill: #298DCC;
      }
    `}

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
