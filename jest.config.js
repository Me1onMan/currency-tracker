module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/"],
  testMatch: ["<rootDir>/__tests__/**/*.test.[tj]s?(x)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/mockData.js",
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@contexts(.*)$": "<rootDir>/src/contexts$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
  },
};
