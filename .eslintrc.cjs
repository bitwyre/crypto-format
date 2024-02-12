module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["@bitwyre/eslint-config"],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    "no-use-before-define": "off",
    "no-prototype-builtins": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  },
  overrides: [
    {
      files: ["**/*.test.ts"],
      env: {
        jest: true,
      },
    },
  ],
};
