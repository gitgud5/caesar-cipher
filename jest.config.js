// This is the default file for jest configuration. For educational purposes, I am making it. :)
module.exports = {
  // The test environment to use
  testEnvironment: "node",

  // Transform files with TypeScript using ts-jest
  preset: "ts-jest",

  //   testMatch and testRegex cannot be used together (REMEMBER THAT BRO!!)
  // The pattern Jest uses to detect test files
  //   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",

  // An array of file extensions your tests use
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>"],

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/*.test.ts"],
};
