import type { JestConfigWithTsJest } from 'ts-jest';
const packageJson = require('./package.json');

const jestConfig: JestConfigWithTsJest = {
  ...packageJson.jest,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.svg$': 'jest-svg-transformer',
    uuid: require.resolve('uuid') // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
  },
  moduleDirectories: ['node_modules', '<rootdir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts', '@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};

export default jestConfig;
