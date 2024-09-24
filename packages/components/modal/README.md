# @douro-ui/modal

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/modal react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/modal react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import Modal from '@douro-ui/modal';
import type { ModalProps } from '@douro-ui/modal';
```

or

```js
import Modal { ModalProps } from '@douro-ui/modal';
```

### Example with Modal using header, body, and footer

```js
import React, { useState } from 'react';
import Modal from './Modal';
import Button from '@douro-ui/button';

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button typeBtn="secondary" size="md" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="md"
        headerTitle="Confirmation"
        childrenBody="Are you sure you want to proceed?"
        childrenFooter={
          <>
            <Button typeBtn="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button typeBtn="primary">Confirm</Button>
          </>
        }
      />
    </div>
  );
};

export default ModalExample;
```

### Example with Modal without header and footer

```js
import React, { useState } from 'react';
import Modal from './Modal';
import Button from '@douro-ui/button';

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button typeBtn="secondary" size="md" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="md"
        childrenBody="Are you sure you want to proceed?"
      />
    </div>
  );
};

export default ModalExample;
```

## Props

### Modal Props

| Prop           | Type             | default   | Description                                                                              |
| -------------- | ---------------- | --------- | ---------------------------------------------------------------------------------------- | ---- | ---------------------------------------------------- |
| size           | 'sm'             | 'md'      | 'lg'                                                                                     | 'md' | The size of the modal can be small, medium or large. |
| headerTitle    | string           | undefined | Title text displayed in the modal header.                                                |
| childrenBody   | React.ReactNode  | undefined | Content displayed inside the body of the modal.                                          |
| childrenFooter | React.ReactNode  | undefined | Content displayed inside the footer of the modal.                                        |
| styledHeader   | ModalStyledProps | undefined | Object to customize styles such as color, fontSize, etc. (See Modal Styled Props Table). |
| styled         | ModalStyledProps | undefined | Object to customize styles such as color, fontSize, etc. (See Modal Styled Props Table). |
| isOpen         | boolean          | false     | Controls the visibility of the modal.                                                    |
| onClose        | () => void       | null      | Callback function executed when the modal is closed.                                     |      |

### Modal Styled Props

| Prop                 | Type   | default                             | Description                                       |
| -------------------- | ------ | ----------------------------------- | ------------------------------------------------- |
| color                | string | theme.colors.neutral.silver.shade20 | Text color of the modal text.                     |
| fontSize             | string | theme.fontSize                      | Font size of the modal text.                      |
| fontWeight           | number | theme.fontWeight.REGULAR            | Font weight of the modal text.                    |
| insideBorderColor    | string | theme.colors.neutral.cold.shade90   | Color of the borders inside the modal.            |
| backgroundColor      | string | theme.colors.brand.white            | Color of the background of the modal.             |
| justifyContentFooter | string | flex-end                            | Alignment of the content inside the modal footer. |

### Customization

To customize the behavior or appearance of the modal, see the main files below:

- Modal.tsx: Main Modal component. Here you can change the structure of the modal, the rendering logic and the behaviour.

- modalTypes/ModalHeader.tsx: Manage and customize the header behavior and styles.

- modalTypes/ModalFooter.tsx: Manage and customize the footer behavior and styles.

- modal.styles.ts: Modify modal styling, size handling, and visual appearance. You can change colors, paddings, fonts, etc.
