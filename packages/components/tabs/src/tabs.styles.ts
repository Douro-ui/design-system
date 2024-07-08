import styled from '@emotion/styled';
import { TabsStyledProps } from './tabs.types';

export const TabsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
  /* stylelint-disable */
  border-bottom: 1px #e4e4e4 solid;
  /* stylelint-enable */
  position: relative;
  background-color: #ffffff;
`;

export const TabStyled = styled.div<TabsStyledProps>`
  height: 3rem;
  line-height: 1.5rem;
  color: #767676;
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
    fill: #767676;
  }

  ${props =>
    props.selected &&
    `
      color: #2860D7;
      border-bottom: 2px solid #2860D7;
      font-weight: 600;

      svg {
        fill: #2860D7;
      }
    `}

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
