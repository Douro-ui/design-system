# @douro-ui/dropdown

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/dropdown react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/dropdown react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import Dropdown from '@douro-ui/dropdown';
import type { DropdownProps } from '@douro-ui/dropdown';
```

or

```js
import Dropdown { DropdownProps } from '@douro-ui/dropdown';
```

### Example with Dropdown

```js
import React from 'react';
import Dropdown from '@douro-ui/dropdown';

const DropdownExample = () => {
  const [selectedBanana, setSelectedBanana] = useState<string | undefined>();

  const bananaOptions = [
    { id: '1', name: 'Cavendish Banana' },
    { id: '2', name: 'Red Banana' },
    { id: '3', name: 'Plantain Banana' },
  ];

  const handleSelect = (id: string) => {
    const selectedOption = bananaOptions.find(option => option.id === id);
    setSelectedBanana(selectedOption ? selectedOption.name : undefined);
  };

  return (
    <Dropdown
      options={bananaOptions}
      label="Banana Type"
      placeholder="Choose a banana..."
      selectedId={selectedBanana}
      onSelect={handleSelect}
    />
  );
};

export default DropdpwnExample;
```

## Props

### Dropdown Props

| Prop        | Type                 | default   | Description                                                                                 |
| ----------- | -------------------- | --------- | ------------------------------------------------------------------------------------------- |
| options     | DropdownItem[]       | []        | The options available in the dropdown. Each option must have an id and a name.              |
| label       | string               | ''        | Label for the dropdown, displayed above the input field.                                    |
| placeholder | string               | ''        | Placeholder text when no option is selected.                                                |
| disabled    | boolean              | false     | Disables the dropdown if set to true.                                                       |
| selectedId  | string               | ''        | The id of the currently selected option.                                                    |
| onSelect    | (id: string) => void | null      | Callback function triggered when an option is selected.                                     |
| styled      | DropdownStyledProps  | undefined | Object to customize styles such as color, fontSize, etc. (See Dropdown Styled Props Table). |
| theme       | Theme                | null      | The theme used on the dropdown.                                                             |

### Dropdown Item Props

| Prop     | Type    | default | Description                                                       |
| -------- | ------- | ------- | ----------------------------------------------------------------- |
| id       | string  | ''      | Unique identifier for the dropdown item.                          |
| name     | string  | ''      | Display name of the dropdown item.                                |
| imageUrl | string  | ''      | Optional URL for an image associated with the dropdown item.      |
| disabled | boolean | false   | Indicates whether the dropdown item is disabled (non-selectable). |

### Dropdown Styled Props

| Prop                      | Type   | default                               | Description                                                       |
| ------------------------- | ------ | ------------------------------------- | ----------------------------------------------------------------- |
| color                     | string | theme.colors.neutral.silver.shade10   | The color of the text inside the dropdown.                        |
| backgroundColor           | string | theme.colors.brand.white              | The background color of the dropdown.                             |
| backgroundColorItem       | string | theme.colors.brand.white              | The background color of each item in the dropdown.                |
| backgroundColorItemHover  | string | theme.colors.neutral.silver.shade95   | The background color of an item when hovered over.                |
| backgroundColorItemActive | string | theme.colors.extended.silver.shade90  | The background color of an item when active.                      |
| borderColor               | string | theme.colors.extended.silver.shade70  | The border color of the dropdown.                                 |
| borderColorHover          | string | theme.colors.extended.silver.shade50  | The border color of the dropdown when hovered.                    |
| borderColorActive         | string | theme.colors.extended..silver.shade30 | The border color of the dropdown when active.                     |
| borderRadius              | string | '0.25rem'                             | The radius of the dropdown's corners, allowing for rounded edges. |
| fontSize                  | string | theme.fontSize                        | Font size of the dropdown text.                                   |
| fontWeight                | number | theme.fontWeight.REGULAR              | Font weight of the dropdown text.                                 |
| fontSizeLabel             | string | theme.fontSize                        | The font size of the label above the dropdown.                    |
| fontWeightLabel           | number | theme.fontWeight.BOLD                 | Font weight of the label text.                                    |
| fontWeightHover           | number | theme.fontWeight.BOLDER               | The font weight of the dropdown text when hovered over.           |
| width                     | string | '30vw'                                | The width of the dropdown component.                              |

### Customization

To customize the behavior or appearance of the badge, see the main files below:

- Dropdown.tsx: Main Dropdown component. Here you can change the structure of the badge, the rendering logic and the behaviour.

- DropdownItem.tsx: Manages and customizes the individual dropdown items. You can adjust how items are rendered and their associated behaviors.

- dropdown.styles.ts: Modify dropdown styling, such as colors, borders, padding, and more.
