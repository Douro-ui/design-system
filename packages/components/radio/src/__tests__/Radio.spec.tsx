import { fireEvent, render, screen } from '@testing-library/react';
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

  it('is checked when checked prop is passed', () => {
    render(<Radio label="Test Radio" value="test" name="radioName" checked />);

    expect(screen.getByLabelText('Test Radio')).toBeChecked();
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Radio label="Test Radio" value="test" name="radioName" disabled />);

    expect(screen.getByLabelText('Test Radio')).toBeDisabled();
  });

  it('applies background color when provided', () => {
    render(
      <Radio
        label="Test Radio"
        value="test"
        name="radioName"
        backgroundColor="pink"
      />,
    );

    expect(screen.getByLabelText('Test Radio').closest('div')).toHaveStyle(
      'background-color: pink',
    );
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
