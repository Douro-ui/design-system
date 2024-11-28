import type { HeadingType, TypographyProps } from './typography.types';
import React from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading7,
  Heading8,
} from './typoTypes/heading';

const HeadingTypes: Record<
  HeadingType,
  React.ComponentType<TypographyProps>
> = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  heading7: Heading7,
  heading8: Heading8,
};
export const Heading = ({
  children,
  headingType = 'h1',
  ...props
}: TypographyProps): React.ReactNode => {
  const TypographyHeadingStyled = HeadingTypes[headingType];

  return (
    <TypographyHeadingStyled headingType={headingType} {...props}>
      {children}
    </TypographyHeadingStyled>
  );
};
