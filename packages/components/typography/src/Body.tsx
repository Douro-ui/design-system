import type { TypographyProps } from './typography.types';
import React from 'react';
import {
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  Body6,
  Body7,
  Body8,
} from './typoTypes/body';

const BodyTypes: Record<
  'body1' | 'body2' | 'body3' | 'body4' | 'body5' | 'body6' | 'body7' | 'body8',
  React.ComponentType<TypographyProps>
> = {
  body1: Body1,
  body2: Body2,
  body3: Body3,
  body4: Body4,
  body5: Body5,
  body6: Body6,
  body7: Body7,
  body8: Body8,
};
export const Body = ({
  children,
  bodyType = 'body1',
  ...props
}: TypographyProps): React.ReactNode => {
  const TypographyBodyStyled = BodyTypes[bodyType];

  return (
    <TypographyBodyStyled bodyType={bodyType} {...props}>
      {children}
    </TypographyBodyStyled>
  );
};
