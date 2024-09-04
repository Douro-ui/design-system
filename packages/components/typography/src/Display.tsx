import type { TypographyProps } from './typography.types';
import React from 'react';
import {
  Display1,
  Display2,
  Display3,
  Display4,
  Display5,
  Display6,
} from './typoTypes/display';

const DisplayTypes: Record<
  'display1' | 'display2' | 'display3' | 'display4' | 'display5' | 'display6',
  React.ComponentType<TypographyProps>
> = {
  display1: Display1,
  display2: Display2,
  display3: Display3,
  display4: Display4,
  display5: Display5,
  display6: Display6,
};
export const Display = ({
  children,
  displayType = 'display1',
  ...props
}: TypographyProps): React.ReactNode => {
  const TypographyDisplayStyled = DisplayTypes[displayType];

  return (
    <TypographyDisplayStyled displayType={displayType} {...props}>
      {children}
    </TypographyDisplayStyled>
  );
};
