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

  it('renders disabled input', () => {
    render(<Input label={'Name'} disabled />);

    const inputElement = screen.getByText('Name');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.parentElement).toHaveStyle('border: none');
    expect(inputElement.parentElement).toHaveStyle('opacity: 0.5');
    expect(inputElement.parentElement).toHaveStyle('pointer-events: none');
  });
});
