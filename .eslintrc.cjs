module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "import", "@typescript-eslint", "eslint-plugin-react", "styled-components-a11y"],
  extends: ["eslint:recommended", "plugin:import/recommended", "plugin:jsx-a11y/recommended", "plugin:@typescript-eslint/recommended", "react-app", "plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:styled-components-a11y/recommended", "plugin:storybook/recommended"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "linebreak-style": ["warn", "unix"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],
    "no-unused-vars": ["warn", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }],
    "import/no-unresolved": ["error", {
      "ignore": ["^[^.]"]
    }],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "import/order": [
      "warn",
      {
        "groups": [
          "builtin",       // ex: fs, path
          "external",      // ex: react, zustand
          "internal",      // ex: @/utils, @/store
          ["parent", "sibling", "index"], // ./utils, ../myFile
        ],
        "pathGroups": [
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
