import { Breakpoints } from '../../../react/src/theme/theme.constants';
import { getResponsiveTypography } from '../getResposiveTypography';
import {
  TypographyStyledProps,
  TypographyType,
} from '../../typography/src/typography.types';

describe('getResponsiveTypography', () => {
  const mockDisplayTypography: TypographyType = {
    [Breakpoints.MOBILE]: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    [Breakpoints.TABLET]: {
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 500,
    },
    [Breakpoints.DESKTOP]: {
      fontSize: '28px',
      lineHeight: '32px',
      fontWeight: 600,
    },
    [Breakpoints.DESKTOP_LARGE]: {
      fontSize: '32px',
      lineHeight: '36px',
      fontWeight: 900,
    },
  };

  const mockHeadingTypography: TypographyType = {
    [Breakpoints.MOBILE]: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
    },
    [Breakpoints.TABLET]: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 500,
    },
    [Breakpoints.DESKTOP]: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    [Breakpoints.DESKTOP_LARGE]: {
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: 700,
    },
  };

  const mockBodyTypography: TypographyType = {
    [Breakpoints.MOBILE]: {
      fontSize: '10px',
      lineHeight: '12px',
      fontWeight: 400,
    },
    [Breakpoints.TABLET]: {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: 500,
    },
    [Breakpoints.DESKTOP]: {
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: 600,
    },
    [Breakpoints.DESKTOP_LARGE]: {
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: 700,
    },
  };

  it('should return correct styles for displayListParam based on MOBILE breakpoint', () => {
    const result: TypographyStyledProps = getResponsiveTypography(
      Breakpoints.MOBILE,
      {
        displayListParam: mockDisplayTypography,
      },
    );

    expect(result).toEqual(mockDisplayTypography[Breakpoints.MOBILE]);
  });

  it('should return correct styles for headingListParam based on DESKTOP breakpoint', () => {
    const result: TypographyStyledProps = getResponsiveTypography(
      Breakpoints.DESKTOP,
      {
        headingListParam: mockHeadingTypography,
      },
    );

    expect(result).toEqual(mockHeadingTypography[Breakpoints.DESKTOP]);
  });

  it('should return correct styles for bodyListParam based on TABLET breakpoint', () => {
    const result: TypographyStyledProps = getResponsiveTypography(
      Breakpoints.TABLET,
      {
        bodyListParam: mockBodyTypography,
      },
    );

    expect(result).toEqual(mockBodyTypography[Breakpoints.TABLET]);
  });

  it('should throw an error when no valid typography list is provided', () => {
    expect(() => getResponsiveTypography(Breakpoints.MOBILE, {})).toThrow(
      'No valid typography list provided',
    );
  });
});
