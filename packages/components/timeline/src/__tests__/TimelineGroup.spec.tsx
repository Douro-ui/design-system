import { render, screen } from '../../../../../tests/test-utils';
import TimelineGroup from '../TimelineGroup';

describe('<TimelineGroup />', () => {
  const options = [
    { date: new Date('2023-09-01'), mainContent: <div>Event 1</div> },
    { date: new Date('2023-09-02'), mainContent: <div>Event 2</div> },
    { date: new Date('2023-09-03'), mainContent: <div>Event 3</div> },
  ];

  it('renders all timeline options', () => {
    render(<TimelineGroup options={options} />);

    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
    expect(screen.getByText('Event 3')).toBeInTheDocument();
  });

  it('sorts and renders timeline options by date', () => {
    render(<TimelineGroup data-testid="timeline-event" options={options} />);

    const eventElements = screen.getAllByTestId('timeline-event');

    expect(eventElements[0]).toHaveTextContent('Event 3');
    expect(eventElements[2]).toHaveTextContent('Event 1');
  });
});
