import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";

export default {
  ignores: ["dist"],
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parser: tseslintParser,
  },
  extends: [
    "prettier",
    js.configs.recommended,
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    tseslint,
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "no-var": "error",
    indent: ["error", "tab", { SwitchCase: 1 }],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
      },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "no-restricted-syntax": [
      "error",
      {
        selector: 'CallExpression[callee.object.name="$match"]',
        message: "$match can be used consecutively.",
      },
    ],
    "prettier/prettier": "error",
  },
};
