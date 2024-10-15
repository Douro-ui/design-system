export const spaceUnit = 1;

const createSpacing = (value: number) => `${spaceUnit * value}rem`;

export const spacing = {
  spacing4: createSpacing(0.25),
  spacing6: createSpacing(0.375),
  spacing8: createSpacing(0.5),
  spacing12: createSpacing(0.75),
  spacing16: createSpacing(1),
  spacing20: createSpacing(1.25),
  spacing24: createSpacing(1.5),
  spacing32: createSpacing(2),
  spacing40: createSpacing(2.5),
  spacing64: createSpacing(4),
  spacing80: createSpacing(5),
  spacing96: createSpacing(6),
  spacing120: createSpacing(8),
  spacing160: createSpacing(10),
};
