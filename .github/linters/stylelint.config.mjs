// Super-linter's stylelint config: the standard rules minus the purely stylistic ordering/naming ones.
export default {
  extends: 'stylelint-config-standard',
  rules: {
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'selector-id-pattern': null,
    'selector-class-pattern': null,
  },
};
