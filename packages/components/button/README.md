# @douro-ui/button

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.0.0 || 19.0.0
- react-dom: 18.0.0 || 19.0.0

**yarn**

```sh
yarn add -W @douro-ui/button react@18.0.0 react-dom@18.0.0
```

**npm**

```sh
npm i @douro-ui/button react@18.0.0 react-dom@18.0.0
```

## Usage

```js
import Button from '@douro-ui/button';
import type { ButtonProps } from '@douro-ui/button';
```

or

```js
import Button, { ButtonProps } from '@douro-ui/button';
```

### Example with standart Button

```js
import React from 'react';
import Button from '@douro-ui/button';

const ButtonExample = () => (
  <Button aria-label="Primary Button" typeBtn="primary" size="md">
    New Button
  </Button>
);

export default ButtonExample;
```

### Example with Icon

```js
import React from 'react';
import Button from '@douro-ui/button';

const ButtonExample = () => (
  <Button
    aria-label="Primary Button"
    typeBtn="primary"
    size="md"
    iconBefore={() => <svg>Icon</svg>}
    iconAfter={() => <svg>Icon</svg>}
  >
    New Button
  </Button>
);

export default ButtonExample;
```

## Props

### Button Props

| Prop         | Type                                       | default   | Description                                                           |
| ------------ | ------------------------------------------ | --------- | --------------------------------------------------------------------- |
| typeBtn      | 'primary', 'secondary','tertiary', 'error' | 'primary' | Type of button that defines the visual style.                         |
| size         | 'sm', 'md', 'lg', 'xl'                     | 'lg'      | Size of the button, which adjusts padding and font size.              |
| disabled     | boolean                                    | false     | Disables the button and applies disabled styles.                      |
| aria-label   | string                                     | N/A       | Provides an accessible name to elements without visible labels.       |
| aria-disable | bolean                                     | false     | Communicates if an element is disabled, preventing user interaction   |
| children     | ReactNode                                  | N/A       | Content to be displayed inside the button.                            |
| onClick      | () => void                                 | N/A       | Callback executed when the button is clicked.                         |
| onKeyDown    | () => void                                 | N/A       | Callback executed when the Enter or Space key is clicked.             |
| iconBefore   | () =>ReactElement                          | N/A       | Optional icon component to be displayed before the button content.    |
| iconAfter    | () =>ReactElement                          | N/A       | Optional icon component to be displayed after the button content.     |
| styled       | ButtonStyledProps                          | N/A       | Object to customize styles, such as color, border, and border-radius. |

### Customization

To customize the behavior or appearance of the tag, see the main files below:

- Button.tsx: The main Button component. Here you can change the button structure, rendering logic, and behavior.

- buttonTypes/Primary.tsx, Secondary.tsx, Tertiary.tsx, Error.tsx: Define and manage the styles and behavior for each button type.

- button.styles.ts: Modify button styling, size handling, and visual appearance. Adjust colors, paddings, etc.
