# Accessibility Documentation for Design System

This documentation provides guidelines on how to ensure the accessibility of components within the Design System. Following these standards ensures that the Design System complies with global accessibility requirements, including those set by the European Union.

---

## Table of Contents

1. [General Accessibility Guidelines](#general-accessibility-guidelines)
2. [ARIA Usage in Components](#aria-usage-in-components)
3. [ESLint Accessibility Configuration](#eslint-accessibility-configuration)
4. [Component-Specific Guidelines](#component-specific-guidelines)
5. [Accessibility Testing for Each Component](#accessibility-testing-for-each-component)

---

## General Accessibility Guidelines

All components should meet the following accessibility requirements:

- Proper use of **ARIA attributes** to enhance navigation and screen reader compatibility.
- **Keyboard navigation** must be fully supported, allowing users to interact with components using only the keyboard.
- Sufficient **color contrast** and avoidance of color as the sole means to convey information.
- Clear **focus states** to guide users through interactive elements.

## ARIA Usage in Components

ARIA (Accessible Rich Internet Applications) attributes provide additional context to assistive technologies, ensuring all users can navigate the Design System components effectively.

Key ARIA attributes to implement:

- **aria-label**: Provides an accessible name to elements without visible labels.
- **aria-labelledby**: Associates components with visible labels or headings.
- **aria-checked**: Indicates the state of checkable items, such as checkboxes.
- **aria-expanded**: Signals whether a collapsible component (e.g., accordion) is open or closed.
- **aria-disabled**: Communicates if an element is disabled, preventing user interaction.

## ESLint Accessibility Configuration

We use `eslint-plugin-jsx-a11y` to enforce accessibility standards. These rules should cover:

1. Enforcing ARIA attributes in interactive components.
2. Preventing common accessibility issues like missing labels, misused roles, and unlabelled form elements.

### ESLint Rule Examples

- `jsx-a11y/aria-role`: Enforce valid ARIA roles.
- `jsx-a11y/aria-props`: Ensure ARIA attributes are correct.
- `jsx-a11y/label-has-associated-control`: Require labels on all form controls.
- `jsx-a11y/alt-text`: Enforce `alt` text on images.
- `jsx-a11y/interactive-supports-focus`: Ensure interactive elements are focusable.
- `jsx-a11y/anchor-is-valid`: Ensure valid `href` attributes on anchors.
- `jsx-a11y/media-has-caption`: Require captions on media elements.
- `jsx-a11y/no-autofocus`: Avoid `autoFocus` on elements to improve keyboard navigation.
- `jsx-a11y/anchor-is-valid`: Ensure links have a valid `href` attribute.
- `jsx-a11y/no-noninteractive-element-to-interactive-role`: Prevent non-interactive elements from being assigned interactive roles.
- `jsx-a11y/no-static-element-interactions`: Prevent non-interactive elements from having interactive handlers.
- `jsx-a11y/no-noninteractive-tabindex`: Avoid using `tabindex` on non-interactive elements.
- `jsx-a11y/heading-has-content`: Ensure headings have content for better structure.
- `jsx-a11y/heading-order`: Ensure headings follow a correct hierarchical order.
- `jsx-a11y/label-has-for`: Ensure labels have a corresponding `for` attribute.
- `jsx-a11y/no-redundant-roles`: Avoid redundant ARIA roles for elements.
- `jsx-a11y/role-has-required-aria-props`: Ensure ARIA roles have the necessary properties.
- `jsx-a11y/role-supports-aria-props`: Ensure ARIA roles support ARIA attributes.
- `jsx-a11y/aria-allowed-attr`: Ensure ARIA attributes are valid for their roles.
- `jsx-a11y/aria-allowed-role`: Ensure ARIA roles are valid for their attributes.
- `jsx-a11y/aria-hidden-body`: Ensure `aria-hidden="true"` is not set on the `<body>` element.
- `jsx-a11y/aria-live`: Ensure live regions are used correctly for dynamic content.
- `jsx-a11y/aria-valid-attr`: Ensure ARIA attributes are used correctly according to their roles.
- `jsx-a11y/click-events-have-key-events`: Ensure clickable elements have keyboard events (`onClick` and `onKeyPress`).
- `jsx-a11y/interactive-elements-have-focus`: Ensure interactive elements can be focused by keyboard users.
- `jsx-a11y/label-has-associated-control`: Ensure form controls have associated labels.
- `jsx-a11y/label-has-for`: Ensure labels have a corresponding `for` attribute.
- `jsx-a11y/no-distracting-elements`: Ensure there are no distracting elements that interfere with accessibility, such as flashing elements.
- `jsx-a11y/no-redundant-roles`: Avoid using redundant ARIA roles.
- `jsx-a11y/role-has-required-aria-props`: Ensure that ARIA roles have the required attributes.
- `jsx-a11y/role-supports-aria-props`: Ensure that ARIA roles support specific ARIA attributes.

## Component-Specific Guidelines

Each component includes recommended ARIA attributes, keyboard navigation, focus management, and testing instructions.

---

### Avatar

- **Description**: Use `aria-label` to identify user avatars, especially when they contain user images or initials.
- **ARIA Attributes**: `aria-label`
- **Keyboard Navigation**: Not interactive by default but ensure focus handling if interactive.
- **Testing**: Verify with screen readers to ensure `aria-label` is announced correctly.

### Badge

- **Description**: `aria-label` should provide context about badge values if not visually obvious.
- **ARIA Attributes**: `aria-label`
- **Keyboard Navigation**: Not interactive.
- **Testing**: Ensure `aria-label` is announced by screen readers.

### Breadcrumb

- **Description**: Use `aria-current` to identify the current page in navigation.
- **ARIA Attributes**: `aria-current`
- **Keyboard Navigation**: Users should navigate through each breadcrumb link.
- **Testing**: Confirm with keyboard and screen reader navigation.

### Button

- **Description**: Use `aria-label`, and `aria-disabled` as needed.
- **ARIA Attributes**: `aria-label`, `aria-pressed`, `aria-disabled`
- **Keyboard Navigation**: Buttons should activate on `Enter` or `Space`.
- **Testing**: Check focus outline visibility and state announcement.

### Checkbox

- **Description**: Use `aria-checked` to indicate selection, `aria-disabled` for interactivity status, and `aria-label`.
- **ARIA Attributes**: `aria-checked`, `aria-disabled`, `aria-label`
- **Keyboard Navigation**: Should be toggleable with `Space`.
- **Testing**: Verify state change announcements and focus handling.

### Dropdown

- **Description**: `aria-expanded`, `aria-controls`, and `aria-labelledby` are necessary for dropdowns.
- **ARIA Attributes**: `aria-expanded`, `aria-controls`, `aria-labelledby`
- **Keyboard Navigation**: Should open with `Enter` or `Space` and allow item navigation with `Arrow` keys.
- **Testing**: Ensure focus moves correctly and `aria-expanded` updates.

### Icon

- **Description**: `aria-hidden` for decorative icons, `aria-label` for functional icons.
- **ARIA Attributes**: `aria-hidden`, `aria-label`
- **Keyboard Navigation**: Not interactive.
- **Testing**: Verify that decorative icons are hidden from screen readers.

### Input

- **Description**: Use `aria-label`, `aria-required`, and `aria-invalid` for form validation.
- **ARIA Attributes**: `aria-label`, `aria-required`, `aria-invalid`
- **Keyboard Navigation**: Should focus on tab and respond to typing.
- **Testing**: Check validation messages and focus outline.

### Link

- **Description**: Use `aria-label` for description and `aria-current` for active links.
- **ARIA Attributes**: `aria-label`, `aria-current`
- **Keyboard Navigation**: Activates with `Enter`.
- **Testing**: Confirm screen reader announcement of link purpose.

### Modal

- **Description**: Use `aria-modal`, `aria-labelledby`, and `aria-describedby` to describe content.
- **ARIA Attributes**: `aria-modal`, `aria-labelledby`, `aria-describedby`
- **Keyboard Navigation**: Should trap focus within the modal.
- **Testing**: Test focus trapping and screen reader announcements.

### Notification

- **Description**: Use `aria-live` for real-time notifications to announce updates.
- **ARIA Attributes**: `aria-live`
- **Keyboard Navigation**: Not interactive.
- **Testing**: Confirm notifications are announced automatically.

### Picture

- **Description**: `aria-label` can be used to provide descriptive alt text for images.
- **ARIA Attributes**: `aria-label`
- **Keyboard Navigation**: Not interactive.
- **Testing**: Verify alt text presence for screen reader.

### Radio

- **Description**: Use `aria-checked` for selection state, `aria-label`, and `aria-disabled`.
- **ARIA Attributes**: `aria-checked`, `aria-label`, `aria-disabled`
- **Keyboard Navigation**: Selectable with `Arrow` keys.
- **Testing**: Ensure `aria-checked` updates with state change.

### Tabs

- **Description**: Use `aria-selected` for active tab, `aria-controls`, and `aria-labelledby`.
- **ARIA Attributes**: `aria-selected`, `aria-controls`, `aria-labelledby`
- **Keyboard Navigation**: Navigate with `Arrow` keys.
- **Testing**: Confirm focus moves correctly and tab state updates.

### Tags

- **Description**: `aria-label` provides context for tag content.
- **ARIA Attributes**: `aria-label`
- **Keyboard Navigation**: If interactive, should focus on `Tab`.
- **Testing**: Verify `aria-label` is announced by screen readers.

### Textarea

- **Description**: `aria-label` describes content, with `aria-required` and `aria-invalid` for validation.
- **ARIA Attributes**: `aria-label`, `aria-required`, `aria-invalid`
- **Keyboard Navigation**: Focusable on `Tab`.
- **Testing**: Check validation and focus outline.

### Timeline

- **Description**: Use `aria-current` to indicate the current timeline event.
- **ARIA Attributes**: `aria-current`
- **Keyboard Navigation**: Not typically interactive.
- **Testing**: Ensure `aria-current` is correctly applied.

### Toaster

- **Description**: Use `aria-live` for dynamic announcements to users.
- **ARIA Attributes**: `aria-live`
- **Keyboard Navigation**: Not interactive.
- **Testing**: Confirm announcements are automatic.

### Toggle

- **Description**: Use `aria-checked` for toggle state, `aria-pressed`, `aria-disabled`, and `aria-label` for description.
- **ARIA Attributes**: `aria-checked`,`aria-pressed` , `aria-disabled`, `aria-label`
- **Keyboard Navigation**: Toggleable with `Space` or `Enter`.
- **Testing**: Verify toggle state announcements and focus management.

### Tooltip

- **Description**: Use `aria-describedby` to associate with elements.
- **ARIA Attributes**: `aria-describedby`
- **Keyboard Navigation**: Shows on focus for interactive elements.
- **Testing**: Confirm screen reader announces tooltip when focused.

### Video

- **Description**: Use `aria-label`, `aria-live`, and `aria-controls` for accessible playback controls.
- **ARIA Attributes**: `aria-label`, `aria-live`, `aria-controls`
- **Keyboard Navigation**: Play/pause with keyboard.
- **Testing**: Check screen reader announcements of playback controls.

---

## Accessibility Testing for Each Component

Each component should be tested for accessibility using tools like Axe, jest-axe, or manual screen reader testing to ensure:

- **ARIA attributes** are properly applied and announced.
- **Keyboard navigation** behaves as expected, with focus management for interactive elements.
- **Error messages and validation** are announced and visually indicated where applicable.

Following these guidelines will help create a consistent, accessible experience across the design system.
