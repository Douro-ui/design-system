module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['^.*\\.stories\\.[jt]sx?$', 'index.ts'],
  coverageReporters: ['json', 'html', 'text'],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  testEnvironment: 'jsdom',
  testRegex: ['.+\\.spec.[jt]s(x?)$', '!dist'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
};
