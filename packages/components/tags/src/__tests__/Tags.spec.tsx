import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import Tags from '../Tags';

describe('Tags Component', () => {
  it('should render the readonly tag with the correct label', () => {
    render(<Tags size="sm" typeTag="readonly" label="Readonly Tag" />);

    const tag = screen.getByText('Readonly Tag');

    expect(tag).toBeInTheDocument();
  });

  it('should render the small tag with icon before the label', () => {
    render(
      <Tags
        size="sm"
        label="Tag with Icon Before"
        iconBefore={() => <div data-testid="before-icon">🔍</div>}
      />,
    );

    const tag = screen.getByText('Tag with Icon Before');
    const beforeIcon = screen.getByTestId('before-icon');

    expect(tag).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
  });

  it('should render the small tag with icon after the label', () => {
    render(
      <Tags
        size="sm"
        label="Tag with Icon After"
        iconAfter={() => <div data-testid="after-icon">❌</div>}
      />,
    );

    const tag = screen.getByText('Tag with Icon After');
    const afterIcon = screen.getByTestId('after-icon');

    expect(tag).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });

  it('should render the small tag with icon before and icon after the label', () => {
    render(
      <Tags
        size="sm"
        label="Tag with both Icons"
        iconBefore={() => <div data-testid="before-icon">🔍</div>}
        iconAfter={() => <div data-testid="after-icon">❌</div>}
      />,
    );

    const tag = screen.getByText('Tag with both Icons');
    const beforeIcon = screen.getByTestId('before-icon');
    const afterIcon = screen.getByTestId('after-icon');

    expect(tag).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
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

  it('should render the medium tag with icon before the label', () => {
    render(
      <Tags
        size="md"
        label="Tag with Icon Before"
        iconBefore={() => <div data-testid="before-icon">🔍</div>}
      />,
    );

    const tag = screen.getByText('Tag with Icon Before');
    const beforeIcon = screen.getByTestId('before-icon');

    expect(tag).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
  });

  it('should render the medium tag with icon after the label', () => {
    render(
      <Tags
        size="md"
        label="Tag with Icon After"
        iconAfter={() => <div data-testid="after-icon">❌</div>}
      />,
    );

    const tag = screen.getByText('Tag with Icon After');
    const afterIcon = screen.getByTestId('after-icon');

    expect(tag).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });

  it('should render the medium tag with icon before and icon after the label', () => {
    render(
      <Tags
        size="md"
        label="Tag with both Icons"
        iconBefore={() => <div data-testid="before-icon">🔍</div>}
        iconAfter={() => <div data-testid="after-icon">❌</div>}
      />,
    );

    const tag = screen.getByText('Tag with both Icons');
    const beforeIcon = screen.getByTestId('before-icon');
    const afterIcon = screen.getByTestId('after-icon');

    expect(tag).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
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

  it('should close the dismissible tag and call onClose when clicked', () => {
    const handleClose = jest.fn();
    render(
      <Tags
        size="lg"
        typeTag="dismissible"
        label="Dismissible Tag"
        iconAfter={() => <div data-testid="dismiss-icon">X</div>}
        onClose={handleClose}
      />,
    );

    const dismissIcon = screen.getByTestId('dismiss-icon');

    fireEvent.click(dismissIcon);

    expect(handleClose).toHaveBeenCalled();
    expect(screen.queryByText('Dismissible Tag')).not.toBeInTheDocument();
  });

  it('should close the dismissible tag', () => {
    render(
      <Tags
        size="lg"
        typeTag="dismissible"
        label="Dismissible Tag"
        iconAfter={() => <div data-testid="dismiss-icon">X</div>}
      />,
    );

    const dismissIcon = screen.getByTestId('dismiss-icon');

    fireEvent.click(dismissIcon);

    expect(screen.queryByText('Dismissible Tag')).not.toBeInTheDocument();
  });

  it('should render the large tag with icon before the label', () => {
    render(
      <Tags
        typeTag="readonly"
        size="lg"
        label="Tag with Icon Before"
        iconBefore={() => <div data-testid="before-icon">🔍</div>}
      />,
    );

    const tag = screen.getByText('Tag with Icon Before');
    const beforeIcon = screen.getByTestId('before-icon');

    expect(tag).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
  });

  it('should render the large tag with icon after the label', () => {
    render(
      <Tags
        typeTag="readonly"
        size="lg"
        label="Tag with Icon After"
        iconAfter={() => <div data-testid="after-icon">❌</div>}
      />,
    );

    const tag = screen.getByText('Tag with Icon After');
    const afterIcon = screen.getByTestId('after-icon');

    expect(tag).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });

  it('should render the large tag with icon before and icon after the label', () => {
    render(
      <Tags
        typeTag="readonly"
        size="lg"
        label="Tag with both Icons"
        iconBefore={() => <div data-testid="before-icon">🔍</div>}
        iconAfter={() => <div data-testid="after-icon">❌</div>}
      />,
    );

    const tag = screen.getByText('Tag with both Icons');
    const beforeIcon = screen.getByTestId('before-icon');
    const afterIcon = screen.getByTestId('after-icon');

    expect(tag).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
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

  it('should render the x-large tag with icon before the label', () => {
    render(
      <Tags
        typeTag="dismissible"
        size="xl"
        label="Tag with Icon Before"
        iconBefore={() => <div data-testid="before-icon">🔍</div>}
      />,
    );

    const tag = screen.getByText('Tag with Icon Before');
    const beforeIcon = screen.getByTestId('before-icon');

    expect(tag).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
  });

  it('should render the x-large tag with icon after the label', () => {
    render(
      <Tags
        typeTag="dismissible"
        size="xl"
        label="Tag with Icon After"
        iconAfter={() => <div data-testid="after-icon">❌</div>}
      />,
    );

    const tag = screen.getByText('Tag with Icon After');
    const afterIcon = screen.getByTestId('after-icon');

    expect(tag).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
  });

  it('should render the x-large tag with icon before and icon after the label', () => {
    render(
      <Tags
        typeTag="dismissible"
        size="xl"
        label="Tag with both Icons"
        iconBefore={() => <div data-testid="before-icon">🔍</div>}
        iconAfter={() => <div data-testid="after-icon">❌</div>}
      />,
    );

    const tag = screen.getByText('Tag with both Icons');
    const beforeIcon = screen.getByTestId('before-icon');
    const afterIcon = screen.getByTestId('after-icon');

    expect(tag).toBeInTheDocument();
    expect(beforeIcon).toBeInTheDocument();
    expect(afterIcon).toBeInTheDocument();
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
