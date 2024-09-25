import { render, screen } from '../../../../../tests/test-utils';
import Textarea from '../Textarea';

describe('<Textarea />', () => {
  it('renders with label', () => {
    render(<Textarea label={'Description'} />);

    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Textarea placeholder={'Enter text here'} />);

    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument();
  });

  it('renders disabled textarea', () => {
    render(<Textarea label={'Description'} disabled />);

    const textareaElement = screen.getByText('Description');

    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.parentElement).toHaveStyle('opacity: 0.5');
    expect(textareaElement.parentElement).toHaveStyle('pointer-events: none');
  });
});
