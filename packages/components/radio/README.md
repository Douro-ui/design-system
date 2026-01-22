# @douro-ui/radio

Douro UI is a Metyis Design System with React components to be used in projects.

## Installation

This packages has the following peer dependencies, so please don't forget to install them:

- react: 18.0.0 || 19.0.0
- react-dom: 18.0.0 || 19.0.0

**yarn**

```sh
yarn add -W @douro-ui/radio react@18.0.0 react-dom@18.0.0
```

**npm**

```sh
npm i @douro-ui/radio react@18.0.0 react-dom@18.0.0
```

## Usage

```js
import { Radio, RadioGroup } from '@douro-ui/radio';
import type { RadioProps, RadioGroupProps, RadioOption } from '@douro-ui/radio';
```

or

```js
import { Radio, RadioProps } from '@douro-ui/radio';
```

### Radio Example

```js
import React, { useState } from 'react';
import Radio from '@douro-ui/radio';

const RadioExample = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Radio
      label="Option 1"
      value="option1"
      checked={selectedValue === 'option1'}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default RadioExample;
```

### Radio Group Example

```js
import React, { useState } from 'react';
import RadioGroup from '@douro-ui/radio';

const RadioGroupExample = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <RadioGroup
      options={options}
      name="radioGroup"
      selectedValue={selectedValue}
      onChange={handleChange}
    />
  );
};

export default RadioGroupExample;
```

#### Props

##### Radio Props

| Prop     | Type                                   | default     | Description                                           |
| -------- | -------------------------------------- | ----------- | ----------------------------------------------------- |
| label    | string                                 | N/A         | The text displayed next to the radio button.          |
| value    | string                                 | N/A         | The value associated with the radio button.           |
| checked  | string                                 | ‘top-right’ | The position of the                                   |
| duration | boolean                                | false       | Defines if the radio button is selected.              |
| onChange | (event: ChangeEvent<HTMLInputElement>) | N/A         | Function triggered when the radio button is selected. |
| disabled | boolean                                | false       | Disables the radio button.                            |
| size     | 'sm', 'md', 'lg'                       | 'lg'        | Defines the size of the radio button.                 |
| styled   | RadioStyledProps                       | N/A         | Custom styling properties for the radio button.       |

##### Radio Group Props

| Prop          | Type                    | default | Description                                         |
| ------------- | ----------------------- | ------- | --------------------------------------------------- |
| options       | RadioOption[]           | N/A     | List of radio button options.                       |
| name          | string                  | N/A     | Name of the radio button group.                     |
| selectedValue | string                  | N/A     | The currently selected value.                       |
| onChange      | (value: string) => void | N/A     | Function triggered when the selected value changes. |
| disabled      | boolean                 | false   | Disables the radio button.                          |

### Customization

To customize the behavior or appearance of the toasters, see the main files below:

- Radio.tsx: Main Radio component, where you can adjust rendering logic and interactions

- RadioGroup.tsx: Manages a group of radio buttons.

- radio.styles.ts: Contains the styling of components like LabelStyled, InputStyled, and RadioStyled.
