import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '../Checkbox';

describe('<Checkbox />', () => {
  it('renders correctly with label', () => {
    render(<Checkbox label="Test Checkbox" value="test" name="checkboxName" />);

    expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = jest.fn();

    render(<Checkbox label="Test Checkbox" value="test" name="checkboxName" onChange={handleChange} />);

    fireEvent.click(screen.getByLabelText('Test Checkbox'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('is checked when checked prop is passed', () => {
    render(<Checkbox label="Test Checkbox" value="test" name="checkboxName" checked />);

    expect(screen.getByLabelText('Test Checkbox')).toBeChecked();
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Checkbox label="Test Checkbox" value="test" name="checkboxName" disabled />);

    expect(screen.getByLabelText('Test Checkbox')).toBeDisabled();
  });

  it('is the checkbox circle when isChecked prop is passed as true', () => {
    render(<Checkbox label="Test Checkbox" value="test" name="checkboxName" isCircle={true} />);

    expect(screen.getByLabelText('Test Checkbox')).toHaveStyle('border-radius: 50%');
  });

  it('sets the tabIndex correctly', () => {
    render(<Checkbox label="Test Checkbox" value="test" name="checkboxName" tabIndex={0} />);

    expect(screen.getByLabelText('Test Checkbox')).toHaveAttribute('tabIndex', '0');
  });
});