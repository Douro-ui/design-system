import styled from '@emotion/styled';
import type { LinkProps, LinkStyledProps } from './link.types';

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

export const LinkStyled = styled.a<
  LinkProps & { styled: Required<LinkStyledProps> }
>`
  font-size: ${({ styled }) => styled.fontSize};
  color: ${({ styled }) => styled.color};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  background: none;
  border: none;
  font-weight: ${({ styled }) => styled.fontWeight};
  cursor: pointer;

  svg {
    fill: ${({ styled }) => styled.color};
  }

  &:hover {
    color: ${({ styled }) => styled.colorHover};

    svg {
      fill: ${({ styled }) => styled.colorHover};
    }
  }

  &:focus {
    color: ${({ styled }) => styled.colorFocus};

    svg {
      fill: ${({ styled }) => styled.colorFocus};
    }
  }

  &:active {
    font-weight: 500;
    color: ${({ styled }) => styled.colorActive};

    svg {
      fill: ${({ styled }) => styled.colorActive};
    }
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
