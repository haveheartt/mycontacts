import globals from "globals";
import pluginJs from "@eslint/js";
import { eslintConfig } from 'eslint-config-airbnb-base/package.json';

export default [
   ...eslintConfig,
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];
