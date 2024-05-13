import { Global, css } from '@emotion/react';

const globalStyles = css`
  body {
    font-family: 'Arial, sans-serif';
    margin: 0;
    padding: 0;
    color: #484848;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const GlobalStyles = () => (
  <Global
    styles={globalStyles}
  />
);
