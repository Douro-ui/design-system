module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '^.*\\.stories\\.[jt]sx?$',
    'index.ts',
    'styles.ts',
    '<rootDir>/packages/react/src/tokens/spacing',
  ],
  coverageReporters: ['json', 'html', 'text'],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    // '^.+\\.svg$': 'jest-transformer-svg',
    '^.+\\.svg$': '<rootDir>/tests/__mocks__/fileMock.ts',
    '^@douro-ui/react(.*)$': '<rootDir>/packages/react/src$1',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  testRegex: ['.+\\.spec.[jt]s(x?)$', '!dist'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
};
