import { Breakpoints } from '@douro-ui/react';
import { TypographyStyledProps, TypographyType } from '../typography.types';

interface TypographyParams {
  displayListParam?: TypographyType;
  headingListParam?: TypographyType;
  bodyListParam?: TypographyType;
}
export const getResponsiveTypography = (
  breakpointRef: Breakpoints,
  listParams: TypographyParams,
): TypographyStyledProps => {
  const { displayListParam, headingListParam, bodyListParam } = listParams;

  if (displayListParam) {
    return displayListParam[breakpointRef];
  }

  if (headingListParam) {
    return headingListParam[breakpointRef];
  }

  if (bodyListParam) {
    return bodyListParam[breakpointRef];
  }
  throw new Error('No valid typography list provided');
};
