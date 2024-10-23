# @douro-ui/breadcrumb

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/breadcrumb react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/breadcrumb react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import BreadcrumbGroup from '@douro-ui/breadcrumb';
import type { BreadcrumbGroupProps } from '@douro-ui/breadcrumb';
```

or

```js
import BreadcrumbGroup, { BreadcrumbGroupProps } from '@douro-ui/breadcrumb';
```

### Example with BreadcrumbGroup

```js
import React from 'react';
import BreadcrumbGroup from '@douro-ui/breadcrumbs';

const BreadcrumbExample = () => {
  const breadcrumbs = ['Home', 'Product', 'Category'];

  return (
    <BreadcrumbGroup breadcrumbs={breadcrumbs} separator=">" iconMobile="<" />
  );
};

export default BreadcrumbExample;
```

## Props

### Breadcrumb Props

| Prop     | Type                                           | default | Description                                                         |
| -------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------- |
| children | ReactNode                                      | null    | Content inside the breadcrumb item.                                 |
| onClick  | (event: React.MouseEvent<HTMLElement>) => void | null    | Function triggered when a breadcrumb item is clicked.               |
| styled   | BreadcrumbStyledProps                          | null    | Custom styling for the breadcrumb item (see BreadcrumbStyledProps). |

### Breadcrumb Group Props

| Prop                   | Type                  | default | Description                                                                                                 |
| ---------------------- | --------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| breadcrumbs            | string[]              | []      | An array of breadcrumb items to display.                                                                    |
| separator              | ReactNode             | '/'     | The separator between breadcrumb items. Can be customized to any character or React component.              |
| iconMobile             | ReactNode             | '<'     | Icon used to navigate on mobile views.                                                                      |
| lastVisibleBreadcrumbs | number                | 3       | Defines how many breadcrumbs are visible at the end of the list on larger screens before truncation occurs. |
| theme                  | Theme                 | null    | The theme applied to the breadcrumb group.                                                                  |
| styled                 | BreadcrumbStyledProps | null    | Custom styling for the breadcrumb group (see BreadcrumbStyledProps).                                        |

### Breadcrumb Styled Props

| Prop             | Type   | default                            | Description                                      |
| ---------------- | ------ | ---------------------------------- | ------------------------------------------------ |
| color            | string | theme.colors.brand.primary         | Text color of the breadcrumb items.              |
| colorHover       | string | theme.colors.brand.primary         | Text color when hovering over a breadcrumb item. |
| colorFocus       | string | theme.colors.brand.primary         | Text color when a breadcrumb item is focused.    |
| colorActive      | string | theme.colors.brand.secondary       | Text color when a breadcrumb item is active.     |
| borderColorFocus | string | theme.colors.extended.blue.shade50 | Border color when a breadcrumb item is focused.  |
| backgroundColor  | string | theme.colors.brand.white           | Background color of the breadcrumb group.        |
| fontSize         | string | theme.fontSize                     | Font size for breadcrumb items.                  |
| fontWeight       | number | theme.fontWeight.REGULAR           | Font weight of breadcrumb items.                 |
| fontWeightActive | number | theme.fontWeight.BOLD              | Font weight of the active breadcrumb item.       |
| fontFamily       | string | theme.fontFamily.text              | Font family used for the breadcrumb items.       |

### Customization

To customize the behavior or appearance of the breadcrumb components, you can modify the following files:

- BreadcrumbGroup.tsx: This file contains the logic for the breadcrumb group, including how it handles click events, rendering, and responsiveness.

- Breadcrumb.tsx: This file defines individual breadcrumb items and their interaction behaviors.

- breadcrumb.styles.ts: This file manages the styles for the breadcrumb components, where you can modify properties like colors, fonts, and spacing.
