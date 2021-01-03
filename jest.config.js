module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/'
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    },
  },
}
