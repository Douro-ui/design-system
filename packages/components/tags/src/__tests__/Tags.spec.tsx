import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import Tags from '../Tags';

describe('Tags Component', () => {
  it('should render the readonly tag with the correct label', () => {
    render(<Tags size="sm" typeTag="readonly" label="Readonly Tag" />);

    const tag = screen.getByText('Readonly Tag');

    expect(tag).toBeInTheDocument();
  });

  it('should render the selectable tag and handle selection', () => {
    const handleClick = jest.fn();
    render(
      <Tags
        size="md"
        typeTag="selectable"
        label="Selectable Tag"
        onClick={handleClick}
      />,
    );

    const tag = screen.getByText('Selectable Tag');
    fireEvent.click(tag);

    expect(handleClick).toHaveBeenCalled();
    expect(tag.parentElement).toHaveClass('selected');
  });

  it('should render the dismissible tag and render the correct icon', () => {
    render(
      <Tags
        size="lg"
        typeTag="dismissible"
        label="Dismissible Tag"
        iconAfter={() => <div data-testid="dismiss-icon">X</div>}
      />,
    );

    const tag = screen.getByText('Dismissible Tag');
    const dismissIcon = screen.getByTestId('dismiss-icon');

    expect(tag).toBeInTheDocument();
    expect(dismissIcon).toBeInTheDocument();
  });

  it('should render a selectable tag by default when no typeTag is provided', () => {
    render(
      <Tags
        size="xl"
        label="Selectable Tag"
        iconBefore={() => <div data-testid="dismiss-icon">X</div>}
      />,
    );

    const tag = screen.getByText('Selectable Tag');
    fireEvent.click(tag);

    expect(tag.parentElement).toHaveClass('selected');
  });

  it('should apply disabled styles when the tag is disabled', () => {
    render(
      <Tags
        typeTag="readonly"
        label="Disabled Tag"
        disabled
        data-testid="tag-id"
      />,
    );

    const tag = screen.getByTestId('tag-id');

    expect(tag).toHaveStyle('pointer-events: none');
  });
});
