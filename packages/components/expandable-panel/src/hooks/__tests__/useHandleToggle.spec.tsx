import { ExpandablePanelItemProps } from '../../expandablePanel.types';
import { renderHook, waitFor } from '../../../../../../tests/test-utils';
import { useHandleToggle } from '../../hooks/useHandleToggle';

describe('useHandleToggle', () => {
  it('should prevent all panels from being closed when preventAllClosed is true', async () => {
    const initialItems: ExpandablePanelItemProps[] = [
      { header: 'Panel 1', children: 'Content 1', expanded: true },
      { header: 'Panel 2', children: 'Content 2', expanded: false },
    ];

    const { result } = renderHook(() => useHandleToggle(initialItems));

    waitFor(() => {
      result.current.handleToggle({
        index: 1,
        preventAllClosed: true,
        multipleOpens: true,
      });
    });

    await waitFor(() => {
      expect(result.current.items).toEqual([
        { header: 'Panel 1', children: 'Content 1', expanded: true },
        { header: 'Panel 2', children: 'Content 2', expanded: true },
      ]);
    });
  });

  it('should allow all panels to be closed when preventAllClosed is false', async () => {
    const initialItems: ExpandablePanelItemProps[] = [
      { header: 'Panel 1', children: 'Content 1', expanded: true },
      { header: 'Panel 2', children: 'Content 2', expanded: true },
    ];

    const { result } = renderHook(() => useHandleToggle(initialItems));

    waitFor(() => {
      result.current.handleToggle({
        index: 0,
        preventAllClosed: false,
        multipleOpens: false,
      });
    });

    await waitFor(() => {
      expect(result.current.items).toEqual([
        { header: 'Panel 1', children: 'Content 1', expanded: false },
        { header: 'Panel 2', children: 'Content 2', expanded: false },
      ]);
    });
  });

  it('should allow multiple panels to be open when multipleOpens is true', async () => {
    const initialItems: ExpandablePanelItemProps[] = [
      { header: 'Panel 1', children: 'Content 1', expanded: true },
      { header: 'Panel 2', children: 'Content 2', expanded: false },
    ];

    const { result } = renderHook(() => useHandleToggle(initialItems));

    waitFor(() => {
      result.current.handleToggle({
        index: 1,
        preventAllClosed: false,
        multipleOpens: true,
      });
    });

    await waitFor(() => {
      expect(result.current.items).toEqual([
        { header: 'Panel 1', children: 'Content 1', expanded: true },
        { header: 'Panel 2', children: 'Content 2', expanded: true },
      ]);
    });
  });

  it('should allow multiple panels to be open and prevent all from being closed when preventAllClosed is true and multipleOpens is true', async () => {
    const initialItems: ExpandablePanelItemProps[] = [
      { header: 'Panel 1', children: 'Content 1', expanded: true },
      { header: 'Panel 2', children: 'Content 2', expanded: false },
    ];

    const { result } = renderHook(() => useHandleToggle(initialItems));

    waitFor(() => {
      result.current.handleToggle({
        index: 1,
        preventAllClosed: true,
        multipleOpens: true,
      });
    });

    await waitFor(() => {
      expect(result.current.items).toEqual([
        { header: 'Panel 1', children: 'Content 1', expanded: true },
        { header: 'Panel 2', children: 'Content 2', expanded: true },
      ]);
    });
  });
});
