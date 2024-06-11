import { render } from '@testing-library/react';
import { useTheme } from '../../hooks';
import { defaultTheme } from '../../tokens';
import { ThemeProvider } from '../../context/ThemeProvider';
import { Theme } from '../../tokens/themes/theme.types';
import { FontWeight } from '../../tokens/themes/theme.constants';

const MergeTest = () => {
  const theme = useTheme();
  return (
    <div
      data-testid="component"
      style={{
        fontSize: theme.typography.heading.h1.desktop.fontSize,
      }}
    >
      Hey I'm a test
    </div>
  );
};

describe('Test to check the defaultTheme values', () => {
  it('should render my defaultTheme value', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <MergeTest />
      </ThemeProvider>,
    );

    const component = getByTestId('component');
    expect(component).toHaveStyle('font-size: 1.5rem');
  });

  it('should render my newTheme value and check if it no replaced all object', () => {
    const newTheme: Partial<Theme> = {
      typography: {
        heading: {
          h1: {
            desktop: {
              fontSize: '3.5rem',
              fontWeight: FontWeight.BOLDER,
              lineHeight: '150%',
            },
          },
          h2: {
            desktop: {
              fontSize: '3rem',
              fontWeight: FontWeight.BOLDER,
              lineHeight: '150%',
            },
          },
          h3: {
            desktop: {
              fontSize: '2.75rem',
              fontWeight: FontWeight.BOLD,
              lineHeight: '150%',
            },
          },
        },
        body: {
          body1: {
            desktop: {
              fontSize: '1.45rem',
              fontWeight: FontWeight.MEDIUM,
              lineHeight: '135%',
            },
          },
          body2: {
            desktop: {
              fontSize: '1.25rem',
              fontWeight: FontWeight.MEDIUM,
              lineHeight: '135%',
            },
          },
          body3: {
            desktop: {
              fontSize: '1.125rem',
              fontWeight: FontWeight.MEDIUM,
              lineHeight: '135%',
            },
          },
        },
      },
      colors: {
        brand: {
          primary: 'pink',
          secondary: 'red',
          tertiary: 'blue',
        },
      },
      breakpoints: {
        mobile: 480,
        tablet: 768,
        desktop: 1024,
        desktopLarge: 1920,
      },
    };

    const { getByTestId } = render(
      <ThemeProvider theme={newTheme}>
        <MergeTest />
      </ThemeProvider>,
    );

    const childElement = getByTestId('component');
    expect(childElement).toHaveStyle('font-size: 3.5rem');
  });
});
