# @douro-ui/spacing

Douro UI provides a consistent spacing system as part of the Metyis Design System. The spacing tokens are used throughout the system to ensure uniform margins and paddings in the design and implementation of React components.

## Usage

To use the spacing tokens in your project, you can import them from the spacing object provided by the design system. The tokens are expressed in rem units for scalability and responsiveness.

```js
import { spacing } from '@douro-ui/react';
```

### Using Spacing in Styled Components

```js
import styled from '@emotion/styled';
import { spacing } from '@douro-ui/spacing';

const StyledButton = styled.button`
  margin: ${spacing.spacing8};
  padding: ${spacing.spacing16};
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
`;

const App = () => <StyledButton>Click Me</StyledButton>;

export default App;
```

### Badge Styled Props

| Token Name | Value (rem) |
| ---------- | ----------- |
| spacing4   | 0.25rem     |
| spacing6   | 0.375rem    |
| spacing8   | 0.5rem      |
| spacing12  | 0.75rem     |
| spacing16  | 1rem        |
| spacing20  | 1.25rem     |
| spacing24  | 1.5rem      |
| spacing32  | 2rem        |
| spacing40  | 2.5rem      |
| spacing64  | 4rem        |
| spacing80  | 5rem        |
| spacing96  | 6rem        |
| spacing120 | 8rem        |
| spacing160 | 10rem       |

### Customizing the Spacing Scale

If you'd like to modify the spacing scale, you can update the spaceUnit or add new values based on your requirements. The spacing system multiplies the base spaceUnit by a factor to generate the rem values.

```js
export const spaceUnit = 1; // 1 rem

const createSpacing = (value: number) => `${spaceUnit * value}rem`;
```

### Customization

To customize the spacing scale or adapt it for your project, modify the following:

- Base Unit (spaceUnit): This is set to 1rem by default, ensuring scalability. You can change this to adapt to a different design system scale.

- Spacing Tokens: Add or modify spacing tokens in the spacing object, which dynamically generates rem values.
