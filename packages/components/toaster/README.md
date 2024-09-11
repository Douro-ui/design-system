# @douro-ui/toaster

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/toaster react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/toaster react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import Toaster from '@douro-ui/toaster';
import type { ToasterProps } from '@douro-ui/toaster';
```

or

```js
import Toaster { ToasterProps } from '@douro-ui/toaster';
```

### Example with Toaster without custom properties

```js
import React, { useState } from 'react';
import Toaster from './Toaster';

const ToasterExample = () => {
  const [toasterKey, setToasterKey] = useState<number | null>(null);
  const handleShowToaster = () => {
    setToasterKey(Date.now());
  };

  return (
    <div>
      <button onClick={handleAddToaster}>Show Toaster</button>
      {toasterKey !== null && (
        <Toaster
          key={toasterKey}
          typeToaster="success"
          position="top-center"
          duration={5000}
        >
          This is a success notification!
        </Toaster>
      )}
    </div>
  );
};

export default ToasterExample;
```

### Example with Toaster using custom properties

```js
import React, { useState } from 'react';
import Toaster from './Toaster';

const ToasterExample = () => {
  const [toasterKey, setToasterKey] = useState<number | null>(null);
  const handleShowToaster = () => {
    setToasterKey(Date.now());
  };

  return (
    <div>
      <button onClick={handleAddToaster}>Show Toaster</button>
      {toasterKey !== null && (
        <Toaster
          key={toasterKey}
          typeToaster="success"
          position="top-center"
          showCloseButton={true}
          showProgressBar={true}
          duration={5000}
        >
          This is a success notification!
        </Toaster>
      )}
    </div>
  );
};

export default ToasterExample;
```

### Example with ToasterStack without custom properties

**It is important to set up the isInStack property as true to work properly**

```js
import React, { useState } from 'react';
import { ToasterStack, ToasterProps } from '@douro-ui/toaster';

const ExampleToasterStack = () => {
  const [toasters, setToasters] = useState<ToasterProps[]>([]);

  const addToaster = (toaster: ToasterProps) => {
    setToasters((prev) => [...prev, toaster]);
  };

  const removeToaster = (id: string) => {
    setToasters((prev) => prev.filter((toaster) => toaster.id !== id));
  };

  return (
    <div>
      <button onClick={() => addToaster({ id: Date.now().toString(), typeToaster: 'info', children: 'New notification!', duration: 3000, isInStack: true })}>
        Add Toaster
      </button>
      <ToasterStack toasters={toasters} removeToaster={removeToaster} />
    </div>
  );
};

export default ExampleToasterStack;
```

### Example with ToasterStack using custom properties

```js
import React, { useState } from 'react';
import { ToasterStack, ToasterProps } from '@douro-ui/toaster';

const ExampleToasterStack = () => {
  const [toasters, setToasters] = useState<ToasterProps[]>([]);

  const addToaster = (toaster: Pick<
    ToasterProps,
    | 'id'
    | 'typeToaster'
    | 'children'
    | 'duration'
    | 'position'
    | 'dismissible'
    | 'showCloseButton'
    | 'showProgressBar'
    | 'isInStack'
  >) => {
    setToasters((prev) => [...prev, toaster]);
  };

  const removeToaster = (id: string) => {
    setToasters((prev) => prev.filter((toaster) => toaster.id !== id));
  };

  return (
    <div>
      <button
        onClick={() =>
          addToaster({
            id: Date.now().toString(),
            typeToaster: 'info',
            children: 'Info notification!',
            duration: 3000,
            position: 'bottom-left',
            dismissible: false,
            showCloseButton: true,
            showProgressBar: true,
            isInStack: true, // It has to be set true
          })
        }
      >
        Add Info Toaster
      </button>

      <ToasterStack toasters={toasters} removeToaster={removeToaster} />
    </div>
  );
};

export default ExampleToasterStack;
```

#### Props

##### Toaster Props

| Prop            | Type            | default     | Description                                                                                                |
| --------------- | --------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| id              | string          | undefind    | Unique identifier for the toaster. Used especially in the stack.                                           |
| typeToaster     | string          | ‘success’   | The type of the toaster information                                                                        |
| position        | string          | ‘top-right’ | The position of the toaster                                                                                |
| duration        | number          | 3000        | Time in milliseconds until the toaster is automatically closed. If 0, it will not be automatically closed. |
| children        | React.ReactNode | null        | The content to be displayed in the toaster.                                                                |
| dismissible     | boolean         | false       | Allows the toaster to be closed by clicking on it.                                                         |
| showCloseButton | boolean         | false       | Shows a close button on the toaster.                                                                       |
| showProgressBar | boolean         | false       | Shows a progress bar indicating the remaining time until the toaster closes.                               |
| isInStack       | boolean         | false       | Indicates if the toaster is part of a stack.                                                               |
| onClose         | boolean         | false       | Callback executed when the toaster is closed.                                                              |

##### Toaster Props

| Prop          | Type                 | default | Description                                                                                                               |
| ------------- | -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| toasters      | ToasterProps[]       | []      | List of toasters to be displayed in the stack. Each toaster must have a unique id.                                        |
| removeToaster | (id: string) => void | null    | Function to remove a toaster from the stack when it is closed. The function receives the id of the toaster to be removed. |

### Customization

To customize the behavior or appearance of the toasters, see the main files below:

- Toaster.tsx: Main Toaster component. Here you can change the structure of the toaster and the rendering logic.

- Toasterstack.tsx: Component that manages the stack of toasters. If you want to change how the toasters are stacked or how they are removed, this is the file to modify.

- toasterTypes folder: Here you can change the the structure of the toaster component types SuccessToaster.tsx, ErrorToaster.tsx, WarningToaster.tsx and InfoToaster.tsx

- customOptions folder: Here you can change components like the close button (CloseButton) or the progress bar (ProgressBar) styles, and behaviors.

- utils folder: Contains the getToasterTypesStyles function, which defines the styles of the toaster based on the type. You can add new types of toasters or modify existing styles.

- Hooks folder: Contains the useToaser.tsx, which controls the duration, visibility, and interactions of the toaster. If you need to change the timing logic or hover behavior, edit this file. The useToasterQueue.tsx is responsible for managing a queue of toasters, allowing for the addition and removal of individual toasters.

- ToasterProvider.tsx: Provides context for the toasters in your application. It limits the maximum number of visible toasters and controls their lifecycle.
