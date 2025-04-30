import eslintPluginNext from "@next/eslint-plugin-next";

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  {
    plugins: {
      "@next/next": eslintPluginNext,
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      ...eslintPluginNext.configs["core-web-vitals"].rules,
    },
  },
];
