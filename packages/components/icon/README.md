# @douro-ui/icon

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/icon react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/icon react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import Icon from '@douro-ui/icon';
import type { IconProps } from '@douro-ui/icon';
```

or

```js
import Icon { IconProps } from '@douro-ui/icon';
```

### Example with Icon without custom properties

```js
import React from 'react';
import Icon from '@douro-ui/icon';

const ExampleIcon = () => {
  return (
    <div>
      <Icon name="chevron-up" />
      <Icon name="chevron-down" />
    </div>
  );
};

export default ExampleIcon;
```

### Example with Icon using custom properties

```js
import React from 'react';
import Icon from '@douro-ui/icon';

const ExampleIcon = () => {
  return (
    <div>
      <Icon name="chevron-up" size="lg" />
      <Icon name="chevron-down" size="sm"/>
    </div>
  );
};

export default ExampleIcon;
```

#### Props

##### Icon Props

| Prop             | Type                       | default | Description                                          |
| ---------------- | -------------------------- | ------- | ---------------------------------------------------- |
| name            | string | N/A     | The name of the icon to render.  |
| size | 'sm', 'md', 'lg'                    | 'md'   | The size of the icon.                  |
| styled           | IconStyledProps	 | N/A     | Custom styles for the icon.     |


### Customization

To customize the behavior or appearance of the toasters, see the main files below:

- Icon.tsx: Main Icon component. Here you can change the structure and rendering logic of the icon.

- icon.types.ts: Defines the types used in the Icon component. You can add or modify types here to extend the functionality or adjust the props of the icon.

- icon.styles.ts: Contains styled components for the Icon. You can modify styles or add new styles here.

- icons.ts: Defines the available icons and their rendering. You can add or modify icons in this file. This file is included in the packages/svg-icons/src.
