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
});
