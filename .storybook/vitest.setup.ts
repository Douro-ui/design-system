import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';

// This is an important step to apply the right configuration when testing your stories.
// This will include any decorators, args, parameters, etc. from your preview file.
setProjectAnnotations([projectAnnotations]);

// Cleanup after each test to prevent DOM pollution between tests
afterEach(() => {
  cleanup();
});
