# @douro-ui/toggle

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/toggle react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/toggle react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import Toggle from '@douro-ui/toggle';
import type { ToggleProps } from '@douro-ui/toggle';
```

or

```js
import Toggle, { ToggleProps } from '@douro-ui/toggle';
```

### Toogle Example

```js
import React, { useState } from 'react';
import Toggle from '@douro-ui/toggle';

const ToggleExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Toggle
      checked={isChecked}
      onChange={(e) => handleToggleChange(e.target.checked)}
      label="Toggle Exemple"
      title="Toggle switch"
      icon={() => <span>✕</span>}
    >
      Toggle Exemple
    </Toggle>
  );
};

export default ToggleExample;
```

#### Props

##### Radio Props

| Prop           | Type                                   | default   | Description                                       |
| -------------- | -------------------------------------- | --------- | ------------------------------------------------- |
| checked        | boolean                                | false     | Determines whether the toggle is checked.         |
| icon           | () => EmotionJSX                       | undefined | Optional icon component to be displayed .         |
| onToggleChange | (checked: boolean) => void             | N/A       | Function triggered when the toggle state changes. |
| onChange       | (event: ChangeEvent<HTMLInputElement>) | N/A       | Function triggered when the toggle state changes. |
| disabled       | boolean                                | false     | Disables the toggle.                              |
| size           | 'sm', 'md', 'lg'                       | 'lg'      | Defines the size of the toggle.                   |
| styled         | ToggleStyledProps                      | N/A       | Custom styling properties for the toogle.         |

### Customization

To customize the behavior or appearance of the toggle, see the main files below:

- Toggle.tsx: Main Toggle component, where you can adjust rendering logic and interactions.

- toggle.types.ts: Defines the types for the Toggle component, including `ToggleProps` and `ToggleStyledProps`, allowing for type-safe customizations.

- toggle.styles.ts: Contains the styling of components like ToggleStyled, InputStyled, and CircleStyled.
