import { screen, fireEvent, render } from '../../../../../tests/test-utils';
import Button from '../Button';

describe('<Button>', () => {
  it('should render a primary button if no props passed', () => {
    render(<Button aria-label="Primary Button">Test</Button>);

    expect(screen.getByTestId('button-primary')).toBeInTheDocument();
  });

  it('should render a clickable primary button', () => {
    const handleClick = jest.fn();
    render(
      <Button
        aria-label="Primary Button"
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
      <Button
        aria-label="Secondary Button"
        typeBtn="secondary"
        size="md"
        disabled={true}
      >
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
      <Button
        aria-label="Tertiary Button"
        typeBtn="tertiary"
        size="sm"
        disabled={false}
      >
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
      <Button
        aria-label="Error Button"
        typeBtn="error"
        size="xl"
        disabled={false}
        iconBefore={<div data-testid="before-icon">🔍</div>}
        iconAfter={<div data-testid="after-icon">❌</div>}
      >
        Error Button
      </Button>,
    );
    const buttonElement = screen.getByTestId('button-error');
    const beforeIcon = screen.getByTestId('before-icon');
    const afterIcon = screen.getByTestId('after-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Error Button');
    expect(buttonElement).toHaveStyle('font-size: 1rem');
    expect(buttonElement).toHaveStyle('padding: 0.75rem 1.5rem');
    expect(beforeIcon).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });

  it('should render the small button with icon before the children', () => {
    render(
      <Button
        aria-label="Primary Button"
        size="sm"
        typeBtn="primary"
        iconBefore={<div data-testid="before-icon">🔍</div>}
        iconAfter={<div data-testid="after-icon">❌</div>}
      />,
    );

    const buttonElement = screen.getByTestId('button-primary');
    const beforeIcon = screen.getByTestId('before-icon');
    const afterIcon = screen.getByTestId('after-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });

  it('should render the medium button with icon after the children', () => {
    render(
      <Button
        aria-label="Secondary Button"
        size="md"
        typeBtn="secondary"
        iconBefore={<div data-testid="before-icon">🔍</div>}
        iconAfter={<div data-testid="after-icon">❌</div>}
      />,
    );

    const buttonElement = screen.getByTestId('button-secondary');
    const beforeIcon = screen.getByTestId('before-icon');
    const afterIcon = screen.getByTestId('after-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });

  it('should render the large button with icon before and icon after the children', () => {
    render(
      <Button
        aria-label="Tertiary Button"
        size="lg"
        typeBtn="tertiary"
        iconBefore={<div data-testid="before-icon">🔍</div>}
        iconAfter={<div data-testid="after-icon">❌</div>}
      />,
    );

    const buttonElement = screen.getByTestId('button-tertiary');
    const beforeIcon = screen.getByTestId('before-icon');
    const afterIcon = screen.getByTestId('after-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });
});

describe('Accessible <Button> tests', () => {
  it('should render with aria-label, and aria-disabled attributes', () => {
    render(
      <Button
        aria-label="Accessible Button"
        typeBtn="primary"
        size="md"
        disabled={false}
        aria-pressed="false"
      >
        Accessible Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Accessible Button/i,
    });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('aria-label', 'Accessible Button');
    expect(buttonElement).toHaveAttribute('aria-disabled', 'false');
  });

  it('should have focus outline visible when focused', () => {
    render(
      <Button aria-label="Focusable Button" typeBtn="primary" size="md">
        Focusable Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Focusable Button/i,
    });
    buttonElement.focus();

    expect(buttonElement).toHaveFocus();
  });

  it('should manage focus and maintain keyboard accessibility for interactive elements', () => {
    render(
      <Button aria-label="Interactive Button" typeBtn="primary" size="md">
        Interactive Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Interactive Button/i,
    });
    buttonElement.focus();

    expect(buttonElement).toHaveFocus();
    fireEvent.keyDown(buttonElement, { key: 'Enter' });
    expect(buttonElement).toHaveAttribute('tabindex', '0');
  });

  it('should activate on Enter and Space keys when not disabled on Primary button', () => {
    const handleClick = jest.fn();
    render(
      <Button
        aria-label="Keyboard Accessible Button"
        typeBtn="primary"
        size="md"
        onClick={handleClick}
      >
        Keyboard Accessible Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Keyboard Accessible Button/i,
    });

    fireEvent.keyDown(buttonElement, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(buttonElement, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should activate on Enter and Space keys when not disabled on Secondary button', () => {
    const handleClick = jest.fn();
    render(
      <Button
        aria-label="Keyboard Accessible Button"
        typeBtn="secondary"
        size="md"
        onClick={handleClick}
      >
        Keyboard Accessible Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Keyboard Accessible Button/i,
    });

    fireEvent.keyDown(buttonElement, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(buttonElement, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should activate on Enter and Space keys when not disabled on Tertiary button', () => {
    const handleClick = jest.fn();
    render(
      <Button
        aria-label="Keyboard Accessible Button"
        typeBtn="tertiary"
        size="md"
        onClick={handleClick}
      >
        Keyboard Accessible Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Keyboard Accessible Button/i,
    });

    fireEvent.keyDown(buttonElement, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(buttonElement, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should activate on Enter and Space keys when not disabled on Error button', () => {
    const handleClick = jest.fn();
    render(
      <Button
        aria-label="Keyboard Accessible Button"
        typeBtn="error"
        size="md"
        onClick={handleClick}
      >
        Keyboard Accessible Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Keyboard Accessible Button/i,
    });

    fireEvent.keyDown(buttonElement, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(buttonElement, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should set tabIndex to -1 when disabled on Primary button', () => {
    render(
      <Button typeBtn="primary" size="md" aria-label="Disabled Button" disabled>
        Disabled Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Disabled Button/i,
    });
    expect(buttonElement).toHaveAttribute('tabIndex', '-1');
  });

  it('should set tabIndex to -1 when disabled on Secondary button', () => {
    render(
      <Button
        typeBtn="secondary"
        size="md"
        aria-label="Disabled Button"
        disabled
      >
        Disabled Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Disabled Button/i,
    });
    expect(buttonElement).toHaveAttribute('tabIndex', '-1');
  });

  it('should set tabIndex to -1 when disabled on Tertiary button', () => {
    render(
      <Button
        typeBtn="tertiary"
        size="md"
        aria-label="Disabled Button"
        disabled
      >
        Disabled Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Disabled Button/i,
    });
    expect(buttonElement).toHaveAttribute('tabIndex', '-1');
  });

  it('should set tabIndex to -1 when disabled on Error button', () => {
    render(
      <Button typeBtn="error" size="md" aria-label="Disabled Button" disabled>
        Disabled Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', {
      name: /Disabled Button/i,
    });
    expect(buttonElement).toHaveAttribute('tabIndex', '-1');
  });
});
