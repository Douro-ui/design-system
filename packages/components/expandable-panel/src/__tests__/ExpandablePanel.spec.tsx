import Button, { ButtonSize } from '@douro-ui/button';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '../../../../../tests/test-utils';
import ExpandablePanel from '../ExpandablePanel';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('<ExpandablePanel />', () => {
  it('renders a default panel and toggles children', async () => {
    render(
      <ExpandablePanel
        items={[{ header: 'Open me', children: 'Test children' }]}
      />,
    );

    const header = screen.getByText('Open me');
    const bodyWrapper = screen.getByTestId('panel-body-wrapper');

    expect(bodyWrapper).toHaveAttribute('data-expanded', 'false');

    fireEvent.click(header);
    await waitFor(() => {
      expect(bodyWrapper).toHaveAttribute('data-expanded', 'true');
    });

    fireEvent.click(header);
    await waitFor(() => {
      expect(bodyWrapper).toHaveAttribute('data-expanded', 'false');
    });
  });

  it('renders a panel that starts expanded', async () => {
    render(
      <ExpandablePanel
        items={[
          { header: 'Open me', children: 'Test children', startExpanded: true },
        ]}
      />,
    );

    const bodyWrapper = screen.getByText('Test children').closest('div')!;
    await waitFor(() => {
      expect(bodyWrapper.style.maxHeight).not.toBe('0px');
    });

    expect(screen.getByText('Test children')).toBeInTheDocument();
  });

  it('renders a disabled panel correctly', () => {
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

  it('renders a panel with button children and handles clicks', () => {
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

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});
