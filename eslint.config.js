// eslint.config.js

import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jest from "eslint-plugin-jest";
import globals from "globals";

export default [
  {
    ignores: ["dist", "build", "node_modules"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Esto define los entornos globales del navegador
        jest: true, // Añadir jest como un entorno global
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      jest: jest,
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "jest/no-disabled-tests": "warn",
    },
  },
];
