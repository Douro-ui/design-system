import { render } from '@testing-library/react';
import { ThemeProvider } from '../ThemeProvider';
import { useTheme } from '../../hooks';
import { defaultTheme, FontWeight } from '../../tokens';


const TestComponent = () => {
    const theme = useTheme()
    return (
            <div
                data-testid="testComponent"
                style={{ 
                    color:theme?.colors?.brand?.primary, 
                    fontSize: theme?.typography?.xxxl?.body?.body1?.fontSize,
                    fontFamily: theme?.fontFamily,
                    fontWeight: theme?.typography?.xxxl?.body?.body1?.fontWeight
                }
                    }>
                Hello World
            </div>
    );
    
};
describe('ThemeProvider', () => {
    it('should render children with default theme styles applied', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={defaultTheme}>
                <TestComponent />
            </ThemeProvider>
        );

        const childElement = getByTestId('testComponent');
        expect(childElement).toHaveStyle('color: #0B1F2F');
        expect(childElement).toHaveStyle('font-size: 1.125rem');
    });

    it('should merge provided theme with default theme and apply merged styles', () => {
        const newTheme = {
            typography: {
                xxxl: {
                    body: {
                        body1: {
                            fontSize: '4rem',
                        },
                    },
                },
            },
        };

        const { getByTestId } = render(
            <ThemeProvider theme={newTheme}>
                <TestComponent />
            </ThemeProvider>
        );

        const childElement = getByTestId('testComponent');
        expect(childElement).toHaveStyle('font-size: 4rem');
        expect(childElement).toHaveStyle('color: #0B1F2F')
    });

    it('should completely replaces default theme with provided theme', () => {
        const newTheme = {
            colors: {
                brand: {
                    primary: 'pink',
                },
            },
            typography: {
                xxxl: {
                    body: {
                        body1: {
                            fontSize: '3rem',
                            fontWeight: FontWeight.REGULAR
                        },
                    },
                },
            },
        };

        const { getByTestId } = render(
            <ThemeProvider theme={newTheme}>
                <TestComponent />
            </ThemeProvider>
        );

        const childElement = getByTestId('testComponent');   
        expect(childElement).toHaveStyle('color: pink');    
        expect(childElement).not.toHaveStyle('color:#0B1F2F')
        expect(childElement).toHaveStyle('font-weight: 400')
        expect(childElement).toHaveStyle('font-size: 3rem');
    });
});
