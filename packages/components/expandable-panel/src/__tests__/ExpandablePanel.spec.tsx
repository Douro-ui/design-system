import Button, { ButtonSize } from '@douro-ui/button';
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '../../../../../tests/test-utils';
import ExpandablePanel from '../ExpandablePanel';
import { ExpandablePanelItemProps } from '../expandablePanel.types';
import { useHandleToggle } from '../hooks';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('<ExpandablePanel />', () => {
  const initialItems: ExpandablePanelItemProps[] = [
    { header: 'Panel 1', expanded: false, disabled: false },
    { header: 'Panel 2', expanded: false, disabled: false },
    { header: 'Panel 3', expanded: false, disabled: true },
  ];

  it('should handle preventAllClosed flag correctly', () => {
    const { result } = renderHook(() => useHandleToggle(initialItems));

    act(() => {
      result.current.handleToggle({ index: 0, preventAllClosed: true });
      result.current.handleToggle({ index: 2 });
    });

    expect(result.current.items[0].expanded).toBe(true);
    expect(result.current.items[1].expanded).toBe(false);
    expect(result.current.items[2].expanded).toBe(false);

    act(() => {
      result.current.handleToggle({ index: 0, preventAllClosed: true });
    });

    expect(result.current.items[0].expanded).toBe(true);
  });

  it('should renders a default expandable panel', () => {
    render(
      <ExpandablePanel
        items={[{ header: 'Open me', children: 'Test children' }]}
      />,
    );
    const header = screen.getByText('Open me');
    expect(screen.queryByText('Test children')).not.toBeInTheDocument();

    fireEvent.click(header);
    expect(screen.getByText('Test children')).toBeInTheDocument();

    fireEvent.click(header);
    expect(screen.queryByText('Test children')).not.toBeInTheDocument();
  });

  it('should render a start expanded panel', () => {
    render(
      <ExpandablePanel
        items={[
          { header: 'Open me', children: 'Test children', startExpanded: true },
        ]}
      />,
    );

    expect(screen.getByText('Test children')).toBeInTheDocument();
  });

  it('should renders a disabled expandable panel', () => {
    render(
      <ExpandablePanel
        items={[
          { header: 'Open me', children: 'Test children', disabled: true },
        ]}
      />,
    );

    const header = screen.getByText('Open me');
    expect(header).toBeDisabled();
    expect(header).toHaveStyle('cursor: not-allowed');
  });

  it('should renders a default expandable panel with button children', () => {
    const handleClick = jest.fn();
    render(
      <ExpandablePanel
        items={[
          {
            header: 'Open me',
            children: (
              <Button size={ButtonSize.Large} onClick={handleClick}>
                Test button children
              </Button>
            ),
          },
        ]}
      />,
    );

    const header = screen.getByText('Open me');

    fireEvent.click(header);
    const buttonElement = screen.getByText('Test button children');
    expect(buttonElement).toBeInTheDocument();
  });
});
