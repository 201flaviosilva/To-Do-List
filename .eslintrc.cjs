module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		jest: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		},
	},
	plugins: [
		"react",
		"@typescript-eslint",
		"eslint-plugin-react",
		"styled-components-a11y",
		"jest",
		"jest-extended",
	],
	extends: [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:@typescript-eslint/recommended",
		"react-app",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:styled-components-a11y/recommended",
		"plugin:jest/recommended",
		"plugin:jest-extended/recommended",
	],
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
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
		"import/no-unresolved": ["error", { "ignore": ["^[^.]"] }],
		"import/order": [
			"warn", {
				groups: ["builtin", "external", "object", "type", "internal", "parent", "sibling", "index",],
				alphabetize: { "order": "asc", "caseInsensitive": true, },
			},
		]
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"]
			}
		}
	}
};
