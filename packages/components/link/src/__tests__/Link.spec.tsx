import { render, screen } from '@testing-library/react';
import Link from '../Link';
import { ThemeProvider } from '@douro-ui/react';

describe('<Link />', () => {
  it('renders correctly with text', () => {
    render(
      <ThemeProvider>
        <Link>This is a link</Link>
      </ThemeProvider>,
    );

    expect(screen.getByText('This is a link')).toBeInTheDocument();
  });

  it('renders with underline', () => {
    render(
      <ThemeProvider>
        <Link underline>This is a link</Link>
      </ThemeProvider>,
    );

    expect(screen.getByText('This is a link')).toHaveStyle(
      'text-decoration: underline',
    );
  });

  it('renders with disabled state', () => {
    render(
      <ThemeProvider>
        <Link aria-disabled="true">This is a link</Link>
      </ThemeProvider>,
    );

    const linkElement = screen.getByText('This is a link');

    expect(linkElement).toHaveStyle('opacity: 0.5');
    expect(linkElement).toHaveStyle('cursor: not-allowed');
    expect(linkElement).toHaveStyle('pointer-events: none');
  });
});
