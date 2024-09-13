import Button from '@douro-ui/button';
import { fireEvent, render, screen } from '../../../../../tests/test-utils';
import ExpandablePanel from '../ExpandablePanel';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('<ExpandablePanel />', () => {
  it('should renders a default expandable panel', () => {
    render(<ExpandablePanel header={'Open me'}>Test children</ExpandablePanel>);

    const header = screen.getByText('Open me');
    expect(screen.queryByText('Test children')).not.toBeInTheDocument();

    fireEvent.click(header);
    expect(screen.getByText('Test children')).toBeInTheDocument();

    fireEvent.click(header);
    expect(screen.queryByText('Test children')).not.toBeInTheDocument();
  });

  it('should render a start expanded panel', () => {
    render(
      <ExpandablePanel header="Open me" startExpanded>
        Test children
      </ExpandablePanel>,
    );

    expect(screen.getByText('Test children')).toBeInTheDocument();
  });

  it('should renders a disabled expandable panel', () => {
    render(
      <ExpandablePanel header={'Open me'} disabled>
        Test children
      </ExpandablePanel>,
    );

    const header = screen.getByText('Open me');
    expect(header).toBeDisabled();
    expect(header).toHaveStyle('cursor: not-allowed');
  });

  it('should renders a default expandable panel with button children', () => {
    const handleClick = jest.fn();
    render(
      <ExpandablePanel header={'Open me'}>
        <Button
          typeBtn="primary"
          size="lg"
          onClick={handleClick}
          disabled={false}
        >
          Test button children
        </Button>
      </ExpandablePanel>,
    );

    const header = screen.getByText('Open me');

    fireEvent.click(header);
    const buttonElement = screen.getByText('Test button children');
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.click(header);
    expect(screen.queryByText('Test button children')).not.toBeInTheDocument();
  });
});
