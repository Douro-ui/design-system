import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import Radio from '../Radio';

describe('<Radio />', () => {
  it('renders correctly with label', () => {
    render(<Radio label="Test Radio" value="test" name="radioName" />);

    expect(screen.getByLabelText('Test Radio')).toBeInTheDocument();
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = jest.fn();

    render(
      <Radio
        label="Test Radio"
        value="test"
        name="radioGroup"
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByLabelText('Test Radio'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('does not call onChange handler when onChange is not provided', () => {
    const handleChange = jest.fn();

    render(<Radio label="Test Radio" value="test" name="radioGroup" />);

    fireEvent.click(screen.getByLabelText('Test Radio'));

    expect(handleChange).not.toHaveBeenCalled();
  });
  it('it is checked when checked prop is passed', () => {
    render(<Radio label="Test Radio" value="test" name="radioName" checked />);

    expect(screen.getByLabelText('Test Radio')).toBeChecked();
  });

  it('it is disabled when disabled prop is passed', () => {
    render(<Radio label="Test Radio" value="test" name="radioName" disabled />);

    expect(screen.getByLabelText('Test Radio')).toBeDisabled();
  });

  it('sets the tabIndex correctly', () => {
    render(
      <Radio label="Test Radio" value="test" name="radioName" tabIndex={0} />,
    );

    expect(screen.getByLabelText('Test Radio')).toHaveAttribute(
      'tabIndex',
      '0',
    );
  });
});
