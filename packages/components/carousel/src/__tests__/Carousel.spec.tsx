import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '../../../../../tests/test-utils';
import Carousel from '../Carousel';

const mockSlides = [
  { children: <div>Slide 1</div> },
  { children: <div>Slide 2</div> },
  { children: <div>Slide 3</div> },
];

jest.useFakeTimers();

describe('Carousel Component', () => {
  it('renders without crashing', () => {
    render(<Carousel slides={mockSlides} />);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  it('shows the correct number of slides', () => {
    render(<Carousel slides={mockSlides} />);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('handles next slide navigation', async () => {
    render(<Carousel slides={mockSlides} showIcons />);
    fireEvent.click(screen.getByLabelText('next slide'));
    await waitFor(() => {
      expect(screen.getByText('Slide 2')).toBeVisible();
    });
  });

  it('handles previous slide navigation', async () => {
    render(<Carousel slides={mockSlides} showIcons />);
    fireEvent.click(screen.getByLabelText('next slide'));
    fireEvent.click(screen.getByLabelText('next slide'));
    fireEvent.click(screen.getByLabelText('previous slide'));
    await waitFor(() => {
      expect(screen.getByText('Slide 2')).toBeVisible();
    });
  });

  it('loops to the first slide after the last slide', async () => {
    render(<Carousel slides={mockSlides} infiniteLoop showIcons />);
    fireEvent.click(screen.getByLabelText('next slide'));
    fireEvent.click(screen.getByLabelText('next slide'));
    fireEvent.click(screen.getByLabelText('next slide'));
    await waitFor(() => {
      const slideElements = screen.queryAllByText('Slide 1');
      expect(slideElements[0]).toBeInTheDocument();
    });
  });

  it('loops to the last slide from the first slide', async () => {
    render(<Carousel slides={mockSlides} infiniteLoop showIcons />);
    fireEvent.click(screen.getByLabelText('previous slide'));
    await waitFor(() => {
      const slideElements = screen.queryAllByText('Slide 3');
      expect(slideElements[0]).toBeInTheDocument();
    });
  });

  it('shows indicators and updates active state', async () => {
    render(<Carousel slides={mockSlides} showIndicators />);
    const indicators = screen.getAllByRole('button');
    expect(indicators).toHaveLength(3);
    fireEvent.click(indicators[1]);
    await waitFor(() => {
      expect(screen.getByText('Slide 2')).toBeVisible();
    });
  });

  it('autoplay functionality works', async () => {
    render(<Carousel slides={mockSlides} autoplay autoplayInterval={1000} />);
    await waitFor(
      () => {
        expect(screen.getByText('Slide 2')).toBeVisible();
      },
      { timeout: 1000 },
    );
    await waitFor(
      () => {
        expect(screen.getByText('Slide 3')).toBeVisible();
      },
      { timeout: 1000 },
    );
    await waitFor(
      () => {
        expect(screen.getByText('Slide 1')).toBeVisible();
      },
      { timeout: 1000 },
    );
    jest.useRealTimers();
  });
});
