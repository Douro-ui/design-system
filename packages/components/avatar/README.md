# @douro-ui/avatar

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/avatar react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/avatar react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import Avatar from '@douro-ui/avatar';
import type { AvatarProps } from '@douro-ui/avatar';
```

or

```js
import Avatar { AvatarProps } from '@douro-ui/avatar';
```

### Example with base Avatar without custom properties

```js
import React from 'react';
import Avatar from '@douro-ui/avatar';

const ExampleAvatar = () => {
  return <Avatar />;
};

export default ExampleAvatar;
```

### Example with image Avatar without custom properties

```js
import React from 'react';
import Avatar from '@douro-ui/avatar';

const ExampleAvatar = () => {
  return (
    <Avatar
      src="path/to/image.jpg"
      alt="User Avatar"
      fallbackText="Fallback Text"
    />
  );
};

export default ExampleAvatar;
```

### Example with base Avatar with custom properties

```js
import React from 'react';
import Avatar from '@douro-ui/avatar';

const ExampleAvatar = () => {
  return <Avatar size="sm" />;
};

export default ExampleAvatar;
```

### Example with image Avatar with custom properties

```js
import React from 'react';
import Avatar from '@douro-ui/avatar';

const ExampleAvatar = () => {
  return (
    <Avatar
      size="xl"
      src="path/to/image.jpg"
      alt="User Avatar"
      fallbackText="Fallback Text"
    />
  );
};

export default ExampleAvatar;
```

#### Props

##### Avatar Props

| Prop     | Type   | default | Description                                                                                  |
| -------- | ------ | ------- | -------------------------------------------------------------------------------------------- |
| size     | string | 'lg'    | The size of the avatar. Options: 'sm', 'md', 'lg', 'xl'.                                     |
| src      | string | N/A     | The source URL of the image to display. If it is set the type of avatar render will be image |
| alt      | string | ''      | Alternative text for the image.                                                              |
| fallback | string | ''      | Alternative text for the image error                                                         |

### Customization

To customize the behavior or appearance of the toasters, see the main files below:

- Avatar.tsx: Main Avatar component. Here you can change the structure and rendering logic of the avatar.

- avatar.styles.ts: Contains the styled-components for the Avatar. You can modify the styles to adjust the appearance of the avatar.

- Defines the types used in the Avatar component. You can add or modify types here to extend the functionality or adjust the props of the avatar.
