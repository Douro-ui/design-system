import { render } from '@testing-library/react';
import { ThemeProvider, theme } from '../ThemeProvider';
 
describe('ThemeProvider', () => {
    it('renders children with provided theme', () => {
        const ChildComponent = () => {
            return (
                <div style={{ color: theme.colors.text, padding: theme.spacing.md }}>
                    Hello, world!
                </div>
            );
        };
 
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <ChildComponent />
            </ThemeProvider>
        );
 
        const childElement = getByText('Hello, world!');
        expect(childElement).toHaveStyle(`color: ${theme.colors.text}`);
        expect(childElement).toHaveStyle(`padding: ${theme.spacing.md}`);
    });
});