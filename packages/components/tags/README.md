# @douro-ui/tags

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.0.0 || 19.0.0
- react-dom: 18.0.0 || 19.0.0

**yarn**

```sh
yarn add -W @douro-ui/tags react@18.0.0 react-dom@18.0.0
```

**npm**

```sh
npm i @douro-ui/tags react@18.0.0 react-dom@18.0.0
```

## Usage

```js
import Tags from '@douro-ui/tags';
import type { TagsProps } from '@douro-ui/tags';
```

or

```js
import Tags { TagsProps } from '@douro-ui/tags';
```

### Example with Selectable Tag

```js
import React, { useState } from 'react';
import Tags from '@douro-ui/tags';

const SelectableTagExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Tags
      typeTag="selectable"
      size="md"
      label="Tag Label"
      onClick={() => setIsSelected(!isSelected)}
    />
  );
};

export default SelectableTagExample;
```

### Example with Dismissible Tag

```js
import React, { useState } from 'react';
import Tags from '@douro-ui/tags';

const DismissibleTagExample = () => (
  <Tags
    typeTag="dismissible"
    size="md"
    label="Dismissible Tag"
    iconAfter={() => <span>✕</span>}
    onClose={() => alert('Tag dismissed!')}
  />
);

export default DismissibleTagExample;
```

### Example with Readonly Tag

```js
import React, { useState } from 'react';
import Tags from '@douro-ui/tags';

const ReadonlyTagExample = () => (
  <Tags
    typeTag="readonly"
    size="md"
    label="Readonly Tag"
    iconBefore={() => <span>★</span>}
  />
);

export default ReadonlyTagExample;
```

## Props

### Tags Props

| Prop       | Type             | default      | Description                                                              |
| ---------- | ---------------- | ------------ | ------------------------------------------------------------------------ | --------- | ------------------------------------------------------ |
| typeTag    | 'readonly'       | 'selectable' | 'dismissible'                                                            | undefined | Type of the tag: readonly, selectable, or dismissible. |
| size       | 'sm'             | 'md'         | 'lg'                                                                     | 'md'      | Size of the tag, options are small, medium, or large.  |
| iconBefore | () => EmotionJSX | undefined    | Optional icon component to be displayed before the label.                |
| iconAfter  | () => EmotionJSX | undefined    | Optional icon component to be displayed after the label.                 |
| label      | string           | required     | The text label of the tag.                                               |
| disabled   | boolean          | false        | Whether the tag is disabled or interactive.                              |
| onClick    | () => void       | undefined    | Callback function executed when a selectable tag is clicked.             |
| onClose    | () => void       | undefined    | Callback function executed when a dismissible tag is closed.             |
| styled     | TagStyledProps   | undefined    | Object to customize styles such as color, fontWeight, borderRadius, etc. |

### Tags Styled Props

| Prop                    | Type   | default                           | Description                                          |
| ----------------------- | ------ | --------------------------------- | ---------------------------------------------------- |
| color                   | string | theme.colors.brand.primary        | Text color of the tag label.                         |
| colorHover              | string | theme.colors.brand.primary        | Text color when hovering over the tag.               |
| colorFocus              | string | theme.colors.brand.primary        | Text color when the tag is focused.                  |
| colorActive             | string | theme.colors.brand.white          | Text color when the tag is active or selected.       |
| colorDisabled           | string | theme.colors.neutral.cold.shade70 | Text color when the tag is disabled.                 |
| fontSize                | string | theme.fontSize                    | Font size of the tag text.                           |
| iconColorHover          | string | theme.colors.brand.primary        | Icon color when hovering over the tag.               |
| iconColorFocus          | string | theme.colors.brand.primary        | Icon color when the tag is focused.                  |
| iconColorActive         | string | theme.colors.brand.white          | Icon color when the tag is active or selected.       |
| iconColorDisabled       | string | theme.colors.neutral.cold.shade70 | Icon color when the tag is disabled.                 |
| backgroundColor         | string | theme.colors.neutral.cold.shade95 | Background color of the tag.                         |
| backgroundColorHover    | string | theme.colors.neutral.cold.shade90 | Background color when hovering over the tag.         |
| backgroundColorFocus    | string | theme.colors.neutral.cold.shade95 | Background color when the tag is focused.            |
| backgroundColorActive   | string | theme.colors.brand.primary        | Background color when the tag is active or selected. |
| backgroundColorDisabled | string | theme.colors.neutral.cold.shade95 | Background color when the tag is disabled.           |
| borderColor             | string | theme.colors.neutral.cold.shade90 | Border color of the tag.                             |
| borderColorHover        | string | theme.colors.neutral.cold.shade80 | Border color when hovering over the tag.             |
| borderColorFocus        | string | theme.colors.neutral.cold.shade50 | Border color when the tag is focused.                |
| borderColorActive       | string | theme.colors.brand.primary        | Border color when the tag is active or selected.     |
| borderColorDisabled     | string | theme.colors.neutral.cold.shade70 | Border color when the tag is disabled.               |
| borderRadius            | string | '0.25rem'                         | Border radius for the tag corners.                   |

### Customization

To customize the behavior or appearance of the tag, see the main files below:

- Tag.tsx: Main Tag component. Here you can change the structure of the tag, the rendering logic and the behaviour.

- tagTypes/Dismissible.tsx: Manage and customize the dismissible tag behavior and styles.

- tagTypes/Readonly.tsx: Manage and customize the readonly tag behavior and styles.

- tagTypes/Selectable.tsx: Manage and customize the selectable tag behavior and styles.

- tags.styles.ts: Modify tag styling, size handling, and visual appearance. You can change colors, paddings, etc.
