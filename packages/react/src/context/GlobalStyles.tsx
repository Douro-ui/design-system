import { Global } from '@emotion/react';
import { css, cx } from '@emotion/css';
import { fontFamilyDisplay, fontFamilyText } from '../theme/theme.constants';
import { FC } from 'react';

const defaultGlobalStyles = css`
  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
        format('woff'),
      url('https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/2b59e1/00000000000000007735bb53/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/2b59e1/00000000000000007735bb53/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3')
        format('woff'),
      url('https://use.typekit.net/af/2b59e1/00000000000000007735bb53/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: italic;
    font-weight: 400;
  }

  @font-face {
    font-family: ${fontFamilyText};
    src:
      url('https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
        format('woff'),
      url('https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: ${fontFamilyText};
    src:
      url('https://use.typekit.net/af/aed66e/00000000000000007735bb35/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/aed66e/00000000000000007735bb35/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3')
        format('woff'),
      url('https://use.typekit.net/af/aed66e/00000000000000007735bb35/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: italic;
    font-weight: 400;
  }

  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('woff'),
      url('https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/6c4da4/00000000000000007735bb5e/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/6c4da4/00000000000000007735bb5e/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3')
        format('woff'),
      url('https://use.typekit.net/af/6c4da4/00000000000000007735bb5e/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: italic;
    font-weight: 500;
  }

  @font-face {
    font-family: ${fontFamilyText};
    src:
      url('https://use.typekit.net/af/160664/00000000000000007735bb32/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/160664/00000000000000007735bb32/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('woff'),
      url('https://use.typekit.net/af/160664/00000000000000007735bb32/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: ${fontFamilyText};
    src:
      url('https://use.typekit.net/af/fe63ce/00000000000000007735bb4b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/fe63ce/00000000000000007735bb4b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3')
        format('woff'),
      url('https://use.typekit.net/af/fe63ce/00000000000000007735bb4b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: italic;
    font-weight: 500;
  }

  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/153042/00000000000000007735bb62/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/153042/00000000000000007735bb62/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
        format('woff'),
      url('https://use.typekit.net/af/153042/00000000000000007735bb62/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/153042/00000000000000007735bb62/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/153042/00000000000000007735bb62/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
        format('woff'),
      url('https://use.typekit.net/af/153042/00000000000000007735bb62/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/8a7571/00000000000000007735bb67/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/8a7571/00000000000000007735bb67/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3')
        format('woff'),
      url('https://use.typekit.net/af/8a7571/00000000000000007735bb67/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: italic;
    font-weight: 600;
  }

  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/8a7571/00000000000000007735bb67/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/8a7571/00000000000000007735bb67/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3')
        format('woff'),
      url('https://use.typekit.net/af/8a7571/00000000000000007735bb67/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: italic;
    font-weight: 600;
  }

  @font-face {
    font-family: ${fontFamilyText};
    src:
      url('https://use.typekit.net/af/305037/00000000000000007735bb39/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/305037/00000000000000007735bb39/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
        format('woff'),
      url('https://use.typekit.net/af/305037/00000000000000007735bb39/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: ${fontFamilyText};
    src:
      url('https://use.typekit.net/af/68a7c6/00000000000000007735bb3d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/68a7c6/00000000000000007735bb3d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3')
        format('woff'),
      url('https://use.typekit.net/af/68a7c6/00000000000000007735bb3d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: italic;
    font-weight: 700;
  }

  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
        format('woff'),
      url('https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: ${fontFamilyDisplay};
    src:
      url('https://use.typekit.net/af/fcc1c9/00000000000000007735bb6c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/fcc1c9/00000000000000007735bb6c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3')
        format('woff'),
      url('https://use.typekit.net/af/fcc1c9/00000000000000007735bb6c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3')
        format('opentype');
    font-display: swap;
    font-stretch: normal;
    font-style: italic;
    font-weight: 700;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body,
  html {
    font-family: ${fontFamilyDisplay};
    height: 100%;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture,
  svg,
  video,
  canvas {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    font-style: italic;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin-block: 0 0;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const GlobalStyles: FC = ({ styles }: { styles?: string }) => {
  return <Global styles={cx([defaultGlobalStyles, styles])} />;
};
