import globals from "globals";
import pluginJs from "@eslint/js";
import webpackConfig from "./webpack.config";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  webpackConfig,
  eslintConfigPrettier,
];
