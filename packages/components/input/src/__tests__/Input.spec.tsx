import { render, screen } from '../../../../../tests/test-utils';
import Input from '../Input';

describe('<Input />', () => {
  it('renders with label', () => {
    render(<Input label={'Name'} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Input placeholder={'Enter text here'} />);

    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument();
  });
});
