import { fireEvent, render, screen } from '@testing-library/react';
import CheckboxGroup from '../CheckboxGroup';

describe('<CheckboxGroup />', () => {
  const options = [
    { label: 'Checkbox 1', value: 'checkbox1', role: 'checkbox' },
    { label: 'Checkbox 2', value: 'checkbox2' },
    { label: 'Checkbox 3', value: 'checkbox3', disabled: true },
  ];

  it('renders correctly with all options', () => {
    render(<CheckboxGroup name="checkboxGroup" options={options} />);

    options.forEach(option => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
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

    fireEvent.click(screen.getByLabelText('Checkbox 1'));

    expect(handleChange).toHaveBeenCalledWith(['checkbox1']);
  });

  it('checks the correct checkbox button', () => {
    render(
      <CheckboxGroup
        name="checkboxGroup"
        options={options}
        selectedValues={['checkbox1', 'checkbox2']}
      />,
    );

    expect(screen.getByLabelText('Checkbox 1')).toBeChecked();
    expect(screen.getByLabelText('Checkbox 2')).toBeChecked();
    expect(screen.getByLabelText('Checkbox 3')).not.toBeChecked();
  });

  it('disables the correct checkbox button', () => {
    render(<CheckboxGroup name="checkboxGroup" options={options} />);

    expect(screen.getByLabelText('Checkbox 1')).not.toBeDisabled();
    expect(screen.getByLabelText('Checkbox 2')).not.toBeDisabled();
    expect(screen.getByLabelText('Checkbox 3')).toBeDisabled();
  });

  it('sets the role correctly', () => {
    render(<CheckboxGroup name="checkboxGroup" options={options} />);

    expect(screen.getByLabelText('Checkbox 1')).toHaveAttribute(
      'role',
      'checkbox',
    );
  });
});
