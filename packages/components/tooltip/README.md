# @douro-ui/tooltip

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.0.0 || 19.0.0
- react-dom: 18.0.0 || 19.0.0

**yarn**

```sh
yarn add -W @douro-ui/tooltip react@18.0.0 react-dom@18.0.0
```

**npm**

```sh
npm i @douro-ui/tooltip react@18.0.0 react-dom@18.0.0
```

## Usage

```js
import Tooltip from '@douro-ui/tooltip';
import type { TooltipProps } from '@douro-ui/tooltip';
```

or

```js
import Tooltip { TooltipProps } from '@douro-ui/tooltip';
```

### Example with Tooltip without custom properties

```js
import React from 'react';
import { Tooltip } from '@douro-ui/tooltip';

const ExampleTooltip = () => {
  return (
    <Tooltip childrenLabel="Hover me" trigger="hover" position="top">
      Example Tooltip
    </Tooltip>
  );
};

export default ExampleTooltip;
```

### Example with Tooltip using custom properties

```js
import React from 'react';
import { Tooltip } from '@douro-ui/tooltip';

const ExampleTooltip = () => {
  return (
    <Tooltip
      childrenLabel="Click me"
      trigger="click"
      position="bottom"
      isFixedBottom="true"
      openDelay={500}
      closeDelay={5000}
      styled={{ backgroundColor: 'red', color: 'white' }}
    >
      Example Tooltip
    </Tooltip>
  );
};

export default ExampleTooltip;
```

#### Props

##### Tooltip Props

| Prop          | Type                          | default | Description                                                                                        |
| ------------- | ----------------------------- | ------- | -------------------------------------------------------------------------------------------------- |
| children      | ReactNode                     | N/A     | Content displayed inside the tooltip.                                                              |
| childrenLabel | ReactNode                     | N/A     | Content displayed outside the tooltip.                                                             |
| trigger       | 'hover', 'click'              | 'hover' | Defines the action that triggers the tooltip to appear.                                            |
| position      | 'top','bottom','left','right' | 'top'   | Sets the position of the tooltip relative to the trigger element.                                  |
| openDelay     | number                        | 300     | Delay in milliseconds before showing the tooltip. If set to 0, the tooltip will appear immediately |
| closeDelay    | number                        | 0       | Delay in milliseconds before closing the tooltip. If set to 0, the tooltip will not be closed      |
| isFixedBottom | boolean                       | false   | If set true it will be set fixed on the bottom of viewport.                                        |
| styled        | TooltipStyledProps            | N/A     | Custom styles for the tooltip (e.g., background color)                                             |

### Customization

To customize the behavior or appearance of the toasters, see the main files below:

- Tooltip.tsx: The main Tooltip component. Here you can modify the structure and logic of the tooltip, such as how it calculates its position and how it is triggered.

- tooltip.types.ts: Defines the types used for Tooltip props, including custom styles and position options. You can extend or modify the types here to adjust the functionality or add new features.

- hooks/useTooltipVisibility.ts: A custom hook that manages the visibility of the tooltip. You can modify this hook to customize how the tooltip appears or hides, including behavior for delays and trigger events. hooks/useClickOutside.ts: Fine-tune the behavior for when the tooltip should hide on outside clicks.

- utils/calculatePosition.ts: Utility function for calculating the position of the tooltip relative to the trigger element. You can modify this function to change how positions are calculated or add new positioning logic. utils/handleEvents.ts: Extend or change how the tooltip reacts to different event triggers (e.g., click, hover).
