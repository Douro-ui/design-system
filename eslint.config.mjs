import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReactConfig,
    languageOptions: { globals: globals.browser },
    settings: { react: { version: "detect" } }, // This must be active to enable eslint to work properly with the current version of react.
    rules: {
      "react/display-name": "off",
      "@typescript-eslint/no-explicit-any": "warn"
    },
  }
];