import { FontWeight } from './theme.constants';

const fontFamily = 'neue-haas-grotesk-display';
const textFontFamily = 'neue-haas-grotesk-text';

const createHeaderStyles = (fontSize, fontWeight) => ({
  fontSize,
  fontWeight,
  lineHeight: '120%',
  fontFamily,
});

const createTitleStyles = (fontSize, fontWeight) => ({
  fontSize,
  lineHeight: '120%',
  fontWeight,
  fontFamily,
});

const createBodyStyles = (fontSize, fontWeight) => ({
  fontSize,
  lineHeight: '150%',
  fontWeight,
  fontFamily: textFontFamily,
});

const createButtonStyles = fontSize => ({
  fontSize,
  lineHeight: '100%',
  fontWeight: FontWeight.MEDIUM,
  fontFamily: textFontFamily,
  '&:hover': {
    textDecoration: 'underline',
  },
});

const createLinkStyles = fontSize => ({
  fontSize,
  lineHeight: '150%',
  fontWeight: FontWeight.ROMAN,
  fontFamily: textFontFamily,
  '&:active': {
    fontWeight: FontWeight.MEDIUM,
  },
});

export const xxxlTypography = {
  header: {
    h1: createHeaderStyles('1.75rem', FontWeight.MEDIUM),
    h2: createHeaderStyles('1.75rem', FontWeight.ROMAN),
    h3: createHeaderStyles('1.5rem', FontWeight.MEDIUM),
    h4: createHeaderStyles('1.25rem', FontWeight.MEDIUM),
    h5: createHeaderStyles('1.25rem', FontWeight.ROMAN),
    h6: createHeaderStyles('1.125rem', FontWeight.MEDIUM),
    h7: createHeaderStyles('1rem', FontWeight.ROMAN),
    h8: createHeaderStyles('0.875rem', FontWeight.MEDIUM),
  },
  title: {
    title1: createTitleStyles('4.5rem', FontWeight.MEDIUM),
    title2: createTitleStyles('4rem', FontWeight.MEDIUM),
    title3: createTitleStyles('3.5rem', FontWeight.MEDIUM),
    title4: createTitleStyles('3rem', FontWeight.MEDIUM),
    title5: createTitleStyles('3rem', FontWeight.ROMAN),
    title6: createTitleStyles('2.5rem', FontWeight.MEDIUM),
    title7: createTitleStyles('2rem', FontWeight.MEDIUM),
    title8: createTitleStyles('2rem', FontWeight.ROMAN),
  },
  body: {
    body1: createBodyStyles('1.125rem', FontWeight.ROMAN),
    body2: createBodyStyles('1.125rem', FontWeight.BOLD),
    body3: createBodyStyles('1rem', FontWeight.ROMAN),
    body4: createBodyStyles('1rem', FontWeight.BOLD),
    body5: createBodyStyles('0.875rem', FontWeight.ROMAN),
    body6: createBodyStyles('0.875rem', FontWeight.BOLD),
    body7: createBodyStyles('0.75rem', FontWeight.ROMAN),
    body8: createBodyStyles('0.75rem', FontWeight.BOLD),
  },
  button: {
    buttonL: createButtonStyles('1rem'),
    buttonM: createButtonStyles('0.875rem'),
    buttonS: createButtonStyles('0.75rem'),
  },
  links: {
    link2XL: createLinkStyles('3rem'),
    linkXL: createLinkStyles('1.5rem'),
    linkL: createLinkStyles('1rem'),
    linkM: createLinkStyles('0.875rem'),
    linkS: createLinkStyles('0.75rem'),
  },
};

