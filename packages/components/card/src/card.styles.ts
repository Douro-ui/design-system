import styled from '@emotion/styled';
import { CardProps } from './card.types';
import theme from '../../../react/src/tokens/themes/theme';

export const CardStyled = styled.div<CardProps>`
  border: 0.063rem solid
    ${props => props.borderColor || theme.colors.neutral.silver.shade30};
  padding: 1rem;
  position: relative;
  border-radius: ${props => props.borderRadius || '0.25rem'};
  background-color: ${props =>
    props.backgroundColor || theme.colors.brand.white};
  width: ${props => props.width || '6.25rem'};
  height: ${props => props.height || '6.25rem'};
`;
