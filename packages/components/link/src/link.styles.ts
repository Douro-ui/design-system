import styled from '@emotion/styled';
import type { LinkProps, LinkStyledProps } from './link.types';

const fontStyle = (
  fontSize: number,
  fontWeight: number,
  lineHeight: number,
) => `
font-size: ${fontSize}rem;
font-weight: ${fontWeight};
line-height: ${lineHeight}rem;
`;

const ratioSize = (Width: number, Height: number) => `
  width: ${Width}rem;
  height: ${Height}rem;
`;

const fontStyleMap = {
  sm: fontStyle(0.75, 400, 1),
  md: fontStyle(0.875, 400, 1.125),
  lg: fontStyle(1, 400, 1.5),
  xl: fontStyle(1.5, 450, 1.75),
  xxl: fontStyle(3, 450, 3.6),
};

const sizeMap = {
  sm: ratioSize(1, 1),
  md: ratioSize(1, 1),
  lg: ratioSize(1.5, 1.5),
  xl: ratioSize(2, 2),
  xxl: ratioSize(3, 3),
};

const handleFontStyle = (size: LinkProps['size'] = 'lg') => fontStyleMap[size];
const handleIconSize = (size: LinkProps['size'] = 'lg') => sizeMap[size];
const handleGap = (size: LinkProps['size'], hasIcon: boolean) => {
  if (!hasIcon) return 0;
  return size === 'xxl'
    ? '1rem'
    : size === 'xl' || size === 'lg'
      ? '0.5rem'
      : '0.25rem';
};

export const LinkStyled = styled.a<{
  styled: Required<LinkStyledProps>;
  size: LinkProps['size'];
  underline?: boolean;
  disabled?: boolean;
  hasIconBefore: boolean;
  hasIconAfter: boolean;
}>`
  display: flex;
  align-items: center;
  color: ${({ styled }) => styled.color};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  background: none;
  border: none;
  cursor: pointer;
  gap: ${({ size, hasIconAfter, hasIconBefore }) =>
    handleGap(size, hasIconAfter || hasIconBefore)};
  ${({ size }) => handleFontStyle(size)};

  svg {
    fill: ${({ styled, disabled }) =>
      disabled ? styled.colorDisabled : styled.colorVisited};
  }

  &:hover {
    color: ${({ styled }) => styled.colorHover};
    text-decoration: underline;

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
    color: ${({ styled }) => styled.colorActive};

    svg {
      fill: ${({ styled }) => styled.colorActive};
    }
  }

  &:visited {
    color: ${({ styled }) => styled.colorVisited};

    svg {
      fill: ${({ styled }) => styled.colorVisited};
    }

    &:hover {
      color: ${({ styled }) => styled.colorHoverVisited};
      text-decoration: underline;

      svg {
        fill: ${({ styled }) => styled.colorHoverVisited};
      }
    }
  }

  &[aria-disabled='true'] {
    color: ${({ styled }) => styled.colorDisabled};
    pointer-events: none;
    cursor: not-allowed;

    svg {
      fill: ${({ styled }) => styled.colorDisabled};
    }
  }
`;

export const IconStyled = styled.div<{
  styled: Required<LinkStyledProps>;
  size: LinkProps['size'];
}>`
  ${({ size }) => handleIconSize(size)};
`;
