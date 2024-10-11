import { render, screen } from '../../../../../tests/test-utils';
import Timeline from '../Timeline';

describe('<Timeline />', () => {
  it('renders the children correctly', () => {
    render(
      <Timeline
        date={new Date('2023-09-01')}
        mainContent={<div>Test Event</div>}
      />,
    );

    expect(screen.getByText('Test Event')).toBeInTheDocument();
  });
});
