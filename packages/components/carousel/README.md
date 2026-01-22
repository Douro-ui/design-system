# @douro-ui/carousel

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This package has the following peer dependencies, so please don't forget to install them:

- react: 18.0.0 || 19.0.0
- react-dom: 18.0.0 || 19.0.0

**yarn**

```sh
yarn add -W @douro-ui/carousel react@18.0.0 react-dom@18.0.0
```

**npm**

```sh
npm i @douro-ui/carousel react@18.0.0 react-dom@18.0.0
```

## Usage

```js
import Carousel from '@douro-ui/carousel';
import type { CarouselProps } from '@douro-ui/carousel';
```

or

```js
import { Carousel, CarouselProps } from '@douro-ui/carousel';
```

### Example with Carousel using custom properties

```js
import React from 'react';
import { Carousel } from '@douro-ui/carousel';

const ExampleCarousel = () => {
  return (
    <Carousel
      visibleSlides={2}
      autoplay={true}
      autoplayInterval={3000}
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      leftArrowIcon={<CustomLeftIcon />}
      rightArrowIcon={<CustomRightIcon />}
      styled={{ backgroundColor: 'lightgray' }}
      slides={[
        {
          id: 'slide 1',
          children: (
            <div style={{ backgroundColor: 'lightblue', height: '200px' }}>
              Slide 1
            </div>
          ),
        },
        {
          id: 'slide 2',
          children: (
            <div style={{ backgroundColor: 'lightcoral', height: '200px' }}>
              Slide 2
            </div>
          ),
        },
        {
          id: 'slide 3',
          children: (
            <div style={{ backgroundColor: 'lightgreen', height: '200px' }}>
              Slide 3
            </div>
          ),
        },
      ]}
    />
  );
};

export default ExampleCarousel;
```

### Props

#### Carousel Props

| Prop             | Type                 | Default | Description                                                                 |
| ---------------- | -------------------- | ------- | --------------------------------------------------------------------------- |
| children         | ReactNode            | N/A     | The slides or content displayed inside the carousel.                        |
| visibleSlides    | number               | 1       | The number of slides visible at one time.                                   |
| autoplay         | boolean              | false   | Enables autoplay for the carousel.                                          |
| autoplayInterval | number               | 3000    | The interval (in milliseconds) between slides during autoplay.              |
| disabled         | boolean              | false   | Disables navigation buttons and autoplay.                                   |
| showArrows       | boolean              | false   | Determines whether the arrow buttons are displayed.                         |
| showIndicators   | boolean              | false   | Displays slide indicators below the carousel.                               |
| infiniteLoop     | boolean              | false   | Enables infinite looping of slides.                                         |
| slides           | CarouselSlideProps[] | N/A     | An array of slide objects to be displayed in the carousel.                  |
| styled           | CarouselStyledProps  | N/A     | Custom styles for the carousel, such as background color and button styles. |

#### Carousel Slide Props

| Prop     | Type                     | Default | Description                                                        |
| -------- | ------------------------ | ------- | ------------------------------------------------------------------ |
| styled   | CarouselSlideStyledProps | N/A     | Custom styles for the slide, such as background color and borders. |
| children | ReactNode                | N/A     | The content displayed inside the slide.                            |

#### Carousel Styled Props

| Prop            | Type   | Default | Description                           |
| --------------- | ------ | ------- | ------------------------------------- |
| gap             | string | N/A     | The gap between slides.               |
| backgroundColor | string | N/A     | The background color of the carousel. |

#### Carousel Slide Styled Props

| Prop            | Type   | Default | Description                        |
| --------------- | ------ | ------- | ---------------------------------- |
| borderRadius    | string | N/A     | The border radius of the slide.    |
| borderColor     | string | N/A     | The border color of the slide.     |
| height          | string | N/A     | The height of the slide.           |
| width           | string | N/A     | The width of the slide.            |
| backgroundColor | string | N/A     | The background color of the slide. |

### Customization

To customize the behavior or appearance of the carousel, see the following files:

- **Carousel.tsx**: The main Carousel component. Modify the structure and logic of the carousel, such as navigation and autoplay behavior.
- **carousel.types.ts**: Defines the types used for Carousel props, including custom styles. Extend or modify the types to add new features or styles.
- **carousel.styles.ts**: The styles for the Carousel component, including layout, slide behavior, and button styles. Modify these to adjust the appearance of the carousel.
