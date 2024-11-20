# @douro-ui/textarea

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.2.0
- react-dom: 18.2.0

**yarn**

```sh
yarn add -W @douro-ui/textarea react@18.2.0 react-dom@18.2.0
```

**npm**

```sh
npm i @douro-ui/textarea react@18.2.0 react-dom@18.2.0
```

## Usage

```js
import Textarea from '@douro-ui/textarea';
import type { TextareaProps } from '@douro-ui/textarea';
```

or

```js
import Textarea { TextareaProps } from '@douro-ui/textarea';
```

### Example with Character Count, Required and Resizable Textarea

```js
import React, { useState } from 'react';
import Textarea from '@douro-ui/textarea';

const TextareaExample = () => {
  return (
    <Textarea
      label="Description"
      placeholder="Enter your text here..."
      maxLength={150}
      hasCharacterCount={true}
      isRequired={true}
      canResize={true}
    />
  );
};

export default TextareaExample;
```

## Props

### Textarea Props

| Prop              | Type                | default   | Description                                                                    |
| ----------------- | ------------------- | --------- | ------------------------------------------------------------------------------ | --- | ---- | ----------------------------------------------------------------------- |
| size              | 'sm'                | 'md'      | 'lg'                                                                           | 'xl | 'lg' | Size of the textarea; options are small, medium, large, or extra-large. |
| label             | string              | ''        | The label displayed above the textarea.                                        |
| maxLength         | number              | undefined | Maximum number of characters allowed.                                          |
| placeholder       | string              | ''        | Placeholder text displayed when the textarea is empty.                         |
| isDisabled        | boolean             | false     | Disables the textarea, making it non-interactive.                              |
| isRequired        | boolean             | false     | Marks the textarea as required and displays an asterisk if a label is present. |
| hasCharacterCount | boolean             | false     | Shows a character count below the textarea.                                    |
| canResize         | boolean             | false     | Allows the user to resize the textarea.                                        |
| styled            | TextareaStyledProps | undefined | Custom styles for the textarea.                                                |

### Textarea Styled Props

| Prop                  | Type   | default                             | Description                                   |
| --------------------- | ------ | ----------------------------------- | --------------------------------------------- |
| labelColor            | string | theme.colors.brand.primary          | Color of the label text.                      |
| color                 | string | theme.colors.neutral.silver.shade70 | Text color of the textarea.                   |
| colorHover            | string | theme.colors.brand.primary          | Text color when hovering over the textarea.   |
| colorFocus            | string | theme.colors.brand.primary          | Text color when the textarea is focused.      |
| colorFilled           | string | theme.colors.neutral.silver.shade60 | Text color when the textarea is filled.       |
| colorError            | string | theme.colors.extended.red.shade60   | Text color for error state.                   |
| placeholderColor      | string | theme.colors.neutral.silver.shade70 | Placeholder text color.                       |
| placeholderColorHover | string | theme.colors.brand.primary          | Placeholder text color on hover.              |
| borderColor           | string | theme.colors.neutral.silver.shade70 | Border color of the textarea.                 |
| borderColorHover      | string | theme.colors.brand.primary          | Border color when hovering over the textarea. |
| borderColorFocus      | string | theme.colors.brand.primary          | Border color when the textarea is focused.    |
| borderColorFilled     | string | theme.colors.neutral.silver.shade60 | Border color when the textarea is filled.     |
| fontFamily            | string | theme.fontFamily.text               | Font family for the textarea text.            |

### Customization

To customize the behavior or appearance of the textarea, see the main files below:

- Textarea.tsx: Main Textarea component file, defining the component's structure, rendering logic, and behaviors.

- textarea.styles.ts: Handles visual styling, layout, and responsive design properties of the textarea.
