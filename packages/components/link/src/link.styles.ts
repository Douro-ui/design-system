import styled from '@emotion/styled';
import { LinkProps, LinkStyledProps } from './link.types';

export const SpanHiddenStyled = styled.span`
  position: absolute;
  width: 0.063rem;
  height: 0.063rem;
  padding: 0;
  margin: -0.063rem;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const LinkStyled = styled.a<LinkStyledProps & LinkProps>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ styledColor }) => styledColor};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  background: none;
  border: none;
  font-weight: 400;
  cursor: pointer;

  svg {
    fill: ${({ styledColor }) => styledColor};
  }

  &:hover {
    color: ${({ styledColorHover }) => styledColorHover};

    svg {
      fill: ${({ styledColorHover }) => styledColorHover};
    }
  }

  &:focus {
    color: ${({ styledColorFocus }) => styledColorFocus};

    svg {
      fill: ${({ styledColorFocus }) => styledColorFocus};
    }
  }

  &:active {
    font-weight: 500;
    color: ${({ styledColorActive }) => styledColorActive};

    svg {
      fill: ${({ styledColorActive }) => styledColorActive};
    }
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
