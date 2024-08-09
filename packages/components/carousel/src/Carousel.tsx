import React, { MouseEventHandler } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { CarouselProps, Content } from './carousel.types';
import {
  CarouselStyled,
  CarouselHtmlStyled,
  IndicatorButton,
  IndicatorItem,
  Slide,
} from './carousel.styles';

const Carousel: React.FC<CarouselProps> = ({
  contents,
  showArrows = true,
  showStatus = true,
  showIndicators = true,
  showThumbs = true,
  infiniteLoop = true,
  autoPlay = false,
  interval = 3000,
  ...props
}: CarouselProps) => {
  const renderContent = (content: Content): React.ReactNode => {
    switch (content.type) {
      case 'image':
        return <img src={content.content.src} alt={content.content.alt} />;
      case 'video':
        return (
          <video controls>
            <source src={content.content.src} type={content.content.type} />
          </video>
        );
      case 'html':
        return (
          <CarouselHtmlStyled
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        );
      case 'text':
        return <p>{content.content}</p>;
      case 'component':
        return content.content;
      default:
        return null;
    }
  };

  return (
    <CarouselStyled>
      <ResponsiveCarousel
        showArrows={showArrows}
        showStatus={showStatus}
        showIndicators={showIndicators}
        showThumbs={showThumbs}
        infiniteLoop={infiniteLoop}
        autoPlay={autoPlay}
        interval={interval}
        centerMode={true}
        centerSlidePercentage={35}
        {...props}
        aria-label="Image and video carousel"
        renderIndicator={(
          clickHandler: MouseEventHandler<HTMLButtonElement>,
          isSelected: boolean,
          index: number,
        ) => (
          <IndicatorItem key={index}>
            <IndicatorButton
              type="button"
              aria-pressed={isSelected}
              aria-label={`Slide ${index + 1}`}
              onClick={clickHandler}
              isSelected={isSelected}
            >
              {isSelected ? '●' : '○'}
            </IndicatorButton>
          </IndicatorItem>
        )}
      >
        {contents.map((content: Content, index: number) => (
          <Slide key={`carousel-container-${index}`}>
            {renderContent(content)}
          </Slide>
        ))}
      </ResponsiveCarousel>
    </CarouselStyled>
  );
};

export default Carousel;
