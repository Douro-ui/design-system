import { fireEvent, render, screen } from '../../../../../tests/test-utils';
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
    render(<Textarea label={'Description'} isDisabled />);

    const textareaElement = screen.getByText('Description');

    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.parentElement).toHaveStyle('opacity: 0.9');
    expect(textareaElement.parentElement).toHaveStyle('pointer-events: none');
  });

  it('displays character count when typing', () => {
    render(
      <Textarea
        label={'Description'}
        placeholder={'Placeholder'}
        maxLength={100}
        hasCharacterCount
      />,
    );

    expect(screen.getByText('0/100')).toBeInTheDocument();

    const textareaElement = screen.getByRole('textbox');

    fireEvent.change(textareaElement, { target: { value: 'Hello' } });

    expect(screen.getByText('5/100')).toBeInTheDocument();
  });

  it('displays required indicator when isRequired is true', () => {
    render(<Textarea label="Description" isRequired />);

    expect(screen.getByText('*')).toBeInTheDocument();

    const textareaElement = screen.getByRole('textbox');

    expect(textareaElement).toBeRequired();
  });
});
