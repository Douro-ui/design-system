import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import BreadcrumbGroup from '../BreadcrumbGroup';

describe('<BreadcrumbGroup>', () => {
  const defaultProps = {
    breadcrumbs: ['Home', 'Category', 'Product'],
    separator: '>',
  };

  it('should render children correctly', () => {
    render(<BreadcrumbGroup {...defaultProps} />);

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
