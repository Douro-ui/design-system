# @douro-ui/expandable-panel

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/expandable-panel react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/expandable-panel react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import ExpandablePanel from '@douro-ui/expandable-panel';
import type { ExpandablePanelProps } from '@douro-ui/expandable-panel';
```

or

```js
import ExpandablePanel { ExpandablePanelProps } from '@douro-ui/expandable-panel';
```

### Example with Expandable-panel without custom properties

```js
import React from 'react';
import {
  ExpandablePanel,
  ExpandablePanelItem,
} from '@douro-ui/expandable-panel';

const ExampleExpandablePanel = () => {
  return (
    <ExpandablePanel>
      <ExpandablePanelItem header="Item 1">
        Content of Item 1
      </ExpandablePanelItem>
      <ExpandablePanelItem header="Item 2">
        Content of Item 2
      </ExpandablePanelItem>
    </ExpandablePanel>
  );
};

export default ExampleExpandablePanel;
```

### Example with Expandable-panel using custom properties

```js
import React from 'react';
import {
  ExpandablePanel,
  ExpandablePanelItem,
} from '@douro-ui/expandable-panel';

const ExampleExpandablePanel = () => {
  return (
    <ExpandablePanel multiple preventAllClosed>
      <ExpandablePanelItem header="Item 1" startExpanded>
        Content of Item 1
      </ExpandablePanelItem>
      <ExpandablePanelItem header="Item 2" disabled>
        Content of Item 2
      </ExpandablePanelItem>
    </ExpandablePanel>
  );
};

export default ExampleExpandablePanel;
```

#### Props

##### ExpandablePanel Props

| Prop             | Type                       | default | Description                                          |
| ---------------- | -------------------------- | ------- | ---------------------------------------------------- |
| items            | ExpandablePanelItemProps[] | N/A     | Array of items to display in the expandable panel.   |
| preventAllClosed | boolean                    | false   | If true, at least one item must remain expanded.                  |
| styled           | ExpandablePanelStyledProps | N/A     | Custom styles for the expandable panel.     |
| multipleOpens    | boolean                    | false   | Allows multiple items to be expanded simultaneously. |

##### ExpandablePanelItem Props

| Prop          | Type       | default   | Description                                                  |
| ------------- | ---------- | --------- | ------------------------------------------------------------ |
| header        | string     | ReactNode | Text which will be showed in header section                  |
| startExpanded | boolean    | false     | Whether the item should start expanded.                      |
| disabled      | boolean    | false     | Disables interaction with the item.                          |
| expanded      | boolean    | false     | Whether the item is currently expanded (controlled).         |
| onClick       | () => void | N/A       | Callback function triggered when the item header is clicked. |

### Customization

To customize the behavior or appearance of the toasters, see the main files below:

- ExpandablePanel.tsx: Main ExpandablePanel component. Here you can change the structure and rendering logic of the expandable panel. This is where the panel items are mapped and displayed.

- ExpandablePanelItem.tsx: Component that represents individual items within the ExpandablePanel. You can modify the structure and behavior of each panel item, including how they expand and collapse.

- expandablePanel.types.ts: Defines the types used in ExpandablePanel and ExpandablePanelItem. You can add or modify types here to extend the functionality or adjust the props of the panel.

- hooks/useHandleToggle.tsx: Custom hook that controls the expansion state of the ExpandablePanel items. Modify this file to change how the panel items toggle, including custom behaviors like preventing all panels from being closed or allowing multiple panels to be open simultaneously.
