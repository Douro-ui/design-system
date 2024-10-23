import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import BreadcrumbGroup from '../BreadcrumbGroup';

describe('<BreadcrumbGroup>', () => {
  const defaultProps = {
    breadcrumbs: ['Home', 'Category', 'Product'],
    separator: '>',
  };

  it('should render empty breadcrumbs', () => {
    render(<BreadcrumbGroup breadcrumbs={[]} />);

    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.queryByText('Category')).not.toBeInTheDocument();
    expect(screen.queryByText('Product')).not.toBeInTheDocument();

    const separators = screen.queryAllByText('>');

    expect(separators.length).toBe(0);
  });

  it('should render the  breadcrumbs', () => {
    render(<BreadcrumbGroup {...defaultProps} />);

    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Category')).toBeInTheDocument();
    expect(screen.queryByText('Product')).toBeInTheDocument();
  });

  it('should render the separator between breadcrumbs', () => {
    render(<BreadcrumbGroup {...defaultProps} />);

    const separators = screen.getAllByText('>');

    expect(separators.length).toBe(2);
  });

  it('should call onClick for the correct breadcrumb', () => {
    const handleClick = jest.fn();

    render(<BreadcrumbGroup {...defaultProps} onClick={handleClick} />);

    fireEvent.click(screen.getByText('Home'));

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Category')).not.toBeInTheDocument();
    expect(screen.queryByText('Product')).not.toBeInTheDocument();
  });

  it('should display mobile version', () => {
    const originalInnerWidth = window.innerWidth;
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    render(<BreadcrumbGroup {...defaultProps} />);

    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.queryByText('Product')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Category'));

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Category')).not.toBeInTheDocument();
    expect(screen.queryByText('Product')).not.toBeInTheDocument();

    window.innerWidth = originalInnerWidth;
    window.dispatchEvent(new Event('resize'));
  });

  it('should trigger ellipsis', () => {
    const breadcrumbs = ['Home', '...', 'Product', 'Detail'];

    render(
      <BreadcrumbGroup breadcrumbs={breadcrumbs} lastVisibleBreadcrumbs={2} />,
    );

    const ellipsis = screen.getByText('...');
    expect(ellipsis).toBeInTheDocument();

    fireEvent.click(ellipsis);
  });
});
