import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import BreadcrumbGroup from '../BreadcrumbGroup';

describe('<BreadcrumbGroup>', () => {
  const defaultProps = {
    breadcrumbs: ['Home', 'Category', 'Product'],
    separator: '>',
  };

  it('should update and render breadcrumbs when prop changes from empty to populated', () => {
    const { rerender } = render(<BreadcrumbGroup />);

    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.queryByText('Category')).not.toBeInTheDocument();
    expect(screen.queryByText('Product')).not.toBeInTheDocument();

    const separators = screen.queryAllByText('>');

    expect(separators.length).toBe(0);

    const updatedProps = {
      breadcrumbs: ['Home', 'Category', 'Product'],
    };

    rerender(<BreadcrumbGroup {...updatedProps} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
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
});
