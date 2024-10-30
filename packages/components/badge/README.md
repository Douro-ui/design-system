# @douro-ui/badge

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/badge react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/badge react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import Badge from '@douro-ui/badge';
import type { BadgeProps } from '@douro-ui/badge';
```

or

```js
import Badge { BadgeProps } from '@douro-ui/badge';
```

### Example with Badge using typeBadge, count, and size

```js
import React from 'react';
import Badge from './Badge';
import Button from '@douro-ui/avatar';

const BadgeExample = () => {
  return (
    <Badge typeBadge="alert" count={5} position="top-right" size="md">
      <Avatar typeAvt="base" size="lg">
        DUI
      </Avatar>
    </Badge>
  );
};

export default BadgeExample;
```

### Example with Badge using icon, and size

```js
import React from 'react';
import Badge from './Badge';
import Button from '@douro-ui/avatar';

const BadgeExample = () => {
  return (
    <Badge
      typeBadge="icon"
      icon={() => <Icon name="close" />}
      position="top-right"
      size="md"
    >
      <Avatar typeAvt="base" size="lg">
        DUI
      </Avatar>
    </Badge>
  );
};

export default BadgeExample;
```

## Props

### Badge Props

| Prop      | Type                                                | default                                                         | Description                                                             |
| --------- | --------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| typeBadge | 'alert','neutral' ,'success' ,'warning', 'icon'     | 'alert'                                                         | Type of badge that defines the color of the badge.                      |
| count     | number                                              | undefined                                                       | The number displayed in the badge (won't be displayed if size is 'xs'). |
| position  | 'top-left','top-right','bottom-left','bottom-right' | 'top-right'                                                     | Position of the badge relative to the container.                        |
| size      | 'xs','sm','md','lg','xl','md'                       | The size of the badge, ranging from extra small to extra large. |
| children  | React.ReactNode                                     | undefined                                                       | Optional child components to display inside the badge.                  |
| styled    | BadgeStyledProps                                    | undefined                                                       | Custom styles for the badge.. (See Badge Styled Props Table).           |

### Badge Styled Props

| Prop                  | Type   | default                             | Description                                                        |
| --------------------- | ------ | ----------------------------------- | ------------------------------------------------------------------ |
| color                 | string | theme.colors.neutral.silver.shade20 | The color of the text inside the badge.                            |
| backgroundColor       | string | theme.colors.extended.red.shade50   | The background color of the badge.                                 |
| backgroundColorHover  | string | theme.colors.extended.red.shade40   | The background color of the badge when hovered.                    |
| backgroundColorActive | string | theme.colors.extended.red.shade30   | The background color of the badge when active.                     |
| borderColor           | string | theme.colors.extended.red.shade50   | The border color of the badge.                                     |
| borderColorHover      | string | theme.colors.extended.red.shade40   | The border color of the badge when hovered.                        |
| borderColorActive     | string | theme.colors.extended.red.shade30   | The border color of the badge when active.                         |
| boxShadowColor        | string | theme.colors.brand.white            | The box shadow of the badge when does not have the counter number. |
| fontSize              | string | theme.fontSize                      | Font size of the badge text.                                       |
| fontWeight            | number | theme.fontWeight.REGULAR            | Font weight of the badge text.                                     |

### Customization

To customize the behavior or appearance of the badge, see the main files below:

- Badge.tsx: Main Badge component. Here you can change the structure of the badge, the rendering logic and the behaviour.

- badgeTypes/AlertBadge.tsx: Manage and customize the alert badge behavior and styles.

- badgeTypes/NeutralBadge.tsx: Manage and customize the neutral badge behavior and styles.

- badgeTypes/SuccessBadge.tsx: Manage and customize the success badge behavior and styles.

- badgeTypes/WarningBadge.tsx: Manage and customize the warning badge behavior and styles.

- badgeTypes/IconBadge.tsx: Manage and customize the icon badge behavior and styles.

- badge.styles.ts: Modify badge styling, size handling, positioning, and other visual aspects like colors, borders, etc.