export const smallDesktop = {
  header: {
    h1: createHeaderStyles('1.5rem', FontWeight.MEDIUM),
    h2: createHeaderStyles('1.5rem', FontWeight.ROMAN),
    h3: createHeaderStyles('1.25rem', FontWeight.MEDIUM),
    h4: createHeaderStyles('1.125rem', FontWeight.MEDIUM),
    h5: createHeaderStyles('1.125rem', FontWeight.ROMAN),
    h6: createHeaderStyles('1rem', FontWeight.MEDIUM),
    h7: createHeaderStyles('1rem', FontWeight.ROMAN),
    h8: createHeaderStyles('0.875rem', FontWeight.MEDIUM),
  },
  title: {
    title1: createTitleStyles('4rem', FontWeight.MEDIUM),
    title2: createTitleStyles('3.5rem', FontWeight.MEDIUM),
    title3: createTitleStyles('3rem', FontWeight.MEDIUM),
    title4: createTitleStyles('2.5rem', FontWeight.MEDIUM),
    title5: createTitleStyles('2.5rem', FontWeight.ROMAN),
    title6: createTitleStyles('2rem', FontWeight.MEDIUM),
    title7: createTitleStyles('1.75rem', FontWeight.MEDIUM),
    title8: createTitleStyles('1.75rem', FontWeight.ROMAN),
  },
  body: {
    body1: createBodyStyles('1rem', FontWeight.ROMAN),
    body2: createBodyStyles('1rem', FontWeight.BOLD),
    body3: createBodyStyles('1rem', FontWeight.ROMAN),
    body4: createBodyStyles('1rem', FontWeight.BOLD),
    body5: createBodyStyles('0.75rem', FontWeight.ROMAN),
    body6: createBodyStyles('0.75rem', FontWeight.BOLD),
    body7: createBodyStyles('0.625rem', FontWeight.ROMAN),
    body8: createBodyStyles('0.625rem', FontWeight.BOLD),
  },
  button: {
    buttonL: createButtonStyles('1rem'),
    buttonM: createButtonStyles('0.875rem'),
    buttonS: createButtonStyles('0.75rem'),
  },
  links: {
    link2XL: createLinkStyles('2.5rem'),
    linkXL: createLinkStyles('1.25rem'),
    linkL: createLinkStyles('1rem'),
    linkM: createLinkStyles('0.875rem'),
    linkS: createLinkStyles('0.75rem'),
  },
};

export const mobile = {
  header: {
    h1: createHeaderStyles('1.25rem', FontWeight.MEDIUM),
    h2: createHeaderStyles('1.25rem', FontWeight.ROMAN),
    h3: createHeaderStyles('1.125rem', FontWeight.MEDIUM),
    h4: createHeaderStyles('1rem', FontWeight.MEDIUM),
    h5: createHeaderStyles('1rem', FontWeight.ROMAN),
    h6: createHeaderStyles('0.875rem', FontWeight.MEDIUM),
    h7: createHeaderStyles('0.875rem', FontWeight.ROMAN),
    h8: createHeaderStyles('0.75rem', FontWeight.MEDIUM),
  },
  title: {
    title1: createTitleStyles('3rem', FontWeight.MEDIUM),
    title2: createTitleStyles('2.5rem', FontWeight.MEDIUM),
    title3: createTitleStyles('2.5rem', FontWeight.MEDIUM),
    title4: createTitleStyles('2rem', FontWeight.MEDIUM),
    title5: createTitleStyles('2rem', FontWeight.ROMAN),
    title6: createTitleStyles('1.75rem', FontWeight.MEDIUM),
    title7: createTitleStyles('1.5rem', FontWeight.MEDIUM),
    title8: createTitleStyles('1.5rem', FontWeight.ROMAN),
  },
  body: {
    body1: createBodyStyles('1rem', FontWeight.ROMAN),
    body2: createBodyStyles('1rem', FontWeight.BOLD),
    body3: createBodyStyles('1rem', FontWeight.ROMAN),
    body4: createBodyStyles('1rem', FontWeight.BOLD),
    body5: createBodyStyles('0.75rem', FontWeight.ROMAN),
    body6: createBodyStyles('0.75rem', FontWeight.BOLD),
    body7: createBodyStyles('0.625rem', FontWeight.ROMAN),
    body8: createBodyStyles('0.625rem', FontWeight.BOLD),
  },
  button: {
    buttonL: createButtonStyles('0.875rem'),
    buttonM: createButtonStyles('0.75rem'),
    buttonS: createButtonStyles('0.625rem'),
  },
  links: {
    link2XL: createLinkStyles('2rem'),
    linkXL: createLinkStyles('1.125rem'),
    linkL: createLinkStyles('0.875rem'),
    linkM: createLinkStyles('0.75rem'),
    linkS: createLinkStyles('0.625rem'),
  },
};
