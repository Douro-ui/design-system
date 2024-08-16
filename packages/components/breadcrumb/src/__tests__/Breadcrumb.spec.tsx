import { screen, fireEvent, render } from '../../../../../tests/test-utils';
import Breadcrumb from '../Breadcrumb';

describe('<Breadcrumb>', () => {
  it('should render children correctly', () => {
    render(<Breadcrumb>Home</Breadcrumb>);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();

    render(<Breadcrumb onClick={handleClick}>Home</Breadcrumb>);

    fireEvent.click(screen.getByText('Home'));
    expect(handleClick).toHaveBeenCalled();
  });
});
