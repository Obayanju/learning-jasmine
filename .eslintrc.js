module.exports = {
  extends: "standard",
  rules: {
    quotes: ["error", "double"],
    "space-before-function-paren": ["error", "never"],
    semi: ["error", "always"]
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
    beforeEach: true
  }
};
