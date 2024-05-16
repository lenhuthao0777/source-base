/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    // 'apps/**/*.{ts,tsx}',
    'src/**/*.{ts,tsx}'
    // '!packages/**/*.stories.{ts,tsx}',
    // '!packages/{storybook,theme,icons,core}/**/*',
  ],
  // to obtain access to the matchers.
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    // if your using tsconfig.paths thers is no harm in telling jest
    // '@components/(.*)$': '<rootDir>/src/components/$1',
    '@/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    // Add patterns to ignore
    '[/\\\\](dist|build)[/\\\\].+\\.(js|jsx|d.ts)$',
    // '<rootDir>/config',
  ],
  transformIgnorePatterns: [`node_modules/(?!(?:.pnpm/)?(flat))`],
  setupFilesAfterEnv: ['@testing-library/jest-dom', './src/scripts/setup-test.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  // transform: {
  //   '^.+\\.(t|j)sx?$': [
  //     '@swc/jest',
  //     {
  //       jsc: {
  //         transform: {
  //           react: {
  //             runtime: 'automatic',
  //           },
  //         },
  //       },
  //     },
  //   ],
  // },
  modulePaths: ['<rootDir>'],
  // watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
