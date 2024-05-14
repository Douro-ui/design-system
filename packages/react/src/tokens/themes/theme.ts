import { defaultPalette } from "../palettes";
import { Breakpoints, FontWeight } from "./theme.constants";

export const spaceUnit = 1;
const fontSize = 1;
const fontFamily = "neue-haas-grotesk-display";

export default {
  mode: "light",
  name: "default_theme",
  colors: defaultPalette,
  fontFamily,
  fontSize,
  spaceUnit: {
    'spacing-0': `${spaceUnit * 0}rem`,
    'spacing-04': `${spaceUnit * 0.25}rem`,
    'spacing-06': `${spaceUnit * 0.375}rem`,
    'spacing-08': `${spaceUnit * 0.5}rem`,
    'spacing-12': `${spaceUnit * 0.75}rem`,
    'spacing-16': `${spaceUnit}rem`,
    'spacing-20': `${spaceUnit * 1.25}rem`,
    'spacing-24': `${spaceUnit * 1.5}rem`,
    'spacing-32': `${spaceUnit * 2}rem`,
    'spacing-40': `${spaceUnit * 2.5}rem`,
    'spacing-64': `${spaceUnit * 4}rem`,
    'spacing-80': `${spaceUnit * 5}rem`,
    'spacing-96': `${spaceUnit * 6}rem`,
    'spacing-120': `${spaceUnit * 8}rem`,
    'spacing-160': `${spaceUnit * 10}rem`,
  },
  typography: {
    [`${Breakpoints.XXXL}`]: {
      header: {
        h1: {
          fontSize: "1.75rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        },
        h2: {
          fontSize: "1.75rem",
          fontWeight: FontWeight.ROMAN,
          lineHeight: "120%",
          fontFamily
        },
        h3: {
          fontSize: "1.5rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        },
        h4: {
          fontSize: "1.25rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        },
        h5: {
          fontSize: "1.25rem",
          fontWeight: FontWeight.ROMAN,
          lineHeight: "120%",
          fontFamily
        },
        h6: {
          fontSize: "1.125rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        },
        h7: {
          fontSize: "1rem",
          fontWeight: FontWeight.ROMAN,
          lineHeight: "120%",
          fontFamily
        },
        h8: {
          fontSize: "0.875rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        }
      },
      title: {
        title1: {
          fontSize: "4.5rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title2: {
          fontSize: "4rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title3: {
          fontSize: "3.5rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title4: {
          fontSize: "3rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title5: {
          fontSize: "3rem",
          lineHeight: "120%",
          fontWeight: FontWeight.ROMAN,
          fontFamily,
        },
        title6: {
          fontSize: "2.5rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title7: {
          fontSize: "2rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title8: {
          fontSize: "2rem",
          lineHeight: "120%",
          fontWeight: FontWeight.ROMAN,
          fontFamily,
        },
      },
      body: {
        body1: {
          fontSize: "1.125rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
        },
        body2: {
          fontSize: "1.125rem",
          lineHeight: "150%",
          fontWeight: FontWeight.BOLD,
          fontFamily: "neue-haas-grotesk-text",
        },
        body3: {
          fontSize: "1rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
        },
        body4: {
          fontSize: "1rem",
          lineHeight: "150%",
          fontWeight: FontWeight.BOLD,
          fontFamily: "neue-haas-grotesk-text",
        },
        body5: {
          fontSize: "0.875rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
        },
        body6: {
          fontSize: "0.875rem",
          lineHeight: "150%",
          fontWeight: FontWeight.BOLD,
          fontFamily: "neue-haas-grotesk-text",
        },
        body7: {
          fontSize: "0.75rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
        },
        body8: {
          fontSize: "0.75rem",
          lineHeight: "150%",
          fontWeight: FontWeight.BOLD,
          fontFamily: "neue-haas-grotesk-text",
        },
      },
      button: {
        buttonL: {
          fontSize: "1rem",
          lineHeight: "100%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily: "neue-haas-grotesk-text",
          '&:hover': {
            textDecoration: 'underline'
          }
        },
        buttonM: {
          fontSize: "0.875rem",
          lineHeight: "100%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily: "neue-haas-grotesk-text",
          '&:hover': {
            textDecoration: 'underline'
          }
        },
        buttonS: {
          fontSize: "0.75rem",
          lineHeight: "100%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily: "neue-haas-grotesk-text",
          '&:hover': {
            textDecoration: 'underline'
          }
        },
      },
      links: {
        link2XL: {
          fontSize: "3rem",
          lineHeight: "120%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
        linkXL: {
          fontSize: "1.5rem",
          lineHeight: "120%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
        linkL: {
          fontSize: "1rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
        linkM: {
          fontSize: "0.875rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
        linkS: {
          fontSize: "0.75rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
      },
    },
    [`${Breakpoints.XXL}, ${Breakpoints.XL}, ${Breakpoints.LG} `]: {
      header: {
        h1: {
          fontSize: "1.5rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        },
        h2: {
          fontSize: "1.5rem",
          fontWeight: FontWeight.ROMAN,
          lineHeight: "120%",
          fontFamily
        },
        h3: {
          fontSize: "1.25rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        },
        h4: {
          fontSize: "1.125rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        },
        h5: {
          fontSize: "1.125rem",
          fontWeight: FontWeight.ROMAN,
          lineHeight: "120%",
          fontFamily
        },
        h6: {
          fontSize: "1rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        },
        h7: {
          fontSize: "1rem",
          fontWeight: FontWeight.ROMAN,
          lineHeight: "120%",
          fontFamily
        },
        h8: {
          fontSize: "0.875rem",
          fontWeight: FontWeight.MEDIUM,
          lineHeight: "120%",
          fontFamily
        }
      },
      title: {
        title1: {
          fontSize: "4rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title2: {
          fontSize: "3.5rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title3: {
          fontSize: "3rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title4: {
          fontSize: "2.5rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title5: {
          fontSize: "2.5rem",
          lineHeight: "120%",
          fontWeight: FontWeight.ROMAN,
          fontFamily,
        },
        title6: {
          fontSize: "2rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title7: {
          fontSize: "1.75rem",
          lineHeight: "120%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily,
        },
        title8: {
          fontSize: "1.75rem",
          lineHeight: "120%",
          fontWeight: FontWeight.ROMAN,
          fontFamily,
        },
      },
      body: {
        body1: {
          fontSize: "1rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
        },
        body2: {
          fontSize: "1rem",
          lineHeight: "150%",
          fontWeight: FontWeight.BOLD,
          fontFamily: "neue-haas-grotesk-text",
        },
        body3: {
          fontSize: "1rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
        },
        body4: {
          fontSize: "1rem",
          lineHeight: "150%",
          fontWeight: FontWeight.BOLD,
          fontFamily: "neue-haas-grotesk-text",
        },
        body5: {
          fontSize: "0.75rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
        },
        body6: {
          fontSize: "0.75rem",
          lineHeight: "150%",
          fontWeight: FontWeight.BOLD,
          fontFamily: "neue-haas-grotesk-text",
        },
        body7: {
          fontSize: "0.625rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
        },
        body8: {
          fontSize: "0.625rem",
          lineHeight: "150%",
          fontWeight: FontWeight.BOLD,
          fontFamily: "neue-haas-grotesk-text",
        },
      },
      button: {
        buttonL: {
          fontSize: "1rem",
          lineHeight: "100%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily: "neue-haas-grotesk-text",
          '&:hover': {
            textDecoration: 'underline'
          }
        },
        buttonM: {
          fontSize: "0.875rem",
          lineHeight: "100%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily: "neue-haas-grotesk-text",
          '&:hover': {
            textDecoration: 'underline'
          }
        },
        buttonS: {
          fontSize: "0.75rem",
          lineHeight: "100%",
          fontWeight: FontWeight.MEDIUM,
          fontFamily: "neue-haas-grotesk-text",
          '&:hover': {
            textDecoration: 'underline'
          }
        },
      },
      links: {
        link2XL: {
          fontSize: "2.5rem",
          lineHeight: "120%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
        linkXL: {
          fontSize: "1.25rem",
          lineHeight: "120%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
        linkL: {
          fontSize: "1rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
        linkM: {
          fontSize: "0.875rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
        linkS: {
          fontSize: "0.75rem",
          lineHeight: "150%",
          fontWeight: FontWeight.ROMAN,
          fontFamily: "neue-haas-grotesk-text",
          '&:active': {
            fontWeight: FontWeight.MEDIUM,
          }
        },
      },
    },
    [`${Breakpoints.MD}, ${Breakpoints.IOS_MD}, ${Breakpoints.ANDROID_XS}, ${Breakpoints.IOS_XS}`]: {
    header: {
      h1: {
        fontSize: "1.25rem",
        fontWeight: FontWeight.MEDIUM,
        lineHeight: "120%",
        fontFamily
      },
      h2: {
        fontSize: "1.25rem",
        fontWeight: FontWeight.ROMAN,
        lineHeight: "120%",
        fontFamily
      },
      h3: {
        fontSize: "1.125rem",
        fontWeight: FontWeight.MEDIUM,
        lineHeight: "120%",
        fontFamily
      },
      h4: {
        fontSize: "1rem",
        fontWeight: FontWeight.MEDIUM,
        lineHeight: "120%",
        fontFamily
      },
      h5: {
        fontSize: "1rem",
        fontWeight: FontWeight.ROMAN,
        lineHeight: "120%",
        fontFamily
      },
      h6: {
        fontSize: "0.875rem",
        fontWeight: FontWeight.MEDIUM,
        lineHeight: "120%",
        fontFamily
      },
      h7: {
        fontSize: "0.875rem",
        fontWeight: FontWeight.ROMAN,
        lineHeight: "120%",
        fontFamily
      },
      h8: {
        fontSize: "0.75rem",
        fontWeight: FontWeight.MEDIUM,
        lineHeight: "120%",
        fontFamily
      }
    },
    title: {
      title1: {
        fontSize: "3rem",
        lineHeight: "120%",
        fontWeight: FontWeight.MEDIUM,
        fontFamily,
      },
      title2: {
        fontSize: "2.5rem",
        lineHeight: "120%",
        fontWeight: FontWeight.MEDIUM,
        fontFamily,
      },
      title3: {
        fontSize: "2.5rem",
        lineHeight: "120%",
        fontWeight: FontWeight.MEDIUM,
        fontFamily,
      },
      title4: {
        fontSize: "2rem",
        lineHeight: "120%",
        fontWeight: FontWeight.MEDIUM,
        fontFamily,
      },
      title5: {
        fontSize: "2rem",
        lineHeight: "120%",
        fontWeight: FontWeight.ROMAN,
        fontFamily,
      },
      title6: {
        fontSize: "1.75rem",
        lineHeight: "120%",
        fontWeight: FontWeight.MEDIUM,
        fontFamily,
      },
      title7: {
        fontSize: "1.5rem",
        lineHeight: "120%",
        fontWeight: FontWeight.MEDIUM,
        fontFamily,
      },
      title8: {
        fontSize: "1.5rem",
        lineHeight: "120%",
        fontWeight: FontWeight.ROMAN,
        fontFamily,
      },
    },
    body: {
      body1: {
        fontSize: "1rem",
        lineHeight: "150%",
        fontWeight: FontWeight.ROMAN,
        fontFamily: "neue-haas-grotesk-text",
      },
      body2: {
        fontSize: "1rem",
        lineHeight: "150%",
        fontWeight: FontWeight.BOLD,
        fontFamily: "neue-haas-grotesk-text",
      },
      body3: {
        fontSize: "1rem",
        lineHeight: "150%",
        fontWeight: FontWeight.ROMAN,
        fontFamily: "neue-haas-grotesk-text",
      },
      body4: {
        fontSize: "1rem",
        lineHeight: "150%",
        fontWeight: FontWeight.BOLD,
        fontFamily: "neue-haas-grotesk-text",
      },
      body5: {
        fontSize: "0.75rem",
        lineHeight: "150%",
        fontWeight: FontWeight.ROMAN,
        fontFamily: "neue-haas-grotesk-text",
      },
      body6: {
        fontSize: "0.75rem",
        lineHeight: "150%",
        fontWeight: FontWeight.BOLD,
        fontFamily: "neue-haas-grotesk-text",
      },
      body7: {
        fontSize: "0.625rem",
        lineHeight: "150%",
        fontWeight: FontWeight.ROMAN,
        fontFamily: "neue-haas-grotesk-text",
      },
      body8: {
        fontSize: "0.625rem",
        lineHeight: "150%",
        fontWeight: FontWeight.BOLD,
        fontFamily: "neue-haas-grotesk-text",
      },
    },
    button: {
      buttonL: {
        fontSize: "0.875rem",
        lineHeight: "100%",
        fontWeight: FontWeight.MEDIUM,
        fontFamily: "neue-haas-grotesk-text",
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      buttonM: {
        fontSize: "0.75rem",
        lineHeight: "100%",
        fontWeight: FontWeight.MEDIUM,
        fontFamily: "neue-haas-grotesk-text",
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      buttonS: {
        fontSize: "0.625rem",
        lineHeight: "100%",
        fontWeight: FontWeight.MEDIUM,
        fontFamily: "neue-haas-grotesk-text",
        '&:hover': {
          textDecoration: 'underline'
        }
      },
    },
    links: {
      link2XL: {
        fontSize: "2rem",
        lineHeight: "120%",
        fontWeight: FontWeight.ROMAN,
        fontFamily: "neue-haas-grotesk-text",
        '&:active': {
          fontWeight: FontWeight.MEDIUM,
        }
      },
      linkXL: {
        fontSize: "1.125rem",
        lineHeight: "120%",
        fontWeight: FontWeight.ROMAN,
        fontFamily: "neue-haas-grotesk-text",
        '&:active': {
          fontWeight: FontWeight.MEDIUM,
        }
      },
      linkL: {
        fontSize: "0.875rem",
        lineHeight: "150%",
        fontWeight: FontWeight.ROMAN,
        fontFamily: "neue-haas-grotesk-text",
        '&:active': {
          fontWeight: FontWeight.MEDIUM,
        }
      },
      linkM: {
        fontSize: "0.75rem",
        lineHeight: "150%",
        fontWeight: FontWeight.ROMAN,
        fontFamily: "neue-haas-grotesk-text",
        '&:active': {
          fontWeight: FontWeight.MEDIUM,
        }
      },
      linkS: {
        fontSize: "0.625rem",
        lineHeight: "150%",
        fontWeight: FontWeight.ROMAN,
        fontFamily: "neue-haas-grotesk-text",
        '&:active': {
          fontWeight: FontWeight.MEDIUM,
        }
      },
    },
  },
},
  breakpoints: {
    [Breakpoints.ANDROID_XS]: 375,
    [Breakpoints.IOS_XS]: 360,
    [Breakpoints.IOS_MD]: 576,
    [Breakpoints.XXXL]: 1900,
    [Breakpoints.XXL]: 1400,
    [Breakpoints.XL]: 1200,
    [Breakpoints.LG]: 900,
    [Breakpoints.MD]: 700,
  }
};