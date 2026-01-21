# @douro-ui/link

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.0.0 || 19.0.0
- react-dom: 18.0.0 || 19.0.0

**yarn**

```sh
yarn add -W @douro-ui/link react@18.0.0 react-dom@18.0.0
```

**npm**

```sh
npm i @douro-ui/link react@18.0.0 react-dom@18.0.0
```

## Usage

```js
import Link from '@douro-ui/link';
import type { LinkProps } from '@douro-ui/link';
```

or

```js
import Link { LinkProps } from '@douro-ui/link';
```

### Link Example

```js
import React from 'react';
import Link from '@douro-ui/link';

const LinkExample = () => (
  <Link href="https://example.com" size="md" ariaLabel="Example link">
    Go to Example
  </Link>
);

export default LinkExample;
```

### Link Example with Icons

```js
import React from 'react';
import Link from '@douro-ui/link';

const LinkExample = () => (
  <Link
    href="https://example.com"
    size="md"
    ariaLabel="Example link with icons"
    iconBefore={() => <svg></svg>}
    iconAfter={() => <svg></svg>}
  >
    Go to Example
  </Link>
);

export default LinkExample;
```

#### Props

##### Link Props

| Prop       | Type                          | default | Description                                                               |
| ---------- | ----------------------------- | ------- | ------------------------------------------------------------------------- |
| children   | ReactNode                     | N/A     | Content to be displayed inside the link.                                  |
| iconBefore | () => EmotionJSX              | N/A     | Optional icon component displayed before the link content.                |
| iconAfter  | () => EmotionJSX              | N/A     | Optional icon component displayed after the link content.                 |
| ariaLabel  | string                        | N/A     | Provides an accessible label for the link.                                |
| href       | string                        | N/A     | The attribute specifies the URL of the page the link goes to              |
| disabled   | boolean                       | false   | Disables the link and applies disabled styles.                            |
| size       | 'sm', 'md', 'lg', 'xl', 'xxl' | 'lg'    | Adjusts padding and font size for different link sizes.                   |
| styled     | LinkStyledProps               | N/A     | Custom style properties like colors for different states (hover, active). |

### Customization

To customize the behavior or appearance of the link, see the main files below:

- Link.tsx: Main component file for structure, rendering logic, and behavior adjustments.

- link.types.ts: Adjust types and interfaces used by the component for props like LinkProps and LinkStyledProps.

- link.styles.ts: Define and manage styles for colors, hover effects, and padding adjustments.
