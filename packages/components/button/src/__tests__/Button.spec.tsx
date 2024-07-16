import { render, screen } from '@testing-library/react';
import Button from '../Button';
import { ThemeProvider } from '@douro-ui/react';

describe('<Button />', () => {
  it('should render properly', () => {
    render(
      <ThemeProvider>
        <Button label="Foo" />
      </ThemeProvider>,
    );

    expect(screen.getByText('Foo')).toBeInTheDocument();
  });
});
