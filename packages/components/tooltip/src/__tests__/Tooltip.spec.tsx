import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../../../tests/test-utils';
import Tooltip from '../Tooltip';

describe('<Tooltip />', () => {
  it('should render the tooltip on hover and hide the tooltip when not hovered', async () => {
    render(<Tooltip childrenLabel="Tooltip content">Hover over me</Tooltip>);

    const triggerElement = screen.getByText('Tooltip content');
    expect(screen.queryByText('Hover over me')).not.toBeInTheDocument();

    fireEvent.mouseOver(triggerElement);

    await waitFor(() => {
      expect(screen.getByText('Hover over me')).toBeInTheDocument();
    });

    fireEvent.mouseOut(triggerElement);
    expect(screen.queryByText('Hover over me')).not.toBeInTheDocument();
  });

  it('should render the tooltip in the correct position (top)', async () => {
    render(
      <Tooltip childrenLabel="Tooltip content" position="top">
        Hover over me
      </Tooltip>,
    );

    const triggerElement = screen.getByText('Tooltip content');
    expect(screen.queryByText('Hover over me')).not.toBeInTheDocument();

    fireEvent.mouseOver(triggerElement);

    const tooltipElement = await waitFor(() =>
      screen.getByText('Hover over me'),
    );

    expect(tooltipElement).toBeInTheDocument();

    expect(tooltipElement).toHaveStyle('top: -16px; left: 0px');
  });

  it('should show the tooltip on click if trigger is click and should hide the tooltip on click outside', async () => {
    render(
      <div>
        <Tooltip
          childrenLabel="Tooltip content"
          trigger="click"
          position="bottom"
        >
          Click me
        </Tooltip>
        <div data-testid="outside-element">Outside element</div>
      </div>,
    );

    const triggerElement = screen.getByText('Tooltip content');

    fireEvent.click(triggerElement);

    await waitFor(() => {
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    fireEvent.mouseDown(screen.getByTestId('outside-element'));
    fireEvent.click(screen.getByTestId('outside-element'));

    await waitFor(
      () => {
        expect(screen.queryByText('Click me')).not.toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });

  it('should render the tooltip in the correct position (left)', async () => {
    render(
      <Tooltip childrenLabel="Tooltip content" position="left">
        Hover over me
      </Tooltip>,
    );

    const triggerElement = screen.getByText('Tooltip content');
    expect(screen.queryByText('Hover over me')).not.toBeInTheDocument();

    fireEvent.mouseOver(triggerElement);

    const tooltipElement = await waitFor(() =>
      screen.getByText('Hover over me'),
    );

    expect(tooltipElement).toBeInTheDocument();

    expect(tooltipElement).toHaveStyle('top: 0px');
  });

  it('should render the tooltip in the correct position (right)', async () => {
    render(
      <Tooltip childrenLabel="Tooltip content" position="right">
        Hover over me
      </Tooltip>,
    );

    const triggerElement = screen.getByText('Tooltip content');
    expect(screen.queryByText('Hover over me')).not.toBeInTheDocument();

    fireEvent.mouseOver(triggerElement);

    const tooltipElement = await waitFor(() =>
      screen.getByText('Hover over me'),
    );

    expect(tooltipElement).toBeInTheDocument();

    expect(tooltipElement).toHaveStyle('left: 16px; top: 0');
  });

  it('should render the tooltip fixed to bottom', async () => {
    render(
      <Tooltip childrenLabel="Tooltip content" isFixedBottom>
        Hover over me
      </Tooltip>,
    );

    const triggerElement = screen.getByText('Tooltip content');
    expect(screen.queryByText('Hover over me')).not.toBeInTheDocument();

    fireEvent.mouseOver(triggerElement);

    const tooltipElement = await waitFor(() =>
      screen.getByText('Hover over me'),
    );

    expect(tooltipElement).toBeInTheDocument();
  });
});
