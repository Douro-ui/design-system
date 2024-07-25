import { screen, fireEvent, render } from '../../../../../tests/test-utils';
import Button from '../Button';

describe('<Button>', () => {
  it('should render a clickable primary button', () => {
    const handleClick = jest.fn();
    render(
      <Button
        typeBtn="primary"
        size="lg"
        onClick={handleClick()}
        disabled={false}
      >
        Primary Button
      </Button>,
    );

    const buttonElement = screen.getByTestId('button-primary');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Primary Button');
    expect(buttonElement).toHaveStyle('font-size: 1rem');
    expect(buttonElement).toHaveStyle('padding: 0.5rem 1rem');

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render a disabled secondary button', () => {
    render(
      <Button typeBtn="secondary" size="md" disabled={true}>
        Secondary Button
      </Button>,
    );

    const buttonElement = screen.getByTestId('button-secondary');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Secondary Button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle('font-size: 0.875rem');
    expect(buttonElement).toHaveStyle('padding: 0.5rem 0.875rem');
  });

  it('should render a tertiary button', () => {
    render(
      <Button typeBtn="tertiary" size="sm" disabled={false}>
        Tertiary button
      </Button>,
    );
    const buttonElement = screen.getByTestId('button-tertiary');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Tertiary button');
    expect(buttonElement).toHaveStyle('font-size: 0.75rem');
    expect(buttonElement).toHaveStyle('padding: 0.375rem 0.75rem');
  });

  it('should render an error button', () => {
    render(
      <Button typeBtn="error" size="xl" disabled={false}>
        Error Button
      </Button>,
    );
    const buttonElement = screen.getByTestId('button-error');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Error Button');
    expect(buttonElement).toHaveStyle('font-size: 1rem');
    expect(buttonElement).toHaveStyle('padding: 0.75rem 1.5rem');
  });
});
