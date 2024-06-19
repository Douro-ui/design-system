import { fireEvent, render, screen } from '@testing-library/react';
import RadioGroup from '../RadioGroup';

describe('<RadioGroup />', () => {
  const options = [
    { label: 'Radio 1', value: 'radio1', tabIndex: 0 },
    { label: 'Radio 2', value: 'radio2' },
    { label: 'Radio 3', value: 'radio3', disabled: true },
  ];

  it('renders correctly with all options', () => {
    render(<RadioGroup name="radioGroup" options={options} />);

    options.forEach(option => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  it('calls onChange handler with correct value when a radio is selected', () => {
    const handleChange = jest.fn();

    render(<RadioGroup name="radioGroup" options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByLabelText('Radio 1'));

    expect(handleChange).toHaveBeenCalledWith('radio1');
  });

  it('checks the correct radio button', () => {
    render(<RadioGroup name="radioGroup" options={options} selectedValue="radio2" />);

    expect(screen.getByLabelText('Radio 2')).toBeChecked();
  });

  it('disables the correct radio button', () => {
    render(<RadioGroup name="radioGroup" options={options} />);

    expect(screen.getByLabelText('Radio 3')).toBeDisabled();
  });

  it('sets the tabIndex correctly', () => {
    render(<RadioGroup name="radioGroup" options={options} />);
    
    expect(screen.getByLabelText('Radio 1')).toHaveAttribute('tabIndex', '0');
  });
});
