import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import CheckboxGroup from '../CheckboxGroup';
import { CheckboxProps } from '../checkbox.types';

describe('<CheckboxGroup />', () => {
  const options = [
    { label: 'Checkbox 1', value: 'checkbox1', tabIndex: 0 },
    { label: 'Checkbox 2', value: 'checkbox2' },
    { label: 'Checkbox 3', value: 'checkbox3', disabled: true },
  ];

  it('renders correctly with all options', () => {
    render(<CheckboxGroup name="checkboxGroup" options={options} />);

    options.forEach((option: CheckboxProps) => {
      const label = screen.getByText(option.label);
      const input = label.closest('div')?.querySelector('input');
      expect(input).toBeInTheDocument();
    });
  });

  it('calls onChange handler with correct value when a checkbox is selected', () => {
    const handleChange = jest.fn();

    render(
      <CheckboxGroup
        name="checkboxGroup"
        options={options}
        onChange={handleChange}
      />,
    );

    const label = screen.getByText('Checkbox 1');
    const input = label.closest('div')?.querySelector('input');

    fireEvent.click(input!);
    expect(handleChange).toHaveBeenCalledWith('checkbox1');
  });

  it('does not call onChange handler when onChange is not provided', () => {
    const handleChange = jest.fn();

    render(<CheckboxGroup name="checkboxGroup" options={options} />);

    const label = screen.getByText('Checkbox 1');
    const input = label.closest('div')?.querySelector('input');

    fireEvent.click(input!);
    expect(handleChange).not.toHaveBeenCalledWith('checkbox1');
  });

  it('checks the correct checkbox button', () => {
    render(
      <CheckboxGroup
        name="checkboxGroup"
        options={options}
        selectedValues={['checkbox1']}
      />,
    );

    const label1 = screen.getByText('Checkbox 1');
    const input1 = label1.closest('div')?.querySelector('input');
    expect(input1).toBeChecked();

    const label2 = screen.getByText('Checkbox 2');
    const input2 = label2.closest('div')?.querySelector('input');
    expect(input2).not.toBeChecked();

    const label3 = screen.getByText('Checkbox 3');
    const input3 = label3.closest('div')?.querySelector('input');
    expect(input3).not.toBeChecked();
  });

  it('disables the correct checkbox button', () => {
    render(<CheckboxGroup name="checkboxGroup" options={options} />);

    const label1 = screen.getByText('Checkbox 1');
    const input1 = label1.closest('div')?.querySelector('input');
    expect(input1).not.toBeDisabled();

    const label2 = screen.getByText('Checkbox 2');
    const input2 = label2.closest('div')?.querySelector('input');
    expect(input2).not.toBeDisabled();

    const label3 = screen.getByText('Checkbox 3');
    const input3 = label3.closest('div')?.querySelector('input');
    expect(input3).toBeDisabled();
  });

  it('renders the error message when error is passed', () => {
    render(
      <CheckboxGroup
        name="checkboxGroup"
        options={options}
        error="This is an error"
      />,
    );

    const errorMessage = screen.getByText('This is an error');
    expect(errorMessage).toBeInTheDocument();
  });
});
