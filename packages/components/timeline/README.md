# @douro-ui/timeline

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/timeline react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/timeline react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import Timeline, TimelineGroup from '@douro-ui/timeline';
import type { TimelineProps, TimelineGroupProps } from '@douro-ui/timeline';
```

or

```js
import Timeline { TimelineProps } from '@douro-ui/timeline';
```

### Example with simple vertical timeline

```js
import React from 'react';
import TimelineGroup from '@douro-ui/timeline';

const events = [
  {
    date: new Date('2024-05-20'),
    mainContent: (
      <>
        <div>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
  },
  {
    date: new Date('2024-06-20'),
    miniContent: (
      <>
        <div>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
  },
  {
    date: new Date('2024-07-20'),
    mainContent: (
      <>
        <div>Office Inauguration</div>
        <div>Started journey with new office</div>
      </>
    ),
  },
];

const TimelineExample = () => (
  <TimelineGroup options={events} horizontally={false} />
);

export default TimelineExample;
```

## Props

### Timeline Props

| Prop         | Type                | default   | Description                                                                   |
| ------------ | ------------------- | --------- | ----------------------------------------------------------------------------- |
| date         | Date                | null      | The date for the event displayed on the timeline.                             |
| mainContent  | React.ReactNode     | null      | The content to display for the timeline event on left side.                   |
| miniContent  | React.ReactNode     | null      | The content to display for the timeline event on right side                   |
| horizontally | boolean             | false     | Set the direction of the timeline.                                            |
| theme        | Theme               | null      | The theme used on the timeline.                                               |
| styled       | TimelineStyledProps | undefined | Customizes the appearance of the timeline event. (See Timeline Styled Props). |

### Timeline Styled Props

| Prop            | Type   | default                             | Description                                     |
| --------------- | ------ | ----------------------------------- | ----------------------------------------------- |
| color           | string | theme.colors.neutral.silver.shade50 | Border color of the timeline container hovered. |
| backgroundColor | string | theme.colors.brand.white            | Background color of the timeline container.     |
| borderColor     | string | theme.colors.neutral.silver.shade90 | Border color of the timeline container.         |
| fontSize        | string | theme.fontSize                      | Font size of the timeline text.                 |

### TimelineGroup Props

| Prop         | Type                     | default   | Description                                                                              |
| ------------ | ------------------------ | --------- | ---------------------------------------------------------------------------------------- |
| options      | TimelineProps[]          | []        | An array of event objects with date and children properties. (See Timeline Props Table). |
| horizontally | boolean                  | false     | Set the direction of the timeline.                                                       |
| theme        | Theme                    | null      | The theme used on the timeline.                                                          |
| styled       | TimelineGroupStyledProps | undefined | Customizes the appearance of the timeline. (See TimelineGroup Styled Props).             |

### TimelineGroup Styled Props

| Prop                   | Type   | default                             | Description                                      |
| ---------------------- | ------ | ----------------------------------- | ------------------------------------------------ |
| backgroundColor        | string | theme.colors.brand.white            | Background color of the timeline container.      |
| borderColor            | string | theme.colors.neutral.silver.shade90 | Border color of the timeline container.          |
| borderColorHover       | string | theme.colors.neutral.silver.shade50 | Border color of the timeline container hovered.  |
| lineColor              | string | theme.colors.extended.blue.shade90  | Color of the line connecting timeline events.    |
| circleBackgroundColor  | string | theme.colors.brand.white            | Background color of the circle of the event.     |
| circleBordercolor      | string | theme.colors.extended.blue.shade70  | Border color of the circle of the event.         |
| circleBorderColorHover | string | theme.colors.extended.blue.shade40  | Border color of the circle of the event hovered. |

### Customization

To customize the behavior or appearance of the timeline, see the main files below:

- Timeline.tsx: Here you can change the structure of the timeline event, the rendering logic and the behaviour.

- TimelineGroup.tsx: Main Timeline component. Here you can change the structure of the timeline, the rendering logic and the behaviour.

- timeline.styles.ts: Modify timeline styling, size handling, and visual appearance.
