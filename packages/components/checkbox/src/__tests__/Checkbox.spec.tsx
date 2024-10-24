import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import Checkbox from '../Checkbox';

describe('<Checkbox />', () => {
  it('renders correctly with label', () => {
    render(<Checkbox label="Test Checkbox" value="test" name="checkboxName" />);

    const label = screen.getByText('Test Checkbox');
    const input = label.closest('div')?.querySelector('input');
    expect(input).toBeInTheDocument();
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = jest.fn();

    render(
      <Checkbox
        label="Test Checkbox"
        value="test"
        name="checkboxGroup"
        onChange={handleChange}
      />,
    );

    const label = screen.getByText('Test Checkbox');
    const input = label.closest('div')?.querySelector('input');

    fireEvent.click(input!);
    expect(handleChange).toHaveBeenCalled();
  });

  it('does not call onChange handler when onChange is not provided', () => {
    const handleChange = jest.fn();

    render(
      <Checkbox label="Test Checkbox" value="test" name="checkboxGroup" />,
    );

    const label = screen.getByText('Test Checkbox');
    const input = label.closest('div')?.querySelector('input');

    fireEvent.click(input!);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('is checked when checked prop is passed', () => {
    render(
      <Checkbox
        label="Test Checkbox"
        value="test"
        name="checkboxName"
        checked
      />,
    );

    const label = screen.getByText('Test Checkbox');
    const input = label.closest('div')?.querySelector('input');
    expect(input).toBeChecked();
  });

  it('is disabled when disabled prop is passed', () => {
    render(
      <Checkbox
        label="Test Checkbox"
        value="test"
        name="checkboxName"
        disabled
      />,
    );

    const label = screen.getByText('Test Checkbox');
    const input = label.closest('div')?.querySelector('input');
    expect(input).toBeDisabled();
  });

  it('sets the tabIndex correctly', () => {
    render(
      <Checkbox
        label="Test Checkbox"
        value="test"
        name="checkboxName"
        tabIndex={0}
      />,
    );

    const label = screen.getByText('Test Checkbox');
    const input = label.closest('div')?.querySelector('input');
    expect(input).toHaveAttribute('tabIndex', '0');
  });

  it('does not call onChange handler when disabled is true', () => {
    const handleChange = jest.fn();

    render(
      <Checkbox
        label="Test Checkbox"
        value="test"
        name="checkboxName"
        disabled
        onChange={handleChange}
      />,
    );

    const label = screen.getByText('Test Checkbox');
    const input = label.closest('div')?.querySelector('input');

    fireEvent.click(input!);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('does not call onChange handler when indeterminate is true', () => {
    const handleChange = jest.fn();

    render(
      <Checkbox
        label="Test Checkbox"
        value="test"
        name="checkboxName"
        indeterminate
        onChange={handleChange}
      />,
    );

    const label = screen.getByText('Test Checkbox');
    const input = label.closest('div')?.querySelector('input');

    fireEvent.click(input!);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
