import { render, screen } from '../../../../../tests/test-utils';
import Link from '../Link';

describe('<Link />', () => {
  it('renders correctly with text', () => {
    render(<Link size="sm">This is a link</Link>);

    expect(screen.getByText('This is a link')).toBeInTheDocument();
  });

  it('renders with underline', () => {
    render(
      <Link size="md" isUnderline>
        This is a link
      </Link>,
    );

    expect(screen.getByText('This is a link')).toHaveStyle(
      'text-decoration: underline',
    );
  });

  it('renders with disabled state', () => {
    render(
      <Link size="lg" isDisabled>
        This is a link
      </Link>,
    );

    const linkElement = screen.getByText('This is a link');

    expect(linkElement).toHaveStyle('cursor: not-allowed');
    expect(linkElement).toHaveStyle('pointer-events: none');
  });

  it('should render the large link with icon after the children', () => {
    render(
      <Link size="xl" iconAfter={() => <div data-testid="after-icon">❌</div>}>
        This is a link
      </Link>,
    );

    const linkElement = screen.getByText('This is a link');
    const afterIcon = screen.getByTestId('after-icon');

    expect(linkElement).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });

  it('should render the extra large link with icon before the children', () => {
    render(
      <Link
        size="xl"
        iconBefore={() => <div data-testid="before-icon">❌</div>}
      >
        This is a link
      </Link>,
    );

    const linkElement = screen.getByText('This is a link');
    const beforeIcon = screen.getByTestId('before-icon');

    expect(linkElement).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
  });
});
