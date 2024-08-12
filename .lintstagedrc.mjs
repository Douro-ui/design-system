export default {
  '*.{ts,tsx}': () => [
    'yarn run typechecks',
    'yarn run prettier:fix',
    'yarn run lint:fix',
  ],
  '*.{ts,tsx,json,md,scss,yaml,yml}': ['yarn run stylelint:fix'],
};
