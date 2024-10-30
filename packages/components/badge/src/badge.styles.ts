import styled from '@emotion/styled';
import { BadgeProps, BadgeStyledProps } from './badge.types';

const positionOffset = (offset: number) => ({
  'top-left': `
    top: ${offset}rem;
    left: ${offset}rem;
  `,
  'bottom-right': `
    bottom: ${offset}rem;
    right: ${offset}rem;
  `,
  'bottom-left': `
    bottom: ${offset}rem;
    left: ${offset}rem;
  `,
  'top-right': `
    top: ${offset}rem;
    right: ${offset}rem;
  `,
});
const fontStyle = (FontSize: number) => `
  font-size: ${FontSize}rem;
`;
const ratioSize = (Width: number, Height: number) => `
  width: ${Width}rem;
  height: ${Height}rem;
`;
const boxShadowSize = (insetValue: string, shadowSize: number) => `
  ${insetValue}${shadowSize}rem
`;

const positionOffsetMap = {
  xs: positionOffset(0.125),
  sm: positionOffset(-0.125),
  md: positionOffset(-0.375),
  lg: positionOffset(-0.75),
  xl: positionOffset(-1.5),
};
const fontStyleMap = {
  xs: fontStyle(0.75),
  sm: fontStyle(0.75),
  md: fontStyle(0.75),
  lg: fontStyle(1),
  xl: fontStyle(1.125),
};
const sizeMap = {
  xs: ratioSize(0.5, 0.5),
  sm: ratioSize(1, 1),
  md: ratioSize(1.5, 1.5),
  lg: ratioSize(2, 2),
  xl: ratioSize(3, 3),
};
const iconSizeMap = {
  xs: ratioSize(0, 0),
  sm: ratioSize(1, 1),
  md: ratioSize(1, 1),
  lg: ratioSize(1.5, 1.5),
  xl: ratioSize(2, 2),
  xxl: ratioSize(0, 0),
};
const boxShadowMap = {
  xs: boxShadowSize('inset 0 0 0 ', 0),
  sm: boxShadowSize('inset 0 0 0 ', 0.063),
  md: boxShadowSize('inset 0 0 0 ', 0.125),
  lg: boxShadowSize('inset 0 0 0 ', 0.125),
  xl: boxShadowSize('inset 0 0 0 ', 0.188),
};

const handlePositionOffset = (
  size: BadgeProps['size'] = 'lg',
  position: BadgeProps['position'] = 'top-right',
) => {
  const sizeOffsets = positionOffsetMap[size];
  return sizeOffsets
    ? sizeOffsets[position]
    : positionOffsetMap.lg['top-right'];
};
const handleFontStyle = (size: BadgeProps['size'] = 'lg') => fontStyleMap[size];
const handleSize = (size: BadgeProps['size'] = 'lg') => sizeMap[size];
const handleIconSize = (size: BadgeProps['size'] = 'lg') => iconSizeMap[size];
const handleBoxShadow = (size: BadgeProps['size'] = 'lg') =>
  boxShadowMap[size] ?? boxShadowSize('inset 0 0 0 ', 0.125);

export const BadgeWrapperStyled = styled.div`
  position: relative;
`;

export const BadgeStyled = styled.div<{
  styled: Required<BadgeStyledProps>;
  size: BadgeProps['size'];
  position: BadgeProps['position'];
  hasCounter: boolean;
}>`
  background-color: ${({ styled }) => styled.backgroundColor};
  color: ${({ styled }) => styled.color};
  font-weight: ${({ styled }) => styled.fontWeight};
  border-radius: 1000rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-shadow: ${({ size, styled, hasCounter }) =>
    hasCounter ? 'none' : `${handleBoxShadow(size)} ${styled.boxShadowColor}`};
  ${({ size }) => handleFontStyle(size)};
  ${({ size, position }) => handlePositionOffset(size, position)};
  ${({ size }) => handleSize(size)};
`;

export const BadgeIconStyled = styled.div<{
  styled: Required<BadgeStyledProps>;
  size: BadgeProps['size'];
  position: BadgeProps['position'];
}>`
  background-color: ${({ styled, size }) =>
    size === 'xs' ? 'transparent' : styled.backgroundColor};
  color: ${({ styled }) => styled.color};
  font-weight: ${({ styled }) => styled.fontWeight};
  border-radius: 1000rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  ${({ size }) => handleFontStyle(size)};
  ${({ size, position }) => handlePositionOffset(size, position)};
  ${({ size }) => handleSize(size)};
`;

export const IconStyled = styled.div<{
  styled: Required<BadgeStyledProps>;
  icon?: boolean;
  size: BadgeProps['size'];
  onClick?: BadgeProps['onClick'];
}>`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  ${({ size }) => handleIconSize(size)};
`;
