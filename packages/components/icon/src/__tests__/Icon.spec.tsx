import { screen, render } from '../../../../../tests/test-utils';
import Icon from '../Icon';

jest.mock('../../../../svg-icons', () => ({
  icons: {
    'chevron-down': () => <svg data-testid="chevron-down-icon" />,
    'chevron-up': () => <svg data-testid="chevron-up-icon" />,
    close: () => <svg data-testid="close-icon" />,
  },
}));

describe('<Icon />', () => {
  it('should render the chevron-up icon with default size', () => {
    render(
      <Icon name="chevron-up" styled={{ width: '1rem', height: '1rem' }} />,
    );

    const iconElement = screen.getByTestId('chevron-up-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle('width: 1rem; height: 1rem');
  });

  it('should render the chevron-down icon', () => {
    render(
      <Icon name="chevron-down" styled={{ width: '1rem', height: '1rem' }} />,
    );

    const iconElement = screen.getByTestId('chevron-down-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle('width: 1rem; height: 1rem');
  });
});
