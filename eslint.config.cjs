const js = require("@eslint/js");
const jestPlugin = require("eslint-plugin-jest");
const globals = require("globals");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");

module.exports = [
  {
    ignores: ["dist", "build", "node_modules"], // Ignorar estas carpetas
  },
  {
    files: ["**/*.{js,jsx}"], // Aplicar configuración a todos los archivos .js y .jsx
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      jest: jestPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "jest/no-disabled-tests": "warn",
    },
  },
];
