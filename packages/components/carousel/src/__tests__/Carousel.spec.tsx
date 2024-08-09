import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../../../tests/test-utils';
import Carousel from '../Carousel';
import type { Content } from '../carousel.types';

const mockContents: Content[] = [
  {
    type: 'image',
    content: { src: 'image1.jpg', alt: 'Image 1' },
  },
  {
    type: 'image',
    content: { src: 'image2.jpg', alt: 'Image 2' },
  },
  {
    type: 'video',
    content: { src: 'video1.mp4', type: 'video/mp4' },
  },
  {
    type: 'html',
    content: '<div>HTML Content</div>',
  },
];

describe('Carousel Component', () => {
  it('renders images correctly', () => {
    render(<Carousel contents={mockContents} />);
    const images = screen.getAllByRole('img') as HTMLImageElement[];
    const image1 = images.find(
      (img: HTMLImageElement) => img.getAttribute('alt') === 'Image 1',
    );
    const image2 = images.find(
      (img: HTMLImageElement) => img.getAttribute('alt') === 'Image 2',
    );

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
    expect(images.length).toBeGreaterThanOrEqual(2);
  });

  it('renders video correctly', () => {
    const { container } = render(<Carousel contents={mockContents} />);
    const videoElement = container.querySelector('video') as HTMLVideoElement;
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('controls');
    const sourceElement = videoElement.querySelector(
      'source',
    ) as HTMLSourceElement;
    expect(sourceElement).toHaveAttribute('src', 'video1.mp4');
    expect(sourceElement).toHaveAttribute('type', 'video/mp4');
  });

  it('renders HTML content correctly', () => {
    const { container } = render(<Carousel contents={mockContents} />);
    const htmlContent = Array.from(container.querySelectorAll('div')).find(
      (div: HTMLDivElement) => div.innerHTML === 'HTML Content',
    ) as HTMLDivElement | undefined;
    expect(htmlContent).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { container } = render(
      <Carousel contents={mockContents} autoPlay={true} interval={5000} />,
    );
    const carouselContainer = container.querySelector(
      '.carousel-slider',
    ) as HTMLElement;
    expect(carouselContainer).toBeInTheDocument();
  });

  it('clicks on the next arrow and checks the correct position', async () => {
    const { container } = render(<Carousel contents={mockContents} />);
    const initialActiveSlide = container.querySelector(
      '.carousel .slide.selected',
    ) as HTMLElement;
    const initialActiveSlideIndex = Array.from(
      container.querySelectorAll('.carousel .slide'),
    ).indexOf(initialActiveSlide);
    const nextButton = container.querySelector('.control-next') as HTMLElement;

    let newActiveSlideIndex = -1;
    fireEvent.click(nextButton);
    await waitFor(() => {
      const newActiveSlide = container.querySelector(
        '.carousel .slide.selected',
      ) as HTMLElement;
      newActiveSlideIndex = Array.from(
        container.querySelectorAll('.carousel .slide'),
      ).indexOf(newActiveSlide);
      expect(newActiveSlideIndex).toBe(
        (initialActiveSlideIndex + 1) % mockContents.length,
      );
    });

    fireEvent.click(nextButton);
    await waitFor(() => {
      const anotherActiveSlide = container.querySelector(
        '.carousel .slide.selected',
      ) as HTMLElement;
      const anotherActiveSlideIndex = Array.from(
        container.querySelectorAll('.carousel .slide'),
      ).indexOf(anotherActiveSlide);
      expect(anotherActiveSlideIndex).toBe(
        (newActiveSlideIndex + 1) % mockContents.length,
      );
    });
  });
});
