import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintImport from "eslint-plugin-import";
import eslintUnused from "eslint-plugin-unused-imports";
import { fixupPluginRules } from "@eslint/compat";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
      import: fixupPluginRules(eslintImport),
      "unused-imports": eslintUnused,
    },
  },
  {
    ignores: [
      "dist",
      "node_modules",
      "coverage",
      "eslint.config.mjs",
      "babel.config.js",
      " expo-env.d.ts",
      "scripts/*",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.node.json"],
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "off",

      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-use-before-define": "off",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".tsx"],
        },
      ],
      // https://stackoverflow.com/questions/63696724/eslint-problem-with-default-props-in-functional-component-typescript-react
      "react/prop-types": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "off",

      // https://github.com/benmosher/eslint-plugin-import/issues/1453
      "import/no-cycle": "off",
      "import/prefer-default-export": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
        },
      ],
      "import/order": [
        "error",
        {
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "~/**",
              group: "external",
              position: "after",
            },
          ],
          groups: ["builtin", "external", "internal", "unknown"],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: ["react"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: ["~/features/*/*"],
        },
      ],
      "import/first": "error",

      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "react/self-closing-comp": ["error", { component: true, html: true }],
      "max-lines": ["warn", { max: 124 }],
    },
  }
);
